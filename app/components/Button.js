import React, { Component } from "react";

  const Button = (props) => {
    return (
        <div className="col-md-12">
          {/* <!--List Items--> */}
            <div className="row">
              <button type = "button" className="btn-default" onClick={props.handleClick}>
                scrape
                {/* pass props info here */}
              </button>
            </div>
        </div>
    )
  }

export default Button;
