import React from 'react';
import '../styles/about.css';
import profileImg from '../photos/mypic.jpg';



export default function About() {
  return (
    <section className="about-page">
      <h2>About the Author</h2>

      <div className="author-layout">
        <img className="author-photo" src={profileImg} alt="Ruth Ann Aakre" />

        <div className="author-info">
          <div className="author-name">Ruth Ann Aakre</div>
          <div className="author-bio">
            <p>Hi! I’m Ruth Ann Aakre, a web developer and lifelong learner with a deep passion for Norway, its culture, and its history. Growing up, I heard stories of Norway from my grandparents and still hold many of the traditions they brought with them when their parents immigrated to the United States. These stories and traditions have always been a meaningful part of my life and inspired me to create this site as a way to share what I know and respect about Norway.</p>
            <p>This project is more than just a collection of facts. It is a space where visitors can explore Norway’s rich history, stunning landscapes, and unique cultural traditions in an engaging and interactive way. I have been learning Norwegian myself and added a section on the site where others can learn simple words and phrases. I hope this feature encourages people to start their own journey with the language and connect more deeply with the culture.</p>
            <p>With a background in technology and education, I love creating experiences that are both visually appealing and easy to use. I enjoy exploring new ideas, experimenting with web and game development, and connecting with people who share a curiosity for learning and culture. Through this site, I hope to inspire visitors to appreciate Norway, whether that means planning a visit, learning the language, or simply enjoying the stories and traditions that make it such a special place.</p>
          </div>
        </div>
      </div>
    </section>
    
  );
}
