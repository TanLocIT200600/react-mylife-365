import React, { useEffect, useState } from "react";
import "./home.scss";
import { avatar } from "../../assets/index";
import Paginations from "../../Components/Pagination/pagination";
import { GetAllUsers } from "../../Store/actions/adminActions";
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(GetAllUsers());

  }, [dispatch])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Please enter email address to add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Email address</p>
          <input type="email" placeholder="Please enter user’s email address here" />

          <p>Role</p>
          <select name="Admin" className="select-archive">
            <option value="">Admin </option>
            <option value="dog">Scan Operator</option>
          </select>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>
            Cancel
          </button>
          <button onClick={handleClose}>
            Send
          </button>
        </Modal.Footer>
      </Modal>

      <div className="home">
        <div className="home__nav">
          <h3 className="home__nav__title">Admin Users</h3>
          <div className="home__nav__right">
            <button className="home__nav__add-users" onClick={() => {
              handleShow()
            }}>Add User</button>
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
    </>
  );
};

export default Home;
