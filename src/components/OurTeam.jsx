import React from 'react';
import './OurTeam.css';

const teamMembers = [
  {
    name: 'Alex Smith',
    title: 'Creative Leader',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    socials: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
    },
  },
  {
    name: 'May Brown',
    title: 'Sales Manager',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    socials: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
    },
  },
  {
    name: 'Ann Richmond',
    title: 'Web Developer',
    image: 'https://randomuser.me/api/portraits/women/75.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    socials: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
    },
  },
  {
    name: 'Roxie Swanson',
    title: 'Web Designer',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    socials: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
    },
  },
];

const OurTeam = () => {
  return (
    <div className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-img" />
            <h3>{member.name}</h3>
            <p className="desc">{member.description}</p>
            <p className="title">{member.title}</p>
            <div className="social-icons">
              <a href={member.socials.facebook} target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href={member.socials.twitter} target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={member.socials.instagram} target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
