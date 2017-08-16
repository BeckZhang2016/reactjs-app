import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
  Prompt,
  Redirect,
  withRouter
} from 'react-router-dom'


const CustomLinkExample = () => (
    <Router>
      <div>
        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home"/>
        <OldSchoolMenuLink to="/about" label="About"/>
        <OldSchoolMenuLink to="/topic" label="Topic"/>
        <OldSchoolMenuLink to="/nomatch" label="NoMatch"/>

        <hr/>
        <Switch>
        <Route exact strict path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topic" component={Topic}/>
        <Route component={NoMatch}/>
        </Switch>
          {/*<Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/:user" component={Topic}/>
          <Route component={NoMatch}/>*/}

      </div>
    </Router>
);

const OldSchoolMenuLink = ({label, to, activeOnlyWhenExact}) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({match}) => (
        <div className={match ? 'active' : ''}>
          {match ? '> ' : ''}
          <Link to={to}>{label}</Link>
        </div>
    )}/>
);

const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
      <h2>About</h2>
    </div>
);

const Topic = () => (
    <div>
      <h2>Topic</h2>
    </div>
);

const NoMatch = () => (
    <div>
      <h2>NoMatch</h2>
    </div>
);





export {CustomLinkExample}