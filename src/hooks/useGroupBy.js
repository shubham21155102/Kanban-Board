// useGroupBy.js: Hook for grouping data by 'status', 'userId', or 'priority'.

import * as utils from "../utils/groupByUtils"; // Access to groupBy utility functions.

// Defines a hook for grouping data based on a specific criterion.
const useGroupBy = (rawData, groupBy) => {
    // Only process if rawData is provided.
    if (rawData) {
        // Decide grouping method based on 'groupBy' argument.
        switch (groupBy) {
            case "status":
                // Group data by the status of tickets.
                return utils.groupByStatus(rawData);
            case "userId":
                // Organize data by the ID of the user.
                return utils.groupByUser(rawData);
            case "priority":
                // Arrange data by the priority level.
                return utils.groupByPriority(rawData);
            // If 'groupBy' is not recognized, no grouping is performed.
            default:
            // Consider handling this case or returning the rawData unchanged.
        }
    }
    // If no rawData, consider what should be returned or handled.
};

export default useGroupBy; // Makes the hook available for import.
