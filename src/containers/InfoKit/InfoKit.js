import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import Aux from '../../hoc/Auxiliary';

//Authors Kimmo Tolonen, Petteri Sylvänne
class InfoKit extends Component {
      render() {
          return (
            <Aux>
            <div className="Home">
              <h2>Tervetuloa käyttämään Niko-97 sovellusta!</h2>
              <p>Cras facilisis urna ornare ex volutpat, et
              convallis erat elementum. Ut aliquam, ipsum vitae
              gravida suscipit, metus dui bibendum est, eget rhoncus nibh
              metus nec massa. Maecenas hendrerit laoreet augue
              nec molestie. Cum sociis natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus.</p>

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

export default InfoKit;
