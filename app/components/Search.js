var React = require("react");

var Search = React.createClass({

  // Here we render the component
  render: function() {

    return (

       
          <div className="panel panel-default">
            <div className="panel-heading">
              <h2 className="panel-title">Results</h2>
            </div>
            <div className="panel-body">
              Panel content
            </div>
          </div>
        
      
    );
  }
});

// Export the component back for use in other files
module.exports = Search;