import React, { useState } from "react";
import { Pagination } from "antd";
import "./Pagination.css";

export default function PaginationComponent(
  currentPage,
  // pageSize,
  total,
  onChange
) {
  return (
    <Pagination
      current={currentPage}
      // pageSize={pageSize}
      total={total}
      onChange={onChange}
    />
  );
}
