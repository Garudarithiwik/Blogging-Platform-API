const express = require("express");
const router = express.Router();

const  AuthorController = require("../controller/authorController");
     
const authorController = new AuthorController();

router.route("/").get( authorController.getAuthors).post( authorController.createAuthor );
router.route("/:id").get(authorController.getAuthor ).put( authorController.updateAuthor).delete( authorController.deleteAuthor)


 module.exports = router;