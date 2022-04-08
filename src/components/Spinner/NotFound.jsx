import React from "react";

export default function NotFound() {
  return (
    <div
      className="not-found-box"
      style={{
        height: "2000px",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
      }}
    >
      <p style={{ fontSize: "30px", marginTop: "500px" }}>
        Страница не найдена
      </p>
    </div>
  );
}
