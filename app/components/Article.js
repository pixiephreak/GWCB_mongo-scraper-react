import React, { Component } from "react";

const Article= (props) => {
    return (
        <div className="col-md-12">
          {/* <!--List Items--> */}
            <div className="row">
              <div className="col-md-12">
                This is an Article
                {/* pass props info here */}
              </div>
            </div>
        </div>
    )
  };

export default Article;
