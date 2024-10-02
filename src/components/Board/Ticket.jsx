// Ticket.jsx: Component for rendering a single ticket item with its details.

import { useContext } from "react"; // Hook to use context within the component.
import { DisplayContext } from "../../context/DisplayContext"; // Context to get display settings like grouping.
import classes from "./Ticket.module.css"; // Styling for the ticket component.
import User from "../UI/User"; // Component to show user info such as avatar and availability.
import Icon from "../UI/Icon"; // Component to show appropriate icons based on ticket data.
import images from "../../utils/imageUtils"; // Utility to get user images based on usernames.
import { BsFillCircleFill } from "react-icons/bs"; // Icon used for showing bullet points.

// The Ticket component receives a 'ticket' object as a prop.
const Ticket = ({ ticket }) => {
    const { groupBy } = useContext(DisplayContext); // Retrieve the current groupBy setting from context.

    // The ticket structure with conditional rendering based on the groupBy context.
    return (
        <div className={classes.ticket}>
            {/* Main ticket container */}
            <div className={classes["ticket__id-and-user"]}>
                {/* Container for ticket ID and user info */}
                <div className={classes.ticket__id}>{ticket.id}</div>
                {/* Displays the ticket's ID */}
                {groupBy !== "userId" && ( // Conditionally renders the User component if not grouping by userId
                    <User
                        src={images[ticket.userName]} // Image source path for the user
                        alt={ticket.userName} // Alternative text for the image
                        isUserAvailable={ticket.isUserAvailable} // User availability status
                    />
                )}
            </div>
            <div className={classes["ticket__status-and-title"]}>
                {/* Container for ticket status and title */}
                {groupBy !== "status" && ( // Conditionally renders the Icon component if not grouping by status
                    <Icon groupBy="status" query={ticket.status} /> // Icon related to ticket status
                )}
                <div className={classes.ticket__title}>{ticket.title}</div>
                {/* Displays the ticket's title */}
            </div>
            <div className={classes["ticket__priority-and-tag"]}>
                {/* Container for ticket priority and tags */}
                {groupBy !== "priority" && ( // Conditionally renders the Icon component if not grouping by priority
                    <Icon groupBy="priority" query={ticket.priorityLabel} /> // Icon related to ticket priority
                )}
                {ticket.tag.map(
                    (
                        tag // Maps through each tag associated with the ticket
                    ) => (
                        <div key={tag} className={classes.ticket__tag}>
                            {/* Tag container */}
                            <BsFillCircleFill
                                className={classes.ticket__bullet}
                            />
                            {/* Bullet point icon */}
                            {tag} {/* Displays the tag text */}
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Ticket; // Exports the Ticket component for use in other parts of the app.
