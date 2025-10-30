import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`/api/${id}/`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="blog-detail">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <small>{new Date(blog.created_at).toLocaleString()}</small>
    </div>
  );
}

export default BlogDetail;
