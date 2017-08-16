import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

class BasicExample extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/topics">Topics</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
          </div>
        </Router>
    );
  }
}


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

const Topics = ({match}) => (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>
            Rendering with React
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>
            Components
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      <Route path={`${match.url}/:topicId`} component={Topic}/>
      <Route exact path={match.url} render={() => (
          <h3>Please select a topic.</h3>
      )}/>
    </div>
);

const Topic = ({match}) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
);


class ParamsExample extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <h2>Accounts</h2>
            <ul>
              <li><Link to="/netflix">Netflix</Link></li>
              <li><Link to="/zillow-group">Zillow Group</Link></li>
              <li><Link to="/yahoo">Yahoo</Link></li>
              <li><Link to="/modus-create">Modus Create</Link></li>
            </ul>

            <Route path="/:id" component={Child}/>
          </div>
        </Router>
    );
  }
}

const Child = ({match}) => (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
);


class AuthExample extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <AuthButton/>
            <ul>
              <li><Link to="/public">Public Page</Link></li>
              <li><Link to="/protected">Protected Page</Link></li>
            </ul>
            <Route path="/public" component={Public}/>
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/protected" component={Protected}/>
          </div>
        </Router>
    );
  }
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(({history}) => (
    fakeAuth.isAuthenticated ?
        (
            <p>Welcome!
              <button onClick={() => {
                fakeAuth.signout(() => history.push('/'))
              }}>Sign out
              </button>
            </p>
        ) : (
            <p>You are not logged in.</p>
        )
));

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated ?
            (<Component {...props}/>) :
            (<Redirect to={{pathname: '/login', sate: {from: props.location}}}/>))}/>
);

const Public = () => (<h3>Public</h3>);
const Protected = () => (<h3>Protected</h3>);

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    }
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({redirectToReferrer: true})
    })
  };

  render() {
    const {from} = this.props.location.state || {from: {pathname: '/'}};
    const {redirectToReferrer} = this.state;

    if (redirectToReferrer) {
      return (
          <Redirect to={from}/>
      )
    }

    return (
        <div>
          <p>You must log in to view the page at {from.pathname}</p>
          <button onClick={this.login}>Log in</button>
        </div>
    )
  }
}


export {BasicExample, ParamsExample, AuthExample}