/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./home.scss";
import { avatar } from "../../assets/index";
import Paginations from "../../Components/Pagination/pagination";
import { GetAllUsers, GetArchiveUsers } from "../../Store/actions/adminActions";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { RootState } from "../../Store/configStore";
import { useParams } from "react-router-dom";



const Home = () => {
  const dispatch = useDispatch();

  const users = useSelector((state: RootState) => state.adminReducers.listUser.users);
  const [show, setShow] = useState(false);
  const [showArchive, setShowArchive] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseArchive = () => setShowArchive(false);
  const handleShowArchive = (id: string) => setShowArchive(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(GetAllUsers());
  }, [dispatch])
  console.log("users", users);

  const handleArchiveUser = (id: string) => {
    console.log(`hello ${id}`);
    dispatch(GetArchiveUsers(id))
  }


  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(10);

  // Get current posts
  const indexOfLastPost = currentPage * userPerPage;
  const indexOfFirstPost = indexOfLastPost - userPerPage;
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <>
      <Modal show={show} onHide={handleClose} className="add-user-modal">
        <Modal.Header>
          <Modal.Title>Please enter email address to add new user</Modal.Title>
        </Modal.Header>
        <div className="modal-body-add_user">
          <Modal.Body>
            <p>Email address</p>
            <input
              type="email"
              placeholder="Please enter user’s email address here"
            />

            <p>Role</p>
            <select name="Admin" className="select-archive">
              <option value="">Admin </option>
              <option value="dog">Scan Operator</option>
            </select>
          </Modal.Body>
          <Modal.Footer>
            <div className="btn-footer">
              <button onClick={handleClose} className="btn-cancel">
                Cancel
              </button>
              <button onClick={handleClose} className="btn-send">
                Send
              </button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>


      <div className="home">
        <div className="home__nav">
          <h3 className="home__nav__title">Admin Users</h3>
          <div className="home__nav__right">
            <button
              className="home__nav__add-users"
              onClick={() => {
                handleShow();
              }}
            >
              Add User
            </button>
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
              {currentUsers && currentUsers.map((item, index) => {
                return <tr className="home__table__content" key={index}>
                  <td className="home__table__content--item">{item.email}</td>
                  <td className={`home__table__content--item` + `${item.status === "Active" ? "-active" : item.status === "Archive" ? "-archive" : "-inactive"}`}><i className="fa-solid fa-circle"></i>{item.status}</td>
                  <td className="home__table__content--item">
                    <div className="dropdown">
                      <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Select
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" onClick={() => {
                          handleShowArchive(item.id)
                        }}>Archive</a></li>
                        <li><a className="dropdown-item">Unarchive</a></li>
                      </ul>
                    </div>

                  </td>
                  <Modal show={showArchive} onHide={handleCloseArchive} className="archive-modal">
                    <Modal.Header >
                      <Modal.Title>Are you sure to archive this account?</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                      <button onClick={handleCloseArchive} className="btn-cancel">
                        Cancel
                      </button>
                      <button onClick={() => {
                        handleCloseArchive()
                        handleArchiveUser(item.id)
                      }
                      } className="btn-archive">
                        Archive
                      </button>
                    </Modal.Footer>
                  </Modal>
                </tr>
              })
              }


              <tr className="home__table__content">
                <td className="home__table__content--item">
                  Showing 1-10 of 30 items
                </td>
                <td className="home__table__content--item" colSpan={2}>
                  <Paginations
                    usersPerPage={userPerPage}
                    totalUsers={users.length}
                    paginate={paginate}
                  />
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
