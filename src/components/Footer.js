import React from 'react';
import './styles/footer.css';

const Footer = () => {
    return(
       <div className='ft-container'>
           <footer>
               <section className='ft-main'>
                   <div className='main-item'>
                        <h2 className='ft-tittle'> Support </h2>
                        <ul className= 'ft-ul'>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Term and Policies</a></li>
                                <li><a href="#">Contact Us</a></li>
                        </ul>
                   </div>
                   <div className='main-item'>
                        <h2 className='ft-tittle'> Main </h2>
                        <ul className= 'ft-ul'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Organize</a></li>
                        </ul>
                   </div>
                   <div className='main-item'>
                        <h2 className='ft-tittle'> Find Events </h2>
                        <ul className= 'ft-ul'>
                                <li><a href="#">Miami</a></li>
                                <li><a href="#">Los Angeles</a></li>
                                <li><a href="#">All Cities</a></li>
                        </ul>
                   </div>
               </section>

                <section class="ft-social">
                    <ul class="ft-social-list"></ul>
                </section>

                <section class="ft-legal">
                   
                    <ul class="ft-legal-list">
                        <li>&copy;{new Date().getFullYear()} Protest</li>
                        <li><a href="/">Terms &amp; Conditions</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                    </ul>
                </section>
           </footer>
       </div>
    );
}

export default Footer;