import React, { useState } from 'react';
import Comment from '../../components/comment';
import Photo from '../../components/photo';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../styles.css';

const dummyTitle = 'Symbolic Protest: the case of the hashtag #BlackLivesMatter | Online talk'
const dummyAboutInfo = `The hashtag (#) BlackLivesMatter has resurfaced sparking protest worldwide after the death of George Floyd. What emerged as a protest, a movement and an organisation is now a symbol for protesting racial equality. This talk will dive deeper into the historical aspects of Black social movements and the significance of a slogan. This event is the first online Community Seminar Series event hosted byRobert Gordon University's School of Applied Social Studies. Our seminars are free to attend, open to all, and held online. Please register to access to online session and follow the link provided in the eTicket that you will receive by email. If you have any questions, please contact Dr Alice Butler-Warke on a.butler-warke@rgu.ac.uk We look forward to welcoming you to our virtual event!`
const Url = 'https://media4.s-nbcnews.com/i/newscms/2020_26/3392396/200624-blm-protest-jm-1402_cbd89c5bb57ab5b92c133713bac6adab.jpg';

export default function Event(){
  const [eventData, setEventData] = useState({});
  const [comments, setComments] = useState([1,1,1]);
  const [photos, setPhotos] = useState([]);

  const { event_name, event_description } = eventData;

  return(
    <div className='container' id='eventPage'>
      <Header />
      <div id='titleSection'>
        <h1 id='title'>{ dummyTitle }</h1>
      </div>
      <section className='eventInfo'>
        <div className='eventPhoto'>
          <Photo url={ Url } caption='Is this a photo from the event?' time={ 19 }/>
        </div>
        <div className='aboutInfo'>
          <strong><h4 id='aboutEvent'>About this Event</h4></strong>
          <p id='aboutText'>{ dummyAboutInfo }</p>
        </div>
      </section>
      <h1>Photos</h1>
      <section className='photoSection'>
        <p id='viewAll'>View all</p>
        <p>Take a photo</p>
      </section>
      <h1>Comments</h1>
      <section className='commentSection'>
        <div className='postComment'>
          <div className='names'>
            <h3>Name:</h3>
            <h3>Comment:</h3>
          </div>
          <div className='inputs'>
            <input />
            <textarea rows="4" cols="50" id='comment' placeholder='150 words maximum...'></textarea>
          </div>
          <div className='button'>
            <button id='postBtn'>Post</button>
          </div>
        </div>
        <div className='comments'>
          { comments.map(comment => {
            return <Comment />
          }) }
        </div>
      </section>
      <Footer />
    </div>
  )
}
