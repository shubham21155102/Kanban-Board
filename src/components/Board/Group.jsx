// Group.jsx: Component for displaying a group of tickets.

import { useContext } from "react"; // Hook to access React context.
import { DisplayContext } from "../../context/DisplayContext"; // Context with display settings.
import classes from "./Group.module.css"; // CSS module for group styling.
import Icon from "../UI/Icon"; // Component for icons based on group type.
import User from "../UI/User"; // Component to display user info.
import images from "../../utils/imageUtils"; // Utility for mapping images.
import { AiOutlinePlus } from "react-icons/ai"; // Icon for adding new items.
import { BsThreeDots } from "react-icons/bs"; // Icon for more options.
import Ticket from "./Ticket"; // Ticket component for individual tickets.

const Group = ({ title, data }) => {
    const { groupBy } = useContext(DisplayContext); // Consuming context to determine grouping criteria.

    // JSX layout for a group of tickets, includes a header and list of tickets.
    return (
        <div className={classes.group}>
            {/* Main container for a group */}
            <div className={classes.group__header}>
                {/* Header section of the group */}
                <div className={classes.group__information}>
                    {/* Group information including title and count */}
                    {groupBy === "status" && ( // Display icon for status group if applicable
                        <Icon groupBy={groupBy} query={title} />
                    )}
                    {groupBy === "userId" && ( // Display user info for user group if applicable
                        <User
                            src={images[title]}
                            alt={title}
                            isUserAvailable={data.isUserAvailable}
                        />
                    )}
                    {groupBy === "priority" && ( // Display icon for priority group if applicable
                        <Icon groupBy={groupBy} query={title} />
                    )}
                    <div className={classes.group__title}>{title}</div>
                    {/* Title of the group */}
                    <div className={classes.group__count}>
                        {data.tickets.length}
                        {/* Number of tickets in the group */}
                    </div>
                </div>
                <div className={classes.group__actions}>
                    {/* Action icons for the group */}
                    <AiOutlinePlus /> {/* Icon to add a new ticket */}
                    <BsThreeDots /> {/* Icon for more options */}
                </div>
            </div>
            <div className={classes.group__tickets}>
                {/* Container for tickets */}
                {data.tickets.map(
                    (
                        ticket // Map each ticket data to a Ticket component
                    ) => (
                        <Ticket key={ticket.id} ticket={ticket} />
                    )
                )}
            </div>
        </div>
    );
};

export default Group; // Export Group component for use in Board component.
