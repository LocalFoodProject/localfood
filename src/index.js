import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Spin } from 'antd';
import Footer from './components/Footer';

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
  <DynamicImport load={() => import('./components/App')}>
    {Component =>
      Component === null ? <Spin size="large" /> : <Component {...props} />
    }
  </DynamicImport>
);

const ProjectPage = props => (
  <DynamicImport load={() => import('./components/Project')}>
    {Component =>
      Component === null ? <Spin size="large" /> : <Component {...props} />
    }
  </DynamicImport>
);

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <main>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/project/:id" component={ProjectPage} />
            </Switch>
          </main>
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
