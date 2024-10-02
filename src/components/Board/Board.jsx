// Board.jsx: Component responsible for fetching, organizing, and displaying data.

import { useContext, useEffect, useState } from "react"; // React hooks for state and lifecycle management.
import { DisplayContext } from "../../context/DisplayContext"; // Context for display settings.
import useGroupBy from "../../hooks/useGroupBy"; // Custom hook for grouping data.
import useOrderBy from "../../hooks/useOrderBy"; // Custom hook for ordering data.
import classes from "./Board.module.css"; // CSS module for Board component styling.
import Group from "./Group"; // Group component for displaying each data group.
const Board = () => {
    const [isLoading, setIsLoading] = useState(false); // State to track data loading status.
    const [rawData, setRawData] = useState(null); // State to hold the fetched data.
    const [error, setError] = useState(null); // State to hold any errors during data fetching.
    const { groupBy, orderBy } = useContext(DisplayContext); // Extracting display settings from context.

    // Function to fetch raw data from the API.
    const fetchRawData = async () => {
        setIsLoading(true); // Indicate the start of data fetching.
        try {
            const response = await fetch(
                "https://api.quicksell.co/v1/internal/frontend-assignment"
            );
            const data = await response.json(); // Parse the JSON data from response.
            setRawData(data); // Set the fetched data into state.
        } catch {
            setError(
                "Unable to load data. Please check your internet connection or try again later as the server may be down."
            ); // Handle errors like network issues or server problems.
        } finally {
            setIsLoading(false); // Indicate the end of data fetching.
        }
    };

    // useEffect hook to initiate data fetching on component mount.
    useEffect(() => {
        fetchRawData();
    }, []);

    // Use custom hooks to group and order the fetched data.
    const groupedData = useGroupBy(rawData, groupBy);
    const groupedAndOrderedData = useOrderBy(groupedData, orderBy);

    // Render the Board UI with conditionally displayed messages and Group components.
    return (
        <div className={classes.board}>
            {/* Main board container */}
            {isLoading && <p>Loading...</p>}
            {/* Display loading message while data is being fetched */}
            {rawData &&
                Object.keys(groupedAndOrderedData).map((groupKey) => (
                    <Group
                        key={groupKey}
                        title={groupKey}
                        data={groupedAndOrderedData[groupKey]}
                    /> // Render a Group component for each group in the processed data
                ))}
            {error && <p>{error}</p>} {/* Display error message if any */}
        </div>
    );
};

export default Board; // Export Board component for use in the application.
