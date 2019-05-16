import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import InfoKit from './containers/InfoKit/InfoKit';
import InfoKit2 from './containers/InfoKit/Infokit2';

class App extends Component {
  render() {
      return (
        <BrowserRouter>
        <div>
          <Layout>
            <InfoKit2 />
          </Layout>
        </div>
        </BrowserRouter>
      );
    }
  }


export default App;
