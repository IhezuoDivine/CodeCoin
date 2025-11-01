import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Images from "../Images";
import Header from "../components/Header.jsx";
import "../styles/blog.css";

function BlogLists() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <section>
      <Header />
      <h2 className="blogh2">Latest Blog Posts</h2>

      <div className="blog-list">
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link to={`/blog/${blog.id}`}>
                <h3>{blog.title}</h3>
              </Link>

              <p>{blog.content.slice(0, 120)}...</p>

              {/* Image display */}
              {blog.image && (
                <div>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    style={{
                      maxWidth: "300px",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              )}

              {/* Default/fallback image */}
              <img className="homeimg" src={Images["no-bg-pfp"]} alt="img" />

              <small>
                {new Date(blog.created_at).toLocaleDateString()}
              </small>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BlogLists;
