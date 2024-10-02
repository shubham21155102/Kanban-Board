// groupByUtils.js: Contains functions for grouping tickets by status, user, and priority.

// Mapping of priority numeric values to human-readable labels.
export const priorityLabels = {
    4: "Urgent",
    3: "High",
    2: "Medium",
    1: "Low",
    0: "No priority",
};

// Creates a map of users by their ID for quick look-up.
const createUserMap = (users) => {
    return users.reduce((userMap, user) => {
        userMap[user.id] = user; // Assign user object to its ID key.
        return userMap; // Return the updated map.
    }, {});
};

// Groups tickets by their status with additional data enrichment.
export const groupByStatus = (rawData) => {
    const statusOrder = ["Backlog", "Todo", "In progress", "Done", "Canceled"];
    const userMap = createUserMap(rawData.users); // Create a user map for data enrichment.
    return statusOrder.reduce((groupedData, status) => {
        // Initialize the status group if it doesn't exist.
        if (!groupedData[status]) groupedData[status] = {};
        // Filter and map tickets to the status group, enriching ticket data.
        groupedData[status].tickets = rawData.tickets
            .filter((ticket) => ticket.status === status) // Filter tickets by the current status.
            .map((ticket) => ({
                // Map to enrich ticket data.
                ...ticket,
                priorityLabel: priorityLabels[ticket.priority], // Add readable priority label.
                userName: userMap[ticket.userId].name, // Add user name from the user map.
                isUserAvailable: userMap[ticket.userId].available, // Add user availability.
            }));
        return groupedData; // Return the updated grouped data.
    }, {});
};

// Groups tickets by the user who is assigned to them.
export const groupByUser = (rawData) => {
    // Sort users alphabetically by name.
    const sortedUsers = [...rawData.users].sort((user1, user2) =>
        user1.name.localeCompare(user2.name)
    );
    // Reduce users to a groupedData object.
    return sortedUsers.reduce((groupedData, user) => {
        // Initialize the user group if it doesn't exist.
        if (!groupedData[user.name]) groupedData[user.name] = {};
        // Add user availability to the user group.
        groupedData[user.name].isUserAvailable = rawData.users.find(
            (element) => element.name === user.name
        ).available;
        // Filter and map tickets to the user group.
        groupedData[user.name].tickets = rawData.tickets
            .filter((ticket) => ticket.userId === user.id) // Filter tickets by user ID.
            .map((ticket) => ({
                // Map to enrich ticket data.
                ...ticket,
                userName: user.name, // Assign user name to the ticket.
                priorityLabel: priorityLabels[ticket.priority], // Add readable priority label.
            }));
        return groupedData; // Return the updated grouped data.
    }, {});
};

// Groups tickets by their priority level.
export const groupByPriority = (rawData) => {
    const priorityOrder = [0, 4, 3, 2, 1]; // Order of priorities to be used for grouping.
    const userMap = createUserMap(rawData.users); // Create a user map for data enrichment.
    // Reduce priorities to a groupedData object.
    return priorityOrder.reduce((groupedData, priority) => {
        const priorityLabel = priorityLabels[priority]; // Get readable label for the priority.
        // Initialize the priority group if it doesn't exist.
        if (!groupedData[priorityLabel]) groupedData[priorityLabel] = {};
        // Filter and map tickets to the priority group, enriching ticket data.
        groupedData[priorityLabel].tickets = rawData.tickets
            .filter((ticket) => ticket.priority === priority) // Filter tickets by priority.
            .map((ticket) => ({
                // Map to enrich ticket data.
                ...ticket,
                userName: userMap[ticket.userId].name, // Add user name from the user map.
                isUserAvailable: userMap[ticket.userId].available, // Add user availability.
                priorityLabel, // Assign readable priority label to the ticket.
            }));
        return groupedData; // Return the updated grouped data.
    }, {});
};
