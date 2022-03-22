import React from 'react';
import { avatar } from '../../assets/index';
import "./notifications.scss";

const Notifications = () => {
  return (
    <div className="notifications">
      <div className="notifications__nav">
        <h3 className="notifications__nav__title">Notifications</h3>
        <div className="notifications__nav__right">
          <img src={avatar} alt="" className="notifications__nav__avatar" />
        </div>
      </div>

      <div className="notifications__content">
        <div className="notifications__content__list">
          <div className="notifications__content--item">
            <p>Recipients</p>
            <select className="custom-select" id="inputGroupSelect02">
              <option selected>Post Code</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="notifications__content--item">
            <p>Message Type</p>
            <select className="custom-select" id="inputGroupSelect02">
              <option selected>Email</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="notifications__content--item">
            <p>Content</p>
            <textarea name="" className="custom-text-area"></textarea>
          </div>
          <button className="send-notify">Send Notification</button>
        </div>
      </div>
    </div>
  )
}

export default Notifications