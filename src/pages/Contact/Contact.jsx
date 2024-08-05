import { useRef } from "react";
import emailjs from '@emailjs/browser';
const Contact = () => {



     const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_APP_SERVICE_KEY, import.meta.env.VITE_APP_TEMPLATE_KEY, form.current, {
        publicKey: import.meta.env.VITE_APP_API_KEY,
      })
      .then(
        () => {
            alert("you have successfully submited")
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("please try again later")
        },
      );
  };









  return (
    <section className="contact" data-page="contact">

      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31657.570583812034!2d38.82211281888956!3d9.010748300773897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85a367fd37af%3A0xa10b123456789abc!2sYeka%20Abado%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1691152638501!5m2!1sen!2sus"
  width="400" height="300" loading="lazy" title="Google Map of Yeka Abado, Addis Ababa, Ethiopia"></iframe>

        </figure>
      </section>

      <section className="contact-form">

        <h3 className="h3 form-title">Contact Form</h3>

        <form ref={form} onSubmit={sendEmail} className="form" data-form>

          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />

            <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
          </div>

          <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>

        </form>

      </section>

    </section>
  );
};

export default Contact;