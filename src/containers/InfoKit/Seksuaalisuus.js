import React, { Component } from 'react';

import { Route } from 'react-router-dom'

import Aux from '../../hoc/Auxiliary';


class Seksuaalisuus extends Component {
      render() {
          return (
            <Aux>
            <div className="Home">
            <h3>Seksuaalisuus</h3>
              
            <strong>Seksuaalisuus on:</strong>
            <ul>
                    <li>iso osa ihmisyyttä koko elämän ajan, synnynnäinen kyky reagoida fyysisesti ja psyykkisesti aistimuksiin ja virikkeisiin.</li>
                    <li>seksuaalisuus on sidoksissa eri kulttuureihin ja elämän muutoksiin. Se muuttuu läpi elämän eikä ole koskaan valmis.</li>
                    <li>ei ole pelkkää seksiä, vaan siihen liittyy seksuaalinen suuntautuminen, seksuaalinen kehitys, biologinen sukupuoli,
                        sosiaalinen sukupuoli-identiteetti, eroottinen mielenkiinto, nautinto ja intiimiys.</li>
                    <li>koetaan ja ilmaistaan eri keinoin: fantasiat, halut, ajatukset, uskomukset. Seksuaalisuuden voi määrittää vain yksilö itse.</li>
            </ul>
            <p>Seksi on sitä, mitä teemme. Seksuaalisuus on sitä, mitä olemme. Ilmenee kaikessa, mitä ihminen tekee, tuntee, ajattelee ja on.</p> 

            <p>Lisää tietoa saat täältä:</p>
            <a href="https://sexpo.fi">Sexpo</a>

            <ul>
                    <li>Sexpon sivuilta löydät Kootusti tietoa -osion, josta löytyy informatiiviset paketit liittyen mm. seksuaalisuuteen.
                        Sexpo tarjoaa maksutonta neuvontaa seksuaalisuuteen, seksiin ja sukupuolisuuteen liittyvissä kysymyksissä.
                        Sexpolla toimii neuvontapuhelin (+358 50 472 4257), johon voi olla yhteydessä, jos esimerkiksi seksuaalisuus, ihmissuhteet tai seksi mietityttävät.
                        Soittoajat löydät nettisivulta.
                        Lisäksi nettivisulla on myös Nettineuvontaa, josta voit anonyymisti kysyä mieltäsi askarruttavista asioista.</li>
            </ul>

            <a href="https://www.vaestoliitto.fi">Väestöliitto</a>

            <ul>
                  <li>Väestöliitto on sosiaali- ja terveysalalla toimiva asiantuntijajärjestö, joka edistää perheiden, nuorten ja koko väestön hyvinvointia, turvallisuutta, terveyttä ja tasapainoista elämää.
                      Sivustolta löydät esimerkiksi otsikot Nuoret ja Seksuaalisuus, joista löydät paljon hyödyllistä tietoa.
                      Lisäksi sivustolla järjestetään esimerkiksi Seksuaalineuvontachat ja löydät sieltä myös Seksitautivisan.</li>
            </ul>

            <h3>Seksuaaliterveys</h3>
            <strong>Yleistä</strong>
            <p>Seksuaalisuuteen liittyvän fyysisen, psyykkisen, emotionaalisen ja sosiaalisen hyvinvoinnin tila.
               Edellytys hyvälle seksuaaliterveydelle on positiivinen ja kunnioittava asenne seksuaalisuuteen ja seksuaalisiin suhteisiin.
               Hyvän seksuaaliterveyden perusta on seksuaalioikeuksien kunnioittaminen, eikä terveeseen seksuaalisuhteeseen kuulu väkivalta, syrjintä tai pakottaminen.</p>

            <strong>Ehkäisymenetelmät</strong>
            <p>Eri ehkäisymenetelmiä ovat kondomi, ehkäisypillerit, ehkäisyrengas, ehkäisykapseli, ehkäisylaastari, ehkäisykierukka, jälkiehkäisy.
               Helsingissä maksuton ehkäisy alle 25-vuotiaille.</p>

            <strong>Seksitaudit</strong>
            <p>Seksitaudit ovat joko bakteerin tai viruksen aiheuttamia tartuntatauteja, jotka tarttuvat suojaamattomassa seksikontaktissa.
               Klamydia, HPV ja kondylooma, herpes, tippuri, B- ja C-hepatiitti, kuppa, HIV. Kondomi on ainoa ehkäisymenetelmä, joka suojaa seksitaudeilta.</p>

            <a href="https://www.hel.fi/helsinki/fi/sosiaali-ja-terveyspalvelut/terveyspalvelut/muita-terveyspalveluja/ehkaisyneuvonta/">Helsingin kaupunki – Ehkäisyneuvonta</a>

            <p>Sivustolta löydät tietoa, mistä saat Helsingin alueella ehkäisyneuvontaa, mitä kaikkia ehkäisymenetelmiä on olemassa ja kenelle ne soveltuvat.
               Helsingissä tarjotaan maksuton ehkäisy alle 25-vuotiaille.</p>
            </div>

            <div>
                  <strong>Seksuaalioikeudet</strong>
                  <p>Seksuaalioikeudet suojaavat jokaisen ihmisen oikeutta toteuttaa ja ilmaista omaa seksuaalisuuttaan ja pyrkivät vähentämään syrjintää.
                     Jokaisen tulee kunnioittaa omia, sekä toisten seksuaalioikeuksia.</p>

                  <p>Tiivistetysti seksuaalioikeudet pitävät sisällään:</p>
                  <ul>
                        <li>oikeuden eri seksuaali- ja lisääntymisterveyspalveluihin</li>
                        <li>oikeuden lukea tuoreimpia tietoja seksuaali- ja lisääntymisterveydestä</li>
                        <li>oikeuden valita oma kumppaninsa, seksuaaliset suhteet ja kenen kanssa menee naimisiin</li>
                        <li>oikeuden päättää omasta kehostaan ja kunnioittaa toisen kehoa ja seksuaalioikeuksia</li>
                        <li>oikeuden yksityisyyteen</li>
                        <li>oikeuden vapauteen kaikista pakottamisen tai väkivallan muodoista</li>
                        <li>oikeuden päättää haluaako lapsia vai ei, ja milloin haluaa</li>
                        <li>oikeuden tyydyttävään, turvalliseen ja nautinnolliseen seksielämään.</li>
                  </ul>

                  <a href="http://www.ihmisoikeudet.net/ihmisoikeudet/seksuaalioikeudet/">Ihmisoikeudet.net – Seksuaalioikeudet</a>
                  <p>Seksuaalioikeudet koskettavat meitä kaikkia. Sivustolla kerrotaan, mitä seksuaalioikeudet sisältävät, mitä ne tarkoittavat käytännössä ja miksi ne ovat niin tärkeitä.¨
                     Sivustolla on listattu seitsemän keskeisintä seksuaalioikeutta.</p>
            </div>

            <div>
                  <h3>Seksuaalinen suuntautuminen</h3>
                  <strong>Yleisesti</strong>
                  <p>Seksuaalinen suuntautuminen ei ole valintakysymys.
                  Nuoruudessa ja varhaisaikuisuudessa seksuaalinen suuntautuminen alkaa selkiytyä.
                  Noin 5% ihmisistä suuntautuu samaa sukupuolta olevaan kumppaniin.</p>

                  <strong>Historiaa</strong>
                  <p>Homoseksuaalisuutta on aina ollut. Homoseksuaalisuus luokiteltiin Suomessa rikokseksi vielä vuonna 1971. Tautiluokituksen alla se pysyi vuoteen 1982 saakka. </p>

                  <strong>Nykypäivä</strong>
                  <p>Vuonna 2017 tasa-arvoinen avioliittolaki astui voimaan, joten käsitykset ja asenteet ovat vuosien kuluessa muuttuneet.
                  Yhä edelleen esimerkiksi homo- ja biseksuaalisuuteen liittyy sekä psyykkisiä että sosiaalisia, hyvinvointiin ja terveyteen vaikuttavia prosesseja.
                  Näitä ovat esimerkiksi itsensä hyväksyminen, suuntautumisesta vaikeneminen ja suuntautumisesta kertominen.</p>
                  
                  <strong>Seksuaaliset suuntautumiset</strong>
                  <ul>
                        <li>Aseksuaali – Seksuaalisen kiinnostuksen vähäisyys tai puute, romanttinen aseksuaali voi tuntea romanttisia mutta ei seksuaalisia tunteita toista kohtaan. </li>
                        <li>Biseksuaali – Henkilö kokee seksuaalista vetoa sekä miehiin että naisiin.</li>
                        <li>Heteroseksuaali – Henkilö kokee seksuaalista vetoa vastakkaiseen sukupuoleen.</li>
                        <li>Homoseksuaalisuus – Seksuaalinen kiinnostus kohdistuu oman sukupuolen edustajaan.</li>
                        <li>Panseksuaali – Seksuaalinen kiinnostus, joka voi kohdistua mihin tahansa kohteeseen sukupuolesta riippumatta.</li>
                  </ul>

                  <p>Lisää tietoa aiheesta saat täältä:</p>
                  <a href="www.seta.fi">SETA</a>
                  <p>SETA on ihmisoikeusjärjestö, jonka tavoitteena on yhteiskunnan kokonaisvaltainen muutos, jotta hyvinvointi ja ihmisoikeudet toteutuvat Suomessa ja kansainvälisesti riippumatta seksuaalisesta suuntautumisesta, sukupuoli-identiteetistä tai sukupuolen ilmaisusta.
                  SETAn sivuilta löytyy myös eri tuki- ja neuvontapalvelut ja niiden yhteystiedot. Esimerkiksi syrjintää kokeneille ihmisille löytyy oma neuvontapalvelu.</p>
            </div>

              <div>Palvelunohjaus</div>
            </Aux>

          );
      }
}

export default Seksuaalisuus;
