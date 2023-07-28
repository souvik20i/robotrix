const useConversion = (millis) => {
    
    const totalSeconds = Math.round(millis / 1000)
    const seconds = totalSeconds % 60
    const totalMinutes = Math.floor(totalSeconds / 60)
    const minutes = totalMinutes % 60
    const hours = Math.floor(totalMinutes / 60)

    const makeDoubleDigits = value => (value < 10) ? `0${value}` : value
    if (!hours) return `${makeDoubleDigits(minutes)}:${makeDoubleDigits(seconds)}`
    return `${makeDoubleDigits(hours)}:${makeDoubleDigits(minutes)}:${makeDoubleDigits(seconds)}`
}

export default useConversion