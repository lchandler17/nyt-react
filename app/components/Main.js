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
    // return {
    //   clicks: 0,
    //   clickID: "Main"
    // };
  },

//RUNS WHEN COMPONENT IS MOUNTED TO THE DOM (LIKE PAGE READY)
  //  On load display the number of clicks
  componentDidMount: function() {
    console.log("COMPONENT MOUNTED");

    // The moment the page renders on page load, we will retrieve the previous click count.
    // We will then utilize that click count to change the value of the click state.
    helpers.getClicks()
      .then(function(response) {
        // Using a ternary operator we can set newClicks to the number of clicks in our response object
        // If we don't have any clicks in our database, set newClicks to 0
        var newClicks = response.data.length ? response.data[0].clicks : 0;
        this.setState({
          clicks: newClicks
        });
        console.log("RESULTS", response);
        console.log("Saved clicks", newClicks);
      }.bind(this));
  },
  // Whenever our component updates, the code inside componentDidUpdate is run
  componentDidUpdate: function(prevState) {
    console.log("COMPONENT UPDATED");

    // We will check if the click count has changed...
    if (prevState.clicks !== this.state.clicks) {

      // If it does, then update the clickcount in MongoDB
      helpers.saveClicks({ clickID: this.state.clickID, clicks: this.state.clicks })
        .then(function() {
          console.log("Posted to MongoDB");
        });
    }
  },
  // Whenever the button is clicked we'll use setState to add to the clickCounter
  // Note the syntax for setting the state
  handleClick: function() {
    this.setState({ clicks: this.state.clicks + 1 });
  },

  // Whenever the button is clicked we'll use setState to reset the clickCounter
  // This will reset the clicks -- and it will be passed ALL children
  resetClick: function() {
    this.setState({ clicks: 0 });
  },

  // Here we render the function
  render: function() {
    return (
      <div className="container">
        <div className="row">

          <div className="jumbotron">
            <h2>NYT Article Scrubber</h2>
          </div>

          {/*//     <button
          //       className="btn btn-danger btn-lg"
          //       type="button"
          //       onClick={this.resetClick}
          //     >
          //       Reset
          //     </button>*/}
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
                    <input type="text" class="form-control" id="searchTerm" placeholder="Search">
                  </div>
                  <div class="form-group">
                    <label for="startYear">Start Year</label>
                    <input type="date" class="form-control" id="startYear" placeholder="">
                  </div>
                  <div class="form-group">
                    <label for="endYear">End Year</label>
                    <input type="date" class="form-control" id="endYear" placeholder="2017">
                  </div>


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

          

          </div> {/* col 12 */}
        </div> {/* row */}
      </div> {/* container */}
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
