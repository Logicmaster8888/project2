
//@desc Get all blogs
//@route GET /api/blogs
//@access public // Later on Private when introduce the Auth
// Not Logical
const getBlogs = (req, res) => {
    res.status(200).json({ message: `Get All Blogs`});
};

//@desc Create New Blog
//@route POST /api/blogs
//@access public
// Not Logical
const createBlog = (req, res) => {
    console
    res.status(201).json({ message: `Create Blog`});
};


//@desc Get New Blog
//@route GET /api/blogs/:id
//@access public
// Not Logical
const getBlog = (req, res) => {
    res.status(200).json({ message: `Create Blog for ${req.params.id}`});
};

//@desc Update New Blog
//@route UPDATE /api/blogs/:id
//@access public
// Not Logical
const updateBlog = (req, res) => {
    res.status(201).json({ message: `Update Blog for ${req.params.id}`});
};

//@desc Delete New Blog
//@route DELETE /api/blogs/:id
//@access public
//Not Logical
const deleteBlog = (req, res) => {
    res.status(200).json({ message: `Delete Blog for ${req.params.id}`});
};

module.exports = {
    getBlogs,
    createBlog,
    getBlog,
    updateBlog,
    deleteBlog,
};


/***************************************************************************************
*    Citation: Line 1-49
*    Title: Nodejs & Express Crash Course
*    Author: Dipesh Malvia, 
*    Date Accessed: 3/18 -3/19/24
*    Date: Jan 31, 2023
*    Code version: <code version>
*    Availability: https://github.com/dmalvia/Express_MongoDB_Rest_API_Tutorial
*
***************************************************************************************/
