// orderByUtils.js: Defines sorting functions for ticket data by priority and title.

// Sort tickets by priority, highest priority first (0 is highest).
export const orderByPriority = (data) => {
    // Loop over each ticket category in the data.
    Object.keys(data).forEach((key) => {
        // Sort tickets within a category.
        data[key].tickets.sort((ticket1, ticket2) => {
            // A ticket with priority 0 comes before others.
            if (ticket1.priority === 0 && ticket2.priority !== 0) return -1;
            if (ticket1.priority !== 0 && ticket2.priority === 0) return 1;
            // Otherwise, sort by descending priority.
            return ticket2.priority - ticket1.priority;
        });
    });
    // Return the sorted data.
    return data;
};

// Sort tickets by title alphabetically.
export const orderByTitle = (data) => {
    // Loop through each ticket category.
    Object.keys(data).forEach((key) => {
        // Alphabetically sort tickets within the category by their title.
        data[key].tickets.sort((ticket1, ticket2) =>
            ticket1.title.localeCompare(ticket2.title)
        );
    });
    // Return the sorted data.
    return data;
};
