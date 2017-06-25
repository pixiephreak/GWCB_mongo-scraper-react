import React, { Component } from "react";

  const Note = (props) => {
    return (
        <div className="col-md-12">
          {/* <!--List Items--> */}
            <div className="row">
              <div className="col-md-12">
                This is a Note
                {/* pass props info here */}
              </div>
            </div>
        </div>
    )
  }

export default Note;
