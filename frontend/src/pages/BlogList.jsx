import React, { useEffect, useState } from "react";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="blog-list">
      <h2>Latest Blog Posts</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content.slice(0, 120)}...</p>
            <small>{new Date(blog.created_at).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
