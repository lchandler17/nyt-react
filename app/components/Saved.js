// Include React
var React = require("react");

// Create the Main Component
var Saved = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {

  },

//RUNS WHEN COMPONENT IS MOUNTED TO THE DOM (LIKE PAGE READY)
  //  On load display the number of clicks
  componentDidMount: function() {
    console.log("COMPONENT MOUNTED");

  },
  // Whenever our component updates, the code inside componentDidUpdate is run
  componentDidUpdate: function(prevState) {

    }
  },

  // Here we render the function
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Saved Articles</h3>
        </div>
        <div className="panel-body text-center">

            {/* code to render articles from database */}
          <button id="remove" className="btn btn-danger" type="button" onClick={this.removeArticle}>Remove</button>

        </div> {/* panel body */}
      </div> {/* panel */}
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;
