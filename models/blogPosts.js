// Sample data for blog posts
const mongoose = require('mongoose');
const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now, // This sets the default value to the current date/time
    },
});

// // Function to insert sample data into the database
// const insertSampleData = async () => {
//     try {
//         // Connect to the database
//         await mongoose.connect('mongodb://localhost:27017/blogDB', { useNewUrlParser: true, useUnifiedTopology: true });
        
//         // Clear existing data
//         await mongoose.connection.dropDatabase();
        
//         // Insert sample data
//         await BlogPost.insertMany(blogPostsData);
        
//         // Log success message
//         console.log("Sample data inserted successfully!");
        
//         // Close the database connection
//         mongoose.connection.close();
//     } catch (error) {
//         console.error("Error inserting sample data:", error);
//     }
// };

// Insert sample data into the database
module.exports = mongoose.model('blogPosts', blogPostSchema);

