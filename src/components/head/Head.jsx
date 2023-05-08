import React, { useState } from "react";
import LoginLogo from "../../Pages/login/LogoutLogo";

import UserLogo from "../../Pages/userlogo/UserLogo";
import "./Head.scss";
import { Link } from "react-router-dom";

function Head() {
  

  
  return (
    <div>
      <div className="head">
        <div className="head-container" >
        {/* <Link to="/login"> */}
          <LoginLogo />
          {/* </Link> */}

          <UserLogo />
        </div>
      </div>
    </div>
  );
}

export default Head;
