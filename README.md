# - SocialSync ~ Myspace Clone
SocialSync
---
SocialSync is a vibrant social networking platform designed to evoke a sense of community and connection among users. With customizable profiles and dynamic feeds, SocialSync provides a space for users to express themselves authentically and engage with others in meaningful ways. Users can personalize their profiles with photos, bios, and interests, creating a space that reflects their personality and passions.

At SocialSync, users can discover new content, share updates, and connect with friends and followers in a lively and interactive environment. The platform's dynamic feed fosters engagement and conversation, enabling users to stay connected and informed about the latest trends and topics. SocialSync aims to cultivate a welcoming and inclusive community where users can forge genuine connections and share experiences in a digital world.

## Wireframes 
Wiresframes

1. Homepage - Account Page
2. Login / LogOut
3. Edit Info 
4. Blog Post Layout / See All
5. Edit Profile
6. Redirect Links
7. Error Page


https://drive.google.com/drive/folders/1yjUj3pJ56wUkyLnTdyLurkj7h1aoidjj?usp=sharing

## ERD 
ERD - Created by LucidChart

https://lucid.app/lucidchart/c9c3709a-ab07-4607-a18f-d0947ce8ef68/edit?viewport_loc=-1251%2C-265%2C1501%2C1373%2C0_0&invitationId=inv_afa5ce40-faa0-4866-be21-d7874a91bcb8

Work Flow - Created by Figma

https://www.figma.com/file/Rhi67k6b0mB506yWh3BcI7/Social-Sync---Application-for-Software-Development---Yim%2C-Tyler---Project-2?type=whiteboard&node-id=0%3A1&t=0HcptCQwArKUTSFG-1


## Technologies Used
<ul>

1. Node.js
2. Express.js
3. MongoDB
4. HTML
5. CSS
6. Passport.js (for authentication)
7. Postman (for API testing)

</ul>


## Featured
Users:
___
Sarah 
1. College Student:

Sarah uses SocialSync to connect with her classmates and join study groups for her courses.
She shares study materials, notes, and resources with her study group members to collaborate on assignments and prepare for exams.
Sarah also uses SocialSync to stay updated on campus events, club meetings, and academic announcements.

2. John - Local Coffee Shop Owner:

John uses SocialSync to engage with his customers and promote special offers and events at his coffee shop.
He shares updates about new menu items, promotions, and discounts to attract customers and encourage repeat visits.
John also uses SocialSync to gather feedback from customers, address concerns, and improve the overall customer experience at his coffee shop.

3. Emily - Freelance Graphic Designer:

Emily uses SocialSync to showcase her portfolio and attract potential clients for her freelance graphic design services.
She shares samples of her work, client testimonials, and project case studies to demonstrate her skills and expertise to prospective clients.
Emily also uses SocialSync to network with other creatives in the industry, collaborate on projects, and stay updated on the latest design trends and opportunities.
These practical examples illustrate how different users can utilize the SocialSync platform to achieve their specific goals and meet their unique needs in various contexts.

4. Livestreamer - Twitch Streamer:

As a Twitch streamer, Mark uses SocialSync to promote his livestreams and engage with his audience before, during, and after his streams.
He shares announcements about upcoming streams, previews of content he'll be streaming, and highlights from previous streams to generate excitement and attract viewers.
Mark also uses SocialSync to interact with his audience in real-time, respond to comments and questions, and build a loyal community of followers who enjoy his content.

5. Music Creator - Independent Musician:

Sarah, an independent musician, uses SocialSync to share her music with fans, promote upcoming gigs, and connect with other musicians and music enthusiasts.
She uploads her latest tracks, music videos, and behind-the-scenes content to SocialSync to showcase her talent and creativity to a wider audience.
Sarah also uses SocialSync to collaborate with other musicians, organize jam sessions, and find opportunities for gigs and performances in her local music scene.

## Approach Taken
Project Title: MySpace Clone - SocialSync App Development
---
Project Duration: 2 weeks
Project Overview:

Develop a simplified version of MySpace, a social networking platform, using modern web development technologies such as Node.js, Express, MongoDB, HTML, and CSS. The application will support CRUD operations for user profiles and posts, and Postman will be used for API testing and validation.

---
Project Goals:
1. Develop a functional social networking platform similar to MySpace.
2. Implement user authentication and authorization.
3. Enable users to create, read, update, and delete their profiles and posts.
4. Utilize MongoDB for data storage and retrieval.
5. Ensure responsive design using HTML and CSS.
6. Test and validate APIs using Postman.

