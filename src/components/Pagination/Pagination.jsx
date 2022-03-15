import React, { useState } from "react";
import { Pagination } from "antd";
import "./Pagination.css";

export default function PaginationComponent(
  currentPage,
  defaultCurrentPage,
  defaultPageSize,
  total,
  onChange
) {
  return (
    <Pagination
      current={currentPage}
      defaultCurrent={defaultCurrentPage}
      defaultPageSize={defaultPageSize}
      total={total}
      onChange={onChange}
    />
  );
}
