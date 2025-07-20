/**
 * Formates a "7-15-2025" timestamp into "Tuesday, July 15, 2025". Used for human readable date formatting and dynamic url
 * @param timestamp - A timestamp
 * @returns - A date written out
 */
export const formatDateFull = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
        weekday: "long",   // "Tuesday"
        year: "numeric",   // "2025"
        month: "long",     // "July"
        day: "numeric",    // "15"
    });
};

/**
 * Formates a "7-15-2025" timestamp into "Tuesday". Used in filtering
 * @param timestamp - A timestamp
 * @returns - A date, just the day
 */
export const formatDateDay = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
        weekday: "long"   // "Tuesday"
    });
};