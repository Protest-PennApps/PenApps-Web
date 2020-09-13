import React from 'react';
import Header from '../../components/Header';
import Zipcode from '../../components/zipcode/Zipcode';
import Footer from '../../components/Footer';
import Photo from '../../components/photo';
import Map from '../../components/map/Map';
import '../../styles.css';

const dummyTitle = "Ever wanted to know how you can get involved? Now you don't have to."
const dummyAboutInfo = "PROTEST is a crowdsourced application that allows you to figure out how toget involved in a movement or protest near you. If you want to make a change but don't know how to get organized and started, PROTEST is for you."
const Url = 'https://media4.s-nbcnews.com/i/newscms/2020_26/3392396/200624-blm-protest-jm-1402_cbd89c5bb57ab5b92c133713bac6adab.jpg';

const dummyTitle2 = 'How it works'
const dummyAboutInfo2 = "Gather a commmunity nearby you to get up and get involved in a movement you feel strongly about. PROTEST allows you to crowdsource information about a new or upcoming protest or movement near you."

export default function Home(){
  return(
    <div className='container' id='landingPage'>
      <Header />
      <Zipcode />

      <section class='landingPageInfo'>
        <div class='infoTitle'>
          <h1 id='title'>
              {dummyTitle}
          </h1>
          <div className='aboutInfo'>
          <p id= 'aboutText'> {dummyAboutInfo}</p>
        </div>
        </div>
        <div className='eventPhoto'>
          <Photo url={ Url } caption='Is this a photo from the event?' time={ 19 }/>
        </div>
      </section>

      <section class='blocks'>
      <ul class="flex-container">
        <li class="flex-item"></li>
        <li class="flex-item"></li>
        <li class="flex-item"></li>
        <li class="flex-item"></li>
        <li class="flex-item"></li>
        <li class="flex-item"></li>
        <li class="flex-item"></li>
    </ul>
      </section> 

      <section class='landingPageInfo'>
        <div class='infoTitle'>
          <h1 id='title'>
              {dummyTitle2}
          </h1>
          <div className='aboutInfo'>
          <p id= 'aboutText'> {dummyAboutInfo2}</p>
        </div>
        </div>
        <div className='eventPhoto'>
          <Photo url={ Url } caption='Is this a photo from the event?' time={ 19 }/>
        </div>
      </section>

      
      <Footer />

    </div>
  );
}
