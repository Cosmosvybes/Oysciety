import React, { useState } from "react";
import "./Post.css";
import { FaEllipsisV, FaTimes } from "react-icons/fa";

const Post = ({ heading, date, time, cc, to }) => {
  const [props, setProps] = useState(false);
  return (
    <>
      <section>
        <div className="container">
          <div className="details">
            <h4>{heading}</h4>
            <p>
              <FaEllipsisV
                onClick={() => {
                  setProps(true);
                }}
              />{" "}
            </p>

            <div
              className="properties"
              style={{
                width: props ? "150px" : "0",
                padding: props ? "10px 20px" : "0",
              }}
            >
              <p> CC: {cc}</p>
              <p>Date: {date}</p>
              <p> Time: {time}</p>
              <FaTimes
                className="close"
                onClick={() => {
                  setProps(!props);
                }}
              />
            </div>
          </div>
          <div className="to-details">
            <p>To : {to}</p>
          </div>
          <div className="memo-body"></div>
        </div>
      </section>
    </>
  );
};

export default Post;
