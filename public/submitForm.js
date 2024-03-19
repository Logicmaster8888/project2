function submitForm() {
    const formData = new FormData(document.getElementById("blogPostForm"));
    const title = formData.get("postTitle");
    const content = formData.get("postContent");
    const image = formData.get("postImage");
    const date = formData.get("postDate");

    const postData = {
        title: title,
        content: content,
        image: image,
        date: date
    };

    fetch('/saveBlogPost', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(response => {
        if (response.ok) {
            alert("Blog post saved successfully!");
        } else {
            throw new Error('Failed to save blog post.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred while saving the blog post.");
    });
}
