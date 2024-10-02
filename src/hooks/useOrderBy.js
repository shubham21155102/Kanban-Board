// useOrderBy.js: Hook for ordering grouped data by 'priority' or 'title'.

import * as utils from "../utils/orderByUtils"; // Brings in ordering functions.

// This hook applies ordering to grouped data based on a selected method.
const useOrderBy = (groupedData, orderBy) => {
    // Proceed only if we have data to work with.
    if (groupedData) {
        // Decide how to order the data based on the 'orderBy' value.
        switch (orderBy) {
            case "priority":
                // If ordering by priority, use the respective utility function.
                return utils.orderByPriority(groupedData);
            case "title":
                // If ordering by title, use the respective utility function.
                return utils.orderByTitle(groupedData);
            // If the order criteria isn't covered, no ordering is done.
            default:
            // You might want to handle this case or simply return the groupedData as is.
        }
    }
    // If there's no groupedData provided, you might want to return nothing or handle it.
};

export default useOrderBy; // Exporting for use in other parts of the app.
