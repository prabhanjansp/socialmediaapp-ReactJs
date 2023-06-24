import React from "react";
import "../rightBar/rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestion For You</span>
          <div className="userInfo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJJSFcWEKr6nqzqWPn1KNSIqWTWJsiICKQLJFYQXIOjunf-nDlblfXPC3NNWGAz8HpsA&usqp=CAU"
              alt="User"
            />
            <span>Prabhanjan</span>
          </div>
          <div className="buttons">
            <button>Follow</button>
            <button>Dismiss</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
