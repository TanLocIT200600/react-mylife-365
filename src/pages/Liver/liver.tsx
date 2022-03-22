import React from "react";
import { avatar, search } from "../../assets/index";
import "./liver.scss";

const Liver = () => {
  return (
    <div className="liver">
      <div className="liver__nav">
        <h3 className="liver__nav__title">Liver Scan Results</h3>
        <div className="liver__nav__right">
          <img src={avatar} alt="" className="liver__nav__avatar" />
        </div>
      </div>

      <div className="liver__content">
        <div className="liver__content__list">
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
              <img src={search} alt="" className="" />
            </span>
            <input
              type="text"
              className=""
              placeholder="Search user’s email address"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <button className="search">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Liver;
