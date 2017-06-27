
  // Include React
import React, { Component } from "react";
import Note from './Note';
import Article from './Article';
import Button from './Button'
import helper from '../../utils/helper';
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

  handleClick(){
    
  }
  // handleInput(e){
  //
  // }
  render() {
    return(
      <div className="container">
        {/* <!--Page Header--> */}
        <div className="row">
          <div className="col-md-12">
            <div className="page-header jumbotron">
              <h1>Article Scraper</h1>
              <Button />
            </div>
            {/* <!--Search--> */}
            <div className="row">
              <div className="col-md-12">
                <div id="wrapper">
                    <h2><i>Recent Articles from the New York Times online US edition. visit /scrape to update your list.</i></h2>
                    <div id="articles"> <Article /></div>
                    <div id="notes"><Note /></div>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default Main;
