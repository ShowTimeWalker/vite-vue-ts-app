export function toCapital(str: string): string {
    if (str.length === 0) {
        return str; // Return empty string for an empty input
    } else {
        return str.charAt(0).toUpperCase() + str.slice(1); // Convert first character to uppercase and concatenate with the rest of the string
    }
}
