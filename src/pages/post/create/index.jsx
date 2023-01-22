import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { create } from "../../../slices/postSlice";

export default function CreatePost() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputField, setInputField] = useState({
    title: '',
    body: '',
  });

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value })
  }

  const submitButton = (e) => {
    e.preventDefault();
    dispatch(create(inputField));
    navigate("/");
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-6">
          <h2>Create Posts</h2>
        </div>
        <div className="col-6">
          <Link to="/" className="text-decoration-none btn btn-primary float-end">
            My Posts
          </Link>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <form onSubmit={submitButton}>
            <div className="mb-3">
              <label for="title" class="form-label">Title</label>
              <input type="text" onChange={inputsHandler} className="form-control" id="title" name="title" placeholder="Enter title" />
            </div>
            <div className="mb-3">
              <label for="body" class="form-label">Body</label>
              <textarea id="body" onChange={inputsHandler} placeholder="Enter body" name="body" className="form-control"></textarea>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
