// iconUtils.js: Utility file for mapping status and priority to corresponding icons with styling.

import { TbCircleDotted } from "react-icons/tb"; // Dotted circle icon from react-icons
import { BiCircle, BiAdjust } from "react-icons/bi"; // Circle and adjustable icons from react-icons
import { MdCheckCircle, MdCancel } from "react-icons/md"; // Check circle and cancel icons from react-icons
import { AiOutlineDash } from "react-icons/ai"; // Outline dash icon from react-icons
import { TbAlertSquareFilled } from "react-icons/tb"; // Alert square filled icon from react-icons
import {
    PiCellSignalHighFill,
    PiCellSignalMediumFill,
    PiCellSignalLowFill,
} from "react-icons/pi"; // Cell signal icons for different priorities from react-icons

// statusIcons maps various task statuses to specific icons with defined colors.
export const statusIcons = {
    Backlog: <TbCircleDotted style={{ color: "dimgray" }} />, // Represents a task in the backlog
    Todo: <BiCircle style={{ color: "gainsboro" }} />, // Represents a task that is to do
    "In progress": <BiAdjust style={{ color: "#F1C849" }} />, // Represents a task that is in progress
    Done: <MdCheckCircle style={{ color: "#5C6AD0" }} />, // Represents a task that is done
    Canceled: <MdCancel style={{ color: "#A8A8A8" }} />, // Represents a task that is canceled
};

// priorityIcons maps various priority levels to specific icons with defined colors.
export const priorityIcons = {
    "No priority": <AiOutlineDash style={{ color: "dimgray" }} />, // Represents a task with no priority
    Urgent: <TbAlertSquareFilled style={{ color: "#FA773E" }} />, // Represents a task with urgent priority
    High: <PiCellSignalHighFill style={{ color: "gray" }} />, // Represents a task with high priority
    Medium: <PiCellSignalMediumFill style={{ color: "gray" }} />, // Represents a task with medium priority
    Low: <PiCellSignalLowFill style={{ color: "gray" }} />, // Represents a task with low priority
};
