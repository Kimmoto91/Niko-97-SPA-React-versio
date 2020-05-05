import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import EtuSivu from './containers/InfoKit/EtuSivu';
import Kysely from './containers/InfoKit/Kysely';
import Sosiaalisuus from './containers/InfoKit/Sosiaalisuus';
import Seksuaalisuus from './containers/InfoKit/Seksuaalisuus';

//Authors Kimmo Tolonen, Petteri Sylvänne, Niko-97 project, 2020
class App extends Component {
  render() {
      return (
        <BrowserRouter>
        <div>
          <Layout>
            <Route exact path="/" component={EtuSivu} />
            <Route path="/kysely" component={Kysely} />
            <Route path="/sosiaalisuus" component={Sosiaalisuus} />
            <Route path="/seksuaalisuus" component={Seksuaalisuus} />
          </Layout>
        </div>
        </BrowserRouter>
      );
    }
  }

export default App;
