var React = require("react");

var Search = React.createClass({

  // Here we render the component
  render: function() {

    return (

       <section>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h2><strong>Results</strong></h2>
            </div>
            <div className="panel-body">
              <div className="col-lg-6">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Article 1"/>
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">Save</button>
                    </span>
                  </div>
              </div>
              <div className="col-lg-6">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Article 2"/>
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">Save</button>
                    </span>
                  </div>
              </div>
              <div className="col-lg-6">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Article 3"/>
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">Save</button>
                    </span>
                  </div>
              </div>
              <div className="col-lg-6">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Article 4"/>
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">Save</button>
                    </span>
                  </div>
              </div>
              <div className="col-lg-6">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Article 5"/>
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">Save</button>
                    </span>
                  </div>
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
module.exports = Search;