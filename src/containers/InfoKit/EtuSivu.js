import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import Aux from '../../hoc/Auxiliary';


class EtuSivu extends Component {
      render() {
          return (
            <Aux>
                  <meta name="description" content="Tietopaketteja tunnetaidoista sekä seksuaalisuudesta"></meta>
                  <meta name="keywords" content="Niko-97,Tunnetaidot,Tunteet,Seksuaalisuus"></meta>
                  <meta name="author" content="John Doe"></meta>
            <div className="Home">
              <h2>Tervetuloa käyttämään Niko-97 sovellusta!</h2>
              <p>Tästä sovelluksesta löytyy tietoa sosiaali- ja seksuaalisuhteista.</p>

              <h4>Sivustolta löytyy kysely, jonka voit käydä tekemässä.</h4>
              <h3>Lisää tietoa saat ESIMERKIKSI täältä: <a href="https://www.vaestoliitto.fi">Väestöliitto</a></h3>
              <p></p>
              <p>•	Väestöliitto on sosiaali- ja terveysalalla toimiva asiantuntijajärjestö, joka edistää perheiden, nuorten ja koko väestön hyvinvointia,
                    turvallisuutta, terveyttä ja tasapainoista elämää.
                    Sivustolta löydät esimerkiksi otsikot Nuoret ja Seksuaalisuus, joista löydät paljon hyödyllistä tietoa.
                    Lisäksi sivustolla järjestetään esimerkiksi Seksuaalineuvontachat ja löydät sieltä myös Seksitautivisan.
              </p>
            </div>
              <div>Palvelunohjaus</div>
            </Aux>

          );
      }
}

export default EtuSivu;
