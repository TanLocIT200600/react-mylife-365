import React, { useState } from "react";
import "./pagination.scss";

interface Pagination {
  usersPerPage: number;
  totalUsers: number;
  paginate: any;
}

const Paginations = ({ usersPerPage, totalUsers, paginate }: Pagination) => {
  const [state, setState] = useState({
    activeIndex: 1,
  });
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleOnClick = (index: number) => {
    setState({ activeIndex: index });
  };

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => {
                paginate(number);
                handleOnClick(number);
              }}
              className={state.activeIndex === number ? "active" : "unactive"}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Paginations;

function index(index: any) {
  throw new Error("Function not implemented.");
}
