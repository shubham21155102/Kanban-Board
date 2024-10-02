// DisplayContext.jsx: Provides a context for managing display settings like grouping and ordering.

import { createContext, useState } from "react";

// Create a new context for display settings.
export const DisplayContext = createContext();

// Provider component to hold the state and handlers for display settings.
export const DisplayProvider = (props) => {
    // State for grouping method with default from localStorage or 'status'.
    const [groupBy, setGroupBy] = useState(
        localStorage.getItem("groupBy") || "status"
    );

    // State for ordering method with default from localStorage or 'priority'.
    const [orderBy, setOrderBy] = useState(
        localStorage.getItem("orderBy") || "priority"
    );

    // Function to update the grouping method and save to localStorage.
    const handleGroupingChange = (newGroupBy) => {
        setGroupBy(newGroupBy);
        localStorage.setItem("groupBy", newGroupBy);
    };

    // Function to update the ordering method and save to localStorage.
    const handleOrderingChange = (newOrderBy) => {
        setOrderBy(newOrderBy);
        localStorage.setItem("orderBy", newOrderBy);
    };

    // Object to hold the display settings and handlers.
    const displayContext = {
        groupBy,
        orderBy,
        handleGroupingChange,
        handleOrderingChange,
    };

    // Provider component wraps children with DisplayContext to provide state access.
    return (
        <DisplayContext.Provider value={displayContext}>
            {props.children}
        </DisplayContext.Provider>
    );
};
