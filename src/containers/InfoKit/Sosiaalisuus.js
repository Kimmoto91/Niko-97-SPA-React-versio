import React, { Component } from 'react';

import { Route } from 'react-router-dom'

import Aux from '../../hoc/Auxiliary';


class Sosiaalisuus extends Component {
      render() {
          return (
            <Aux>
            <div className="Home">
              <h2>Sosiaalisuus</h2>

                  <p>Tunnetaidot</p>
                  <p>Sosiaaliset suhteet</p>
                  <p>Minäkuva</p>

            </div>
              <div>Palvelunohjaus</div>
            </Aux>

          );
      }
}

export default Sosiaalisuus;
