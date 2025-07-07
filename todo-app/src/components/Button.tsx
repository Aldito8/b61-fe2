type ButtonProps = {
    text: string,
    eventOnClick: () => void
}

export function Button({ text, eventOnClick }: ButtonProps) {
    return (
        <>
            <button onClick={eventOnClick}>{text}</button>
        </>
    )
}