const express = require("express");

const router = express.Router();
const { hashPassword } = require("./services/auth");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const albumControllers = require("./controllers/albumControllers");
const userControllers = require("./controllers/userControllers");
const authControllers = require("./controllers/authControllers");


// Route to get a list of items
router.get("/albums", albumControllers.browse);
router.get("/users", userControllers.browse);
router.get("/usersbytoken", userControllers.read);



// Route to get a specific item by ID
router.get("/albums/:id", albumControllers.read);
router.get("/users/:id", userControllers.read);



// Route to add a new item
router.post("/albums", albumControllers.add);
router.post("/users", userControllers.add);
router.post("/login", authControllers.login);
router.post("/signin", hashPassword, authControllers.signin);


// Route to modify an item
router.put("/albums/:id", albumControllers.edit);
router.put("/users/:id", userControllers.edit);


// Route to delete an item
router.delete("/albums/:id", albumControllers.destroy);
router.delete("/users/:id", userControllers.destroy);


/* ************************************************************************* */

module.exports = router;
