import React from 'react';
// renders the about section
function About() {
  return (
    <section>
      <div className="d-flex">
        <div className="skew section-heading">
          <h3 className="anti-skew">About Me</h3>
        </div>
      </div>
      <div className="w-100">
        <div className="bio-image"></div>
        <article className="pt-4 px-3 bio-text">
          <p className="py-2">
          Hi, my name is Shelley Soucie. I have spent the several years working as a physical therapist. I have worked with multiple applications for clinical documentation. They tend to be counter-intuitive to the workflow of a clinician and/or require excessive double documentation as well as being clunky and generally difficult and time consuming to navigate thru. It was my frustration with the inadequacies of these applications that piqued my interest in computer programming. Upon further research I realized I had a deep interest in learning about web development. I have recently graduated from UCONN Coding Bootcamp for Web development.
          </p>
          <p className="py-2">
            I have both front end and back end skills including React, Node.js,
            Express.js, MySQL, and MongoDB. For a full list of my skills as a
            developer, click the link to my resume above.
          </p>
          <p className="py-2">
            My work as a Physical Therapist required creative problem-solving skills and a
            focus on client impact. I have experience managing a caseload of 20-30 clients. I also 
            manage several Physical Therapy Assistants. I work hard and strive for excellence in
            everything that I do. These same skills serve me well when it comes
            to meeting client expectations for their web needs.
          </p>
          <p className="py-2">
            When I am not working, I enjoy spending time with my family, hiking with my dogs,
            reading, gardening, and practicing coding.
          </p>
          <p className="py-2">
            Click the link to my portfolio section to see examples of my work.{' '}
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
