import React, { useEffect } from "react";
import Card from "../../components/card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../slices/postSlice";

export default function Post() {

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.data);

  useEffect(() => {
    if (posts.length === 0) dispatch(fetchData());
  }, [dispatch, posts]);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-6">
          <h2>My Posts</h2>
        </div>
        <div className="col-6">
          <Link to="/create" className="text-decoration-none btn btn-primary float-end">
            Add Post
          </Link>
        </div>
      </div>
      <hr />
      <div className="row">
        {posts.map((post, index) => (
          <div className="col-4" key={index}>
            <Card title={post.title} description={post.body} />
          </div>
        ))}
      </div>
    </div>
  );
}
