// User.jsx: Component for displaying a user's image and availability status.

import classes from "./User.module.css"; // Importing CSS module for styling.

const Image = (props) => {
    return (
        <div className={classes.user}>
            {/* Container for the user component */}
            <img
                className={classes.user__image} // Applies styles for the user image
                src={props.src} // Source URL for the user image
                alt={props.alt} // Alt text for the user image
            />
            <div
                // This div indicates the user's availability with conditional styling
                className={`${classes.user__availability} ${
                    props.isUserAvailable
                        ? classes["user__availability--available"]
                        : classes["user__availability--unavailable"]
                }`}
            ></div>
        </div>
    );
};

export default Image; // Exports the Image component for use in other parts of the app.
