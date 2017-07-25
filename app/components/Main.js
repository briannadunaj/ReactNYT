// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

  // Here we render the component
  render: function() {

    return (
      <div className="container">
        <div className="page-header">
          <h1><u>New York Times Article Scrubber</u></h1>
          <br/>
          <h3>Search for and annotate articles of interest!</h3>
        </div>
        <div className="jumbotron">
          <h2><strong>Search</strong></h2>
          <hr/>
          <div className="form-group">
            <h3>Topic</h3>
              <input type="text" className="form-control" placeholder="Topic"/>
          </div>
          <div className="form-group">
            <h3>Start Year</h3>
              <input type="text" className="form-control" placeholder="Start Year"/>
          </div>
          <div className="form-group">
            <h3>End Year</h3>
              <input type="text" className="form-control" placeholder="End Year"/>
          </div>
          <p>
            <Link to="/search"><button className="btn btn-default">Search</button></Link>
            <Link to="/saved"><button className="btn btn-default">Saved Articles</button></Link>
        
          </p>
           
        </div>
        <div>
           {this.props.children}
        </div>

      </div>


    
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
