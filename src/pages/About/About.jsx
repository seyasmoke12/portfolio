import { useEffect, useState } from "react";
import Service from "./Service";
import Testimonial from "./Testimonial";


const About = () => {




    const servicesData = [


        {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level."
  },
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description: "The most modern and high-quality design made at a professional level."
  },
  
  {
    icon: "/images/icon-app.svg",
    title: "Mobile apps",
    description: " Ensuring your website looks and works flawlessly on any device, providing a seamless and engaging user experience across all screen sizes."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Photography",
    description: "Capturing high-quality images that tell your story and showcase your brand in the most visually appealing way."
  }
];


  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
    //   console.log(data)
      setTestimonials(data)
    });
  }, [])


  return (
    <article className="about active">
        <header>
            <h2 className="h2 article-title">About Me</h2>
        </header>
       <section className="about-text">
  <p>
    I’m a Creative Director and UI/UX Designer from Ethiopia, Addis Abeba, specializing in web development and print media. I thrive on transforming complex problems into elegant, intuitive designs.
  </p>

  <p>
    My mission is to create websites that are not only functional and user-friendly but also visually appealing. By adding a personal touch, I ensure your product stands out and is easy to navigate. My goal is to convey your message and identity in the most creative way possible. I've designed for numerous renowned brands, delivering impactful web experiences.
  </p>
</section>



<section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


        <section className="testimonials">

      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">

      {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

      </ul>

    </section>

    <section className="clients">

      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-1-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-2-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-3-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-4-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-5-color.png" alt="client logo"/>
          </a>
        </li>

       

      </ul>

    </section>

    </article>
  )
}

export default About