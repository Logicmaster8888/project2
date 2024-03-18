
//@desc Get all blogs
//@route GET /api/blogs
//@access public // Later on Private when introduce the Auth

const getBlogs = (req, res) => {
    res.statis(200).json({ message: `Get All Blogs`});
};

//@desc Create New Blog
//@route POST /api/blogs
//@access public

const createBlog = (req, res) => {
    res.statis(201).json({ message: `Create Blog`});
};


//@desc Get New Blog
//@route GET /api/blogs/:id
//@access public

const getBlog = (req, res) => {
    res.statis(200).json({ message: `Create Blog for ${req.params.id}`});
};

//@desc Update New Blog
//@route UPDATE /api/blogs/:id
//@access public
const updateBlog = (req, res) => {
    res.status(201).json({ message: `Update Blog for ${req.params.id}`});
};

//@desc Delete New Blog
//@route DELETE /api/blogs/:id
//@access public
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