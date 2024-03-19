// Sample data for blog posts
const blogPostsData = [
    {
        _id: "60cfb6418b0b1f0015865f3a",
        title: "The Health Benefits of Socializing",
        content: "Socializing has numerous health benefits, including reducing stress levels, improving mood, and boosting cognitive function. Whether it's spending time with friends, joining a club, or attending social events, connecting with others is essential for overall well-being.",
        author: "Jane Doe",
        date: new Date("2024-03-19")
    },
    {
        _id: "60cfb6418b0b1f0015865f3b",
        title: "Navigating Networking Events with Confidence",
        content: "Networking events can be intimidating, but with the right approach, they can also be valuable opportunities for professional growth. From preparing an elevator pitch to initiating conversations and following up afterward, mastering the art of networking can open doors to new opportunities.",
        author: "John Smith",
        date: new Date("2024-03-18")
    },
    {
        _id: "60cfb6418b0b1f0015865f3c",
        title: "The Power of Community: Finding Support in Social Groups",
        content: "Belonging to a community or social group provides a sense of connection, support, and belongingness. Whether it's a local club, online forum, or support group, finding like-minded individuals can offer emotional support, shared experiences, and a sense of purpose.",
        author: "Emily Johnson",
        date: new Date("2024-03-17")
    },
    {
        _id: "60cfb6418b0b1f0015865f3d",
        title: "Overcoming Social Anxiety: Strategies for Building Confidence",
        content: "Social anxiety can be debilitating, but it's possible to overcome with the right strategies. From practicing relaxation techniques to gradually exposing yourself to social situations and challenging negative thoughts, taking small steps toward socializing can lead to increased confidence and reduced anxiety.",
        author: "Michael Brown",
        date: new Date("2024-03-16")
    },
    {
        _id: "60cfb6418b0b1f0015865f3e",
        title: "Hosting a Successful Dinner Party: Tips and Tricks",
        content: "Hosting a dinner party can be a fun and rewarding experience, but it requires careful planning and organization. From selecting a theme and creating a menu to setting the ambiance and managing guests, mastering the art of hosting can create memorable experiences and strengthen social connections.",
        author: "Sophia Rodriguez",
        date: new Date("2024-03-15")
    },
    {
        _id: "60cfb6418b0b1f0015865f3f",
        title: "The Importance of Celebrating Milestones with Loved Ones",
        content: "Life is full of milestones, both big and small, and celebrating them with loved ones is essential for fostering connections and creating lasting memories. Whether it's birthdays, anniversaries, graduations, or promotions, marking these occasions with friends and family strengthens bonds and adds joy to life.",
        author: "Daniel Martinez",
        date: new Date("2024-03-14")
    }
];

// Function to insert sample data into the database
const insertSampleData = async () => {
    try {
        // Connect to the database
        await mongoose.connect('mongodb://localhost:27017/blogDB', { useNewUrlParser: true, useUnifiedTopology: true });
        
        // Clear existing data
        await mongoose.connection.dropDatabase();
        
        // Insert sample data
        await BlogPost.insertMany(blogPostsData);
        
        // Log success message
        console.log("Sample data inserted successfully!");
        
        // Close the database connection
        mongoose.connection.close();
    } catch (error) {
        console.error("Error inserting sample data:", error);
    }
};

// Insert sample data into the database
insertSampleData();
