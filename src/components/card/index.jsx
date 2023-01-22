import React from "react";

export default function Card(props) {
  const { title, description } = props;
  return (
    <div>
      <div className="card maincard">
        <div className="card-body cardbody">
          <h4 className="card-heading">{title}</h4>
          <p className="card-title cardtitle">{description}</p>
        </div>
      </div>
    </div>
  );
};