// Include React
var React = require("react");

// Here we include all of the sub-components
var Saved = require("./Saved");
var Seach = require("./Search");

// Requiring our helper for making API calls
var helpers = require("../utils/helpers");

// Create the Main Component
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
  },
//RUNS WHEN COMPONENT IS MOUNTED TO THE DOM (LIKE PAGE READY)
  componentDidMount: function() {
  },
  // Whenever our component updates, the code inside componentDidUpdate is run
  componentDidUpdate: function(prevState) {
  },
  updateInputValue: function() {
    this.state={inputfield: evt.target.value};
  },
  search: function() {
    var searchTerm = $("#searchTerm").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();

    var helpers = helpers(searchTerm, startYear, endYear);
  },

  // Here we render the function
  render: function() {
    return (
      <div className="container">
        <div className="row">

          <div className="jumbotron">
            <h2>NYT Article Scrubber</h2>
          </div>

        </div> {/* row */}

        <div className="row">
          <div className="col-md-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Search</h3>
              </div>
              <div className="panel-body text-center">
                  <div class="form-group">
                    <label for="searchTerm">Topic</label>
                    <input type="text" class="form-control" id="searchTerm" placeholder="Search"></input>
                  </div>
                  <div class="form-group">
                    <label for="startYear">Start Year</label>
                    <input type="date" class="form-control" id="startYear" placeholder=""></input>
                  </div>
                  <div class="form-group">
                    <label for="endYear">End Year</label>
                    <input type="date" class="form-control" id="endYear" placeholder="2017" onChange={this.updateInputValue}></input>
                  </div>
                  <button id="search" className="btn btn-danger" type="button" onClick={this.search}>Search</button>


                {/* This is where we'll show the click count for the parent */}
                {/*<h1>{this.state.clicks}</h1>*/}

                {/*
                  Here we'll deploy the child component.
                  We'll pass it the parent's click counter as a "state"
                */}
                {/*<Child clicks={this.state.clicks} /> */}

              </div> {/* panel body */}
            </div> {/* panel */}
          </div> {/* col 12 */}
        </div> {/* row */}

        <div className="row">
          <div className="col-md-12">

          <Search setTerm={this.setTerm} />

          </div> {/* col 12 */}
        </div> {/* row */}

        <div className="row">
          <div className="col-md-12">

          <Saved setTerm={this.setTerm} />

          </div> {/* col 12 */}
        </div> {/* row */}
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
