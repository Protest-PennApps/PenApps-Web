import React, { useState } from 'react';
import Comment from '../../components/comment';
import Photo from '../../components/photo';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import axios from 'axios';
import storage from '../../services/firebase';

import '../../styles.css';

const dummyTitle = 'Symbolic Protest: the case of the hashtag #BlackLivesMatter | Online talk'
const dummyAboutInfo = `The hashtag (#) BlackLivesMatter has resurfaced sparking protest worldwide after the death of George Floyd. What emerged as a protest, a movement and an organisation is now a symbol for protesting racial equality. This talk will dive deeper into the historical aspects of Black social movements and the significance of a slogan. This event is the first online Community Seminar Series event hosted byRobert Gordon University's School of Applied Social Studies. Our seminars are free to attend, open to all, and held online. Please register to access to online session and follow the link provided in the eTicket that you will receive by email. If you have any questions, please contact Dr Alice Butler-Warke on a.butler-warke@rgu.ac.uk We look forward to welcoming you to our virtual event!`
const Url = 'https://media4.s-nbcnews.com/i/newscms/2020_26/3392396/200624-blm-protest-jm-1402_cbd89c5bb57ab5b92c133713bac6adab.jpg';
const SERVER_URL = 'http://3877f8d4f60d.ngrok.io'

export default function Event(){
  const allInputs = {imgUrl: ''}
  
  const [eventData, setEventData] = useState({});
  const [comments, setComments] = useState([1,1,1]);
  const [photos, setPhotos] = useState([]);
  const [imageToUpload, setImageToUpload] = useState('');
  const [imageAsUrl, setImageAsUrl] = useState(allInputs)
  const [canUpload, setCanUpload] = useState(false);


  const { event_name, event_description } = eventData;

  const handleUploadImage = (e) => {
    const image = e.target.files[0];
    setImageToUpload(imageToUpload => (image));
    setCanUpload(true);
  }

  const handleFirebaseUpload = (e) => {
    e.preventDefault();

    const uploadTask = storage.ref(`/images/${imageToUpload.name}`).put(imageToUpload)

    uploadTask.on('state_changed', 
    (snapShot) => {
      //takes a snap shot of the process as it is happening
      console.log(snapShot)
    }, (err) => {
      //catches the errors
      console.log(err)
    }, () => {
      // gets the functions from storage refences the image storage in firebase by the children
      // gets the download url then sets the image from firebase as the value for the imgUrl key:
      storage.ref('images').child(imageToUpload.name).getDownloadURL()
       .then(async fireBaseUrl => {
         setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}));
         const data = {
           name: imageToUpload.name,
           image_url: fireBaseUrl,
           description: '',
           geojson_url: '',
           event_name: '',
           sample_event: ''
         }

         try{
            const res = await axios.post(`${ SERVER_URL }/image/upload`, data);
            console.log(res.data)
         } catch(e) {
           console.log(e)
         }
       });
    });

    console.log(imageAsUrl)
  }

  return(
    <div>
      <Header />
      <div className='container' id='eventPage'>
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
        <p>Upload a photo</p>
        <div className='upload'>
          <input id='upload' type='file' onChange={ handleUploadImage }/>
          { canUpload && <button onClick={ handleFirebaseUpload }>Upload</button> }
        </div>
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
    </div>
  )
}
