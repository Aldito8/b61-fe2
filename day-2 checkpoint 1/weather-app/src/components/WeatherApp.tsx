import { useEffect, useState } from "react";
import { fetchWeather } from "../api/weather";
import { useDebounce } from "../hooks/debounce";

export function WeatherApp() {
    const [cityInput, setCityInput] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("");
    const [weatherData, setWeatherData] = useState<{
        city: string
        temperature: number
    } | null>(null)

    const debounceCity = useDebounce(cityInput, 500)

    useEffect(() => {
        if (!debounceCity.trim()) {
            setError("look at the weather");
            return;
        }

        setError("")
        setLoading(true)

        fetchWeather(debounceCity)
            .then((data) => {
                setWeatherData(data)
            })
            .catch(() => {
                setError("failed to load weather")
            })
            .finally(() => setLoading(false))

    }, [debounceCity])

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityInput(e.target.value)
    }

    return (
        <>
            <h1>Weather App</h1>
            <input type="text"
                placeholder="enter city"
                value={cityInput}
                onChange={handleOnChange} />

            {loading && <p>Loading....</p>}

            {error && <p>{error}</p>}

            {weatherData && !loading && !error && (
                <>
                    <h2>{weatherData.city}</h2>
                    <h2>{weatherData.temperature} "C</h2>
                </>
            )}
        </>
    )
}   