// imageUtils.js: Utility file for mapping user names to their respective images.

import user1 from "../assets/user1.jpeg"; // Importing user image for Anoop Sharma
import user2 from "../assets/user2.jpeg"; // Importing user image for Yogesh
import user3 from "../assets/user3.jpeg"; // Importing user image for Shankar Kumar
import user4 from "../assets/user4.jpeg"; // Importing user image for Ramesh
import user5 from "../assets/user5.jpeg"; // Importing user image for Suresh

// userImages maps specific user names to their respective imported images.
const userImages = {
    "Anoop sharma": user1, // Anoop Sharma's profile image
    Yogesh: user2, // Yogesh's profile image
    "Shankar Kumar": user3, // Shankar Kumar's profile image
    Ramesh: user4, // Ramesh's profile image
    Suresh: user5, // Suresh's profile image
};

export default userImages; // Exporting the mapping to be used elsewhere in the app
