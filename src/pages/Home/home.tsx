import React from "react";
import "./home.scss";
import { avatar } from "../../assets/index";
import Paginations from "../../Components/Pagination/pagination";

const Home = () => {
  return (
    <div className="home">
      <div className="home__nav">
        <h3 className="home__nav__title">Admin Users</h3>
        <div className="home__nav__right">
          <button className="home__nav__add-users">Add User</button>
          <img src={avatar} alt="" className="home__nav__avatar" />
        </div>
      </div>

      <div className="home__content">
        <table className="home__table">
          <thead>
            <tr className="home__table__title">
              <td className="home__table__title--item">USER ID</td>
              <td className="home__table__title--item">STATUS</td>
              <td className="home__table__title--item">ACTION</td>
            </tr>
          </thead>
          <tbody>
            <tr className="home__table__content">
              <td className="home__table__content--item">sacura@gmail.com</td>
              <td className="home__table__content--item">Inactive</td>
              <td className="home__table__content--item">
                <select name="" className="select-archive">
                  <option value="">Select </option>
                  <option value="dog">Archive</option>
                  <option value="cat">Unarchive</option>
                </select>
              </td>
            </tr>
            <tr className="home__table__content">
              <td className="home__table__content--item">sacura@gmail.com</td>
              <td className="home__table__content--item">Inactive</td>
              <td className="home__table__content--item">
                Select <i className="fa-solid fa-chevron-down"></i>
              </td>
            </tr>
            <tr className="home__table__content">
              <td className="home__table__content--item">sacura@gmail.com</td>
              <td className="home__table__content--item">Inactive</td>
              <td className="home__table__content--item">
                Select <i className="fa-solid fa-chevron-down"></i>
              </td>
            </tr>
            <tr className="home__table__content">
              <td className="home__table__content--item">sacura@gmail.com</td>
              <td className="home__table__content--item">Inactive</td>
              <td className="home__table__content--item">
                Select <i className="fa-solid fa-chevron-down"></i>
              </td>
            </tr>
            <tr className="home__table__content">
              <td className="home__table__content--item">
                Showing 1-10 of 30 items
              </td>
              <td></td>
              <td className="home__table__content--item">
                <Paginations />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
