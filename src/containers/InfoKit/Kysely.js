import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import Aux from '../../hoc/Auxiliary';


class Kysely extends Component {
      render() {
          return (
            <Aux>
            <div className="Home">
              <h2>Tässä on Kyselyn paikka</h2>
              <p>GDPR mukaan ilmoitetaan kyselystä.</p>
            </div>
              <div>ALOITA KYSELY</div>
            </Aux>

          );
      }
}

export default Kysely;
