type ButtonProps = {
    text: string
    style: React.CSSProperties
    eventOnClick: () => void
}

export function Button({ text, eventOnClick, style }: ButtonProps) {
    return (
        <button style={style} onClick={eventOnClick} >{text}</button>
    )
}