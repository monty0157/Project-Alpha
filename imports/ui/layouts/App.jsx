import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { autobind } from 'core-decorators';
class App extends Component {
<<<<<<< HEAD
=======

>>>>>>> 84d16b7e4132276b56036dd6f5c61878b7142f4a
  render() {
    return(
      <div>
        <div className="header">
          <div className="tabs-nest">
            <div className="logo"><img src="images/Placeholder+Logo.png" width="80"></img>
            </div>
            <div className="student"><img className="student-picture" src="images/profile-placeholder.gif" width="53"></img>
              <div className="nest-down-center">
                <div className="student-name">Student name</div>
                <div className="student-class">Student class</div>
              </div>
            </div>
            <div className="tab">
              <h1 className="tab-text">Forside</h1>
            </div>
            <div className="tab">
              <h1 className="tab-text">Fravær</h1>
            </div>
            <div className="tab">
              <h1 className="tab-text">Skema</h1>
            </div>
            <div className="tab">
              <h1 className="tab-text">afleveringer</h1>
            </div>
            <div className="tab">
              <h1 className="tab-text">karaktere</h1>
            </div>
            <div className="tab">
              <h1 className="tab-text">Beskeder</h1>
            </div>
            <div className="login-logout"><img className="logout" src="images/User-Interface-Logout-icon.png" width="40"></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const AppContainer = createContainer(() => {
  return {}
}, App);

export default AppContainer;
