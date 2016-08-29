import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { autobind } from 'core-decorators';

class App extends Component {

  render() {
    return(
    <head>
      <meta charset="utf-8"></meta>
      <title>New lectio</title>
      <meta content="width=device-width, initial-scale=1" name="viewport"></meta>
      <link href="../../../clint/main.css" rel="stylesheet" type="text/css"></link>
      <script src="../../../clint/main.js" type="text/javascript"></script>
      <link href="https://daks2k3a4ib2z.cloudfront.net/img/favicon.ico" rel="shortcut icon" type="image/x-icon"></link>
      <link href="https://daks2k3a4ib2z.cloudfront.net/img/webclip.png" rel="apple-touch-icon"></link>
    </head>
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
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js" type="text/javascript"></script>
      </div>
    )
  }
}

const AppContainer = createContainer(() => {
  return {}
}, App);

export default AppContainer;
