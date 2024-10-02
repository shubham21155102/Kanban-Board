// Menu.jsx: Component for rendering the menu for display settings.

import { forwardRef, useContext } from "react"; // Importing the required hooks from react.
import { DisplayContext } from "../../context/DisplayContext"; // Importing the display context to consume its values and functions.
import classes from "./Menu.module.css"; // Importing CSS module for styling the menu.

// Forwarding refs to use them in parent components.
const Menu = forwardRef((props, ref) => {
    // Using context to access display settings and handlers.
    const displayContext = useContext(DisplayContext);

    // Handler for changes in grouping settings.
    const groupingChangeHandler = (event) => {
        displayContext.handleGroupingChange(event.target.value);
    };

    // Handler for changes in ordering settings.
    const orderingChangeHandler = (event) => {
        displayContext.handleOrderingChange(event.target.value);
    };

    // The menu component layout with grouping and ordering options.
    return (
        <div className={classes.menu} ref={ref}>
            {/* Menu container with a forwarded ref */}
            <div>
                <label htmlFor="grouping">Grouping</label>
                {/* Label for the grouping select box */}
                <select
                    id="grouping"
                    value={displayContext.groupBy} // Controlled component with current grouping value.
                    onChange={groupingChangeHandler} // Handler for when the grouping option changes.
                >
                    {/* Options for different grouping methods */}
                    <option value="status">Status</option>
                    <option value="userId">User</option>
                    <option value="priority">Priority</option>
                </select>
            </div>
            <div>
                <label htmlFor="ordering">Ordering</label>
                {/* Label for the ordering select box */}
                <select
                    id="ordering"
                    value={displayContext.orderBy} // Controlled component with current ordering value.
                    onChange={orderingChangeHandler} // Handler for when the ordering option changes.
                >
                    {/* Options for different ordering methods */}
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                </select>
            </div>
        </div>
    );
});

export default Menu; // Exporting Menu component to be used in Controls component.
