import React from 'react';
import {Stylesheet, css} from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notification from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';


class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {displayDrawer: false};

    this.isLoggedIn = props.isLoggedIn;
    this.logOut = props.logOut;
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ];
  
    this.listNotifications = [
      {id: 1, value: "New course available", type: "default"},
      {id: 2, value: "New resume available", type: "urgent"},
      {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
    ];
  }

  
  handleKeyDown(e) {
    if (e.ctrlKey && e.key === 'h') {
      e.preventDefault();
      alert("Logging you out");
      this.logOut();
    }  
  }

  handleDisplayDrawer() {
    this.setState({displayDrawer: true})
  }

  handleHideDrawer() {
    this.setState({displayDrawer: false})
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render () {
    return (
      <React.Fragment>
        <Notification
         listNotifications={this.listNotifications}
         displayDrawer={this.state.displayDrawer}
         handleDisplayDrawer={this.handleDisplayDrawer}
         handleHideDrawer={this.handleHideDrawer}
         />
        <div className={css(styles.App)}>
          <Header />
          {this.props.isLoggedIn ?
            <BodySectionWithMarginBottom title="Course list"><CourseList listCourses={this.listCourses}/></BodySectionWithMarginBottom>
          : 
            <BodySectionWithMarginBottom title="Log in to continue"><Login /></BodySectionWithMarginBottom>
          }
          <BodySection title="News from the School">
            <p>Random Text</p>
          </BodySection>
          <Footer className={css(styles.Footer)}/>
        </div>
      </React.Fragment>
    );
  }
}

const styles = Stylesheet.create({
  App: {
    height: '100vh',
    maxWidth: '100vw',
    position: 'relative',
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  Footer: {
    fontSize: '1rem',
    padding: '1.2rem',
    textAlign: 'center',
  }
});

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

export default App;