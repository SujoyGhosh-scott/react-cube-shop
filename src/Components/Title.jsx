import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="title" style={{ textAlign: "center" }}>
      <b>{name}</b> <strong>{title}</strong>
    </div>
  );
}
