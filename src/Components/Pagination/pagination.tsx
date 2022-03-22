import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

export default function Paginations() {
  return (
    <div>
      <Pagination>
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
      </Pagination>
    </div>
  );
}