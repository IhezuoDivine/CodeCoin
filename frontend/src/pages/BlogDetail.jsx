import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/blog.css";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/${id}/`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="blog-list">
      <h3 className="blogdetailsh3">{blog.title}</h3>
      <p>{blog.content}</p>
      <div>
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            style={{
              maxWidth: "300px",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        )}
      </div>
      <small>{new Date(blog.created_at).toLocaleString()}</small>
    </div>
  );
}

export default BlogDetail;
