import React from 'react'
import Carter from '../MrCarter.jpg';

const AboutMe = () => {
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-xm-12'>
                    <div className='photo-wrap'>
                        <img className='profile-img'src={Carter} alt='Steve Carter...'/>
                    </div>
                </div>
                <div className='col-lg-6 col-xm-12'>
                    <h1> About Me</h1>
                    <p>
                        I am a highly motivated individual driven to find the gaps and innovate ways to serve customer's needs. 
                        Software Engineering has become a creative outlet for me. A dream of mine is to be part of that community striving to 
                        create a better world.

                        One of my personal goals and priorities is it is important for me to provide value wherever I go and serve my community 
                        through non-profit work, community organization, mentoring, and planning events. I believe software engineering can 
                        provide me the ability to do so on a larger scale. Living in New York I've worked with several community organizations 
                        focused on educating and mentoring the youth. After becoming a father I've been fueled to not only provide a better life 
                        for my wife and daughter, but also to be a supportive mentor and a driver of positive change to the next generation that 
                        I wish I had as a child.

                        My time at Flatiron School deepened my love for problem-solving and being a lifelong learner. I was challenged to grow my 
                        skills and it left me excited to start a career in software development. I am now a motivated Software Engineer with a 
                        passion for problem-solving and providing value. I enjoy a challenge and welcome any opportunity to learn.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
