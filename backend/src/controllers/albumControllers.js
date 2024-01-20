// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const albums = await tables.album.readAll();

    // Respond with the items in JSON format
    res.json(albums);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const albums = await tables.album.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (albums == null) {
      res.sendStatus(404);
    } else {
      res.json(albums);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  const { nom_groupe, nom_album, titre_chanson, genre, image } = req.body;
  const updatedAlbums = {
    id: req.params.id,
    nom_groupe,
    nom_album,
    titre_chanson,
    genre,
    image,
  };
  try {
    const existingAlbums = await tables.album.read(req.params.id);
    if (existingAlbums == null) {
      res.status(404).send("Albums not found");
    } else {
      const result = await tables.album.update(updatedAlbums);
      res.status(200).json({ result });
    }
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const albums = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.album.create(albums);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const destroy = async (req, res, next) => {
  // Extract the item data from the request body
  try {
    // Insert the item into the database
    const result = await tables.album.delete(req.params.id);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).send(result);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
