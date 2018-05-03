import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Loading from './components/Loading';
import Footer from './components/Footer';
import Logo from './images/logo.svg';
import Nav from './components/Nav';
import { auth } from './constants/firebase';
require('tachyons');

class DynamicImport extends Component {
  state = {
    component: null
  };
  componentWillMount() {
    this.props.load().then(component => {
      this.setState(() => ({
        component: component.default ? component.default : component
      }));
    });
  }
  render() {
    return this.props.children(this.state.component);
  }
}

const HomePage = props => (
  <DynamicImport load={() => import('./pages/Landing')}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);

const ProjectPage = props => (
  <DynamicImport load={() => import('./pages/Project')}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);

const Dashboard = props => (
  <DynamicImport load={() => import('./pages/Dashboard')}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);

export const Context = React.createContext();

export default class Routes extends Component {
  state = {};

  componentDidMount() {
    auth.onAuthStateChanged(user => this.setState({ user }));
  }

  render() {
    return (
      <Context.Provider value={{ state: this.state }}>
        <BrowserRouter>
          <Fragment>
            <header className="bg-white black-80 tc pv4 avenir">
              <img src={Logo} alt="The Local Food Project" className="w5 h5" />

              <h1 className="mt2 mb0 baskerville i fw1 f1">
                The Local Food Project
              </h1>
              <h2 className="mt2 mb0 f6 fw4 ttu tracked">
                Our amazing subtitle
              </h2>
              <Nav />
            </header>

            <main className="mw7 center">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/project/:id" component={ProjectPage} />
                <Route path="/dashboard" component={Dashboard} />
              </Switch>
            </main>
            <Footer />
          </Fragment>
        </BrowserRouter>
      </Context.Provider>
    );
  }
}

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
