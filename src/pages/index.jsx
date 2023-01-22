import React from "react";
import { Routes, Route } from "react-router-dom";
import Post from "./post";
import CreatePost from "./post/create";

export default function ReduxDemoCounter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="create" element={<CreatePost />} />
      </Routes>
    </div>
  );
}
