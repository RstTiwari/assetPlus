export function convertEpochToDate(epoch) {
    // Create a new Date object from the epoch (in milliseconds)
    const date = new Date(epoch);

    // Get the day, month, and year from the Date object
    const day = date.getDate().toString().padStart(2, "0"); // Add leading 0 if necessary
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-indexed, so add 1
    const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year

    // Return the date in the desired format
    return `${day}/${month}/${year}`;
}
