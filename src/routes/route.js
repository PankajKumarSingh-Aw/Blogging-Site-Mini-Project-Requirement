const express = require ("express");
const router = express.Router();
const jwt = require("jsonwebtoken")

const authorController = require("../controllers/authorController")
const blogController = require ("../controllers/blogController")
const middleware = require("../middlewares/authentication")


router.post("/createAuthor", authorController.createAuthor)

router.post("/login",authorController.login)

router.post("/createBlog", middleware.authenticate, blogController.createBlog)
router.get("/getBlogs",middleware.authenticate, blogController.getBlogs)
router.put("/updateBlog/:blogId",middleware.authenticate, middleware.authorise, blogController.updateBlog)
router.delete("/deleteBlog/:blogId",middleware.authenticate, middleware.authorise, blogController.deleteBlog)
router.delete("/deleteQuery", middleware.authenticate, middleware.authorise, blogController.deleteQuery)



module.exports=router