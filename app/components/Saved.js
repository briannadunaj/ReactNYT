// Include React
var React = require("react");
var Link = require("react-router").Link;


var Saved = React.createClass({

  // Here we render the component
  render: function() {

    return (

    <div className="container">
          
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Child #1</h3>
              </div>
              <div className="panel-body">
                <p>I am child 1</p>
                {/*<p>
                  <Link to="/child1/grandchild1"><button className="btn btn-warning btn-sm">Show Grandchild1</button></Link>
                  <Link to="/child1/grandchild2"><button className="btn btn-warning btn-sm">Show Grandchild2</button></Link>
                </p>*/}
                  {this.props.children}
              </div>
            </div>
          </div>
        </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;