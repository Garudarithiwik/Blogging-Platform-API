const express = require("express");
const router = express.Router();
const  CategoryController = require("../controller/categoryController");
     
const categoryController = new CategoryController();

router.route("/").get( categoryController.getCategories).post( categoryController.createCategory );

router.route("/:id").get(categoryController.getCategory).put( categoryController.updateCategory).delete( categoryController.deleteCategory)


 module.exports = router;