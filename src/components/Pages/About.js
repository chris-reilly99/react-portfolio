import React from 'react';
import pic from "../../assets/IMG_9670.JPG"

function About () {

    return(
        <section className="container">
            <h2 className="top-title">Chris Reilly</h2>
            <div>
                <img className="main-picture" id="avatar" src={pic} alt="Chris Reilly" />

                <p>
                I am a recent graduate from the Univeristy of Denver, with a Bachelors in Finance and a Minor in Accounting. Currently, I am working in Denver for a mid-sized accounting firm called Armanino LLP as a Risk Assurance and Advisory Services Associate. 
                </p>
                <p>
                Outside of work, I am completing the FullStack Coding Bootcamp through the Univeristy of Denver to become familiar with the world of coding in hopes of reaching the coding and programming field within the finance industry. After this course, I would like to spend some time learning additional coding languages tailored towards finance such as Python and SQL.
                </p>
                <p>
                am originally from Sudbury, MA and have been in Colorado ever since starting college. I played rugby throughout highschool and college and would like to get involved again and join a casual mens league in the area when my schedule becomes a bit less intense after a these first few years of my career. In my free time, I like to lift wieghts, play video games, play with my dog, Kellogg, spend time outdoors, and head to downtown Denver with my friends. 
                </p>
            </div>
        </section>
    );
};

export default About;