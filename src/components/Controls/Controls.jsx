// Controls.jsx: Component for the controls section of the app, including the menu toggle.

import { useEffect, useRef, useState } from "react"; // Hook imports for state and references.
import classes from "./Controls.module.css"; // Style module for controls.
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2"; // Icon for adjustments/settings.
import { BiSolidChevronDown } from "react-icons/bi"; // Icon for indicating dropdown.
import Menu from "./Menu"; // Menu component for display options.

const Controls = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false); // State for menu visibility.
    const menuRef = useRef(); // Reference to the menu element for click handling.
    const buttonRef = useRef(); // Reference to the button element for click handling.

    // Toggles the visibility state of the menu.
    const toggleMenuVisibility = () => {
        setIsMenuVisible((oldState) => !oldState);
    };

    // Effect hook to handle clicks outside the menu and button to close the menu.
    useEffect(() => {
        const hideMenu = (event) => {
            // Checks if the click is outside the menu and button.
            if (
                !menuRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)
            )
                setIsMenuVisible(false); // Closes the menu if the click is outside.
        };
        // Adds event listener to document if menu is visible.
        if (isMenuVisible) document.addEventListener("mousedown", hideMenu);
        // Cleanup function to remove the event listener.
        return () => {
            document.removeEventListener("mousedown", hideMenu);
        };
    }, [isMenuVisible]); // Effect dependencies.

    return (
        <div className={classes.controls}>
            {/* Container for controls */}
            <button onClick={toggleMenuVisibility} ref={buttonRef}>
                {/* Button to toggle menu */}
                <HiMiniAdjustmentsHorizontal
                    className={classes.controls__icon} // Icon for settings/adjustments
                />
                <div>Display</div> {/* Text label for the button */}
                <BiSolidChevronDown className={classes.controls__icon} />
                {/* Icon indicating dropdown functionality */}
            </button>
            {isMenuVisible && <Menu ref={menuRef} />}
            {/* Conditionally renders the Menu component */}
        </div>
    );
};

export default Controls; // Exports Controls component for use in other parts of the app.
