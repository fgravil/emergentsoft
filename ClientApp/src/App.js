import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';

import './custom.css'
import { SoftwareDisplay } from './components/SoftwareDisplay';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={SoftwareDisplay} />
      </Layout>
    );
  }
}
