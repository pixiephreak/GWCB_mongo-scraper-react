
  // Include React
import React, { Component } from "react";
import Note from './Note';
import Article from './Article';

// here is where the header and input box go
class Main extends Component {
  constructor() {
    super();
    this.state = {
      // put the values returned by the input box here;
    };
    // We need to bind our handleInput method to our component with this syntax in the constructor since we'll be passing it to child components
    // this.handleInput = this.handleInput.bind(this);
  }
  // handleInput(e){
  //
  // }
  render() {
    return(
      // <div>
      //   <h1>GitHubster</h1>
      //   <ListContainer/>
      // </div>
      <div className="container">
        {/* <!--Page Header--> */}
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              <h1>Github Project Profile Viewer</h1>
            </div>
            {/* <!--Search--> */}
            <div className="row">
              <div className="col-md-12">
                <div id="wrapper">
                    <h1>Note Scraper</h1>
                    <h2><i>Recent Articles from the New York Times online US edition. visit /scrape to update your list.</i></h2>
                    <div id="articles"></div>
                    <div id="notes"></div>
                  </div>
              </div>
            </div>
            {/* <!--List Container--> */}
            <div className="row">
            <Note />
            <Article />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
