import React, { Component } from 'react';

import { Route } from 'react-router-dom'

import Aux from '../../hoc/Auxiliary';

//Authors Kimmo Tolonen, Petteri Sylvänne
class InfoKit2 extends Component {
      render() {
          return (
            <Aux>
            <div className="Home">
              <h2>Seksuaalisuus</h2>

                  <p>•	Iso osa ihmisyyttä koko elämän ajan, synnynnäinen kyky reagoida fyysisesti ja psyykkisesti aistimuksiin ja virikkeisiin.</p>
                  <p>•	Seksuaalisuus on sidoksissa eri kulttuureihin ja elämän muutoksiin. Se muuttuu läpi elämän eikä ole koskaan valmis.</p>
                  <p>•	Ei ole pelkkää seksiä, vaan siihen liittyy seksuaalinen suuntautuminen, seksuaalinen kehitys, biologinen sukupuoli,
                        sosiaalinen sukupuoli-identiteetti, eroottinen mielenkiinto, nautinto ja intiimiys.</p>
                  <p>•	Koetaan ja ilmaistaan eri keinoin: fantasiat, halut, ajatukset, uskomukset. Seksuaalisuuden voi määrittää vain yksilö itse.</p>
                  <p>•	Seksi on sitä, mitä teemme. Seksuaalisuus on sitä, mitä olemme. Ilmenee kaikessa, mitä ihminen tekee, tuntee, ajattelee ja on.</p>

              <h3>Lisää tietoa saat täältä: <a href="https://sexpo.fi">Sexpo</a></h3>
              <p>•	Sexpon sivuilta löydät Kootusti tietoa -osion, josta löytyy informatiiviset paketit liittyen mm. seksuaalisuuteen. Sexpo tarjoaa maksutonta neuvontaa seksuaalisuuteen,
                    seksiin ja sukupuolisuuteen liittyvissä kysymyksissä.
                    Sexpolla toimii neuvontapuhelin (+358 50 472 4257), johon voi olla yhteydessä, jos esimerkiksi seksuaalisuus, ihmissuhteet tai seksi mietityttävät. Soittoajat löydät nettisivulta.
                    Lisäksi nettivisulla on myös Nettineuvontaa, josta voit anonyymisti kysyä mieltäsi askarruttavista asioista.</p>
              <p></p>
              <p></p>

              <a href="https://www.vaestoliitto.fi">Väestöliitto</a>
              <p></p>
              <p>•	Väestöliitto on sosiaali- ja terveysalalla toimiva asiantuntijajärjestö, joka edistää perheiden, nuorten ja koko väestön hyvinvointia, turvallisuutta, terveyttä ja tasapainoista elämää.
                    Sivustolta löydät esimerkiksi otsikot Nuoret ja Seksuaalisuus, joista löydät paljon hyödyllistä tietoa. Lisäksi sivustolla järjestetään esimerkiksi Seksuaalineuvontachat ja löydät sieltä myös Seksitautivisan.
              </p>
            </div>
              <div>Palvelunohjaus</div>
            </Aux>

          );
      }
}

export default InfoKit2;
