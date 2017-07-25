// Include React
var React = require("react");
var Link = require("react-router").Link;


var Saved = React.createClass({

  // Here we render the component
  render: function() {

    return (

      <section>
         <div className="panel panel-default">
           <div className="panel-heading">
             <h2><strong>Saved Articles</strong></h2>
           </div>
           <div className="panel-body">         
             <div>
              saved article 1
             </div>
             <div>
             saved article 2
             </div>
           </div>
         </div>
         <div>
         {this.props.children}
         </div>
       </section>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;