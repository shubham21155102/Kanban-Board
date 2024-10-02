// Icon.jsx: A component that renders an icon based on provided props.

import classes from "./Icon.module.css"; // CSS module styles for the icon.
import * as utils from "../../utils/iconUtils"; // Utility functions to retrieve icons.

const Icon = (props) => {
    return (
        <div className={classes.icon}>
            {/* Container div with styling applied */}
            {utils[`${props.groupBy}Icons`][props.query]}
            {/* Dynamically selects and displays an icon based on props */}
        </div>
    );
};

export default Icon; // Exports Icon component for use in other parts of the application.