---
Timeline:
--
Week 1:
---
Day 1-2:

Set up the development environment with Node.js and Express.
Design database schema for user profiles and posts.
Initialize the MongoDB database and establish connection.
Implement user authentication and authorization using Passport.js.

Day 3-4:

Develop CRUD functionalities for user profiles (Create, Read, Update, Delete).
Design and implement HTML/CSS for user profile pages.
Test user profile functionalities.

Day 5-6:

Implement CRUD functionalities for posts (Create, Read, Update, Delete).
Design and implement HTML/CSS for post display and creation.
Test post functionalities.

Week 2:
---
Day 7-9:

Integrate user profiles and posts.
Implement user authentication flow throughout the application.
Ensure seamless navigation between different pages.
Conduct integration testing to ensure functionalities work together.

Day 10-11:

Refine and optimize codebase for performance.
Conduct thorough testing to identify and fix bugs.
Enhance error handling and validation mechanisms.

Day 12-13:

Document the project including setup instructions, API documentation, and user guide.
Prepare for deployment.
Finalize testing and debugging.

Day 14:

Deployment to a hosting platform (e.g., Heroku).
Conduct final round of testing to ensure deployment success.
Project handover and presentation to stakeholders.

--------------------------
Deliverables:
---
1. Fully functional social networking platform.
2. Documentation including setup instructions, API documentation, and user guide.
3. Deployment to a hosting platform.
4. Presentation to stakeholders summarizing the project scope, functionalities, and outcomes.


## Installllation & StartUp Instructions
Clone the Repository
```bash
it clone [<repository-url>](https://github.com/Logicmaster8888/project2.git)
```

## Set Up Environment Variables:

Create a .env file based on the .env.example template.
Update the environment variables with your configuration.

Dependencies:

NPM install

1. ejs 
2. express 
3. mongosh 
4. dotenv 
5. mongobd

## Usage
```npm start

Open in Browser:

Navigate to http://localhost:3000 in your web browser to access the application.
```


## API Endpoints - CRUD & INDUCES

<ul>

1. POST /api/auth/register: Register a new user.
2. POST /api/auth/login: Log in an existing user.
3. GET /api/auth/logout: Log out the current user.
4. GET /api/profiles: Get all user profiles.
5. GET /api/profiles/:id: Get a specific user profile.
6. PUT /api/profiles/:id: Update a user profile.
7. DELETE /api/profiles/:id: Delete a user profile.
8. GET /api/posts: Get all posts.
9. GET /api/posts/:id: Get a specific post.
10. POST /api/posts: Create a new post.
11. PUT /api/posts/:id: Update a post.
12. DELETE /api/posts/:id: Delete a post.
13. POST /api/posts/:id/like: Like a post.
14. POST /api/posts/:id/comment: Comment on a post.

</ul>

## Unsolved Problems
Potential Problems Arising

Scalability: As the user base grows, ensuring that the application can handle increased traffic and data storage requirements efficiently may pose a challenge. Implementing scalable architecture and optimizing database queries can help address this issue.

Security: Protecting user data and preventing unauthorized access or data breaches is crucial. Implementing robust authentication mechanisms, encryption techniques, and security best practices can help mitigate security risks.

User Engagement: Encouraging user engagement and retention can be challenging in a competitive social media landscape. Implementing features such as notifications, personalized recommendations, and user incentives can help enhance user engagement and retention.

Performance Optimization: Optimizing the performance of the application to ensure fast load times and smooth user experience across different devices and network conditions is essential. Performance profiling, code optimization, and caching strategies can help improve application performance.

Platform Compatibility: Ensuring compatibility with various web browsers, operating systems, and devices can be complex. Conducting thorough testing on different platforms and addressing compatibility issues promptly can help provide a seamless experience for all users.

Regulatory Compliance: Adhering to data protection regulations such as GDPR (General Data Protection Regulation) and CCPA (California Consumer Privacy Act) is crucial to protect user privacy and avoid legal issues. Implementing compliance measures and staying updated on relevant regulations is essential.

Feedback and Iteration: Continuously gathering feedback from users and iterating on the application based on user insights and market trends is essential for long-term success. Implementing feedback mechanisms and maintainin

## Trello
Trello - https://trello.com/b/bj1NMsPJ/project-2-sei-2024-yim-tyler
