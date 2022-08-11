export default function truncate(str: string) {
    return str.length > 40 ? str.substring(0, 37) + "..." : str
}