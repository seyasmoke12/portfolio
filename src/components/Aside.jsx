import React from 'react'
import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";
import Profile from "../../public/images/seid.jpg"
function Aside() {
  return (
    <aside className='sidebar'>
        <div className='sidebar-info'>
            <figure className='avatar-box'>
                <img src={Profile} alt="" srcset="" width="80px" />
            </figure>
            <div className='info-content'>
                <h1 className='name'>Seid Abdela</h1>
                <p className='title'>Web Developer</p>
            </div>
            <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>
            <GiClawSlashes />
            </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <GiMailbox/>
                
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:seyasmoke49@gmail.com" className="contact-link">
                  seyasmoke49@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiPhone/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+251923797665" className="contact-link">
                  +251 92 379-7665
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiCalendar/>
               
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time dateTime="1982-06-23">June 05, 2004</time>
              </div>
         </li>

            <li className="contact-item">
               <div className="icon-box">
                      <GiMayanPyramid/>
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                 <p className="contact-title">Location</p>
 
                <address>Ethiopia, Addis Abeba</address>
               </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
    </aside>
  )
}

export default Aside