import './OurTeam.css';
import khushiImg from '../assets/khushi_Img.jpg';
import ananyaImg from '../assets/ananya_Img.jpg';
import ashiyaImg from '../assets/ashiya_Img.jpg';
import diyaImg from '../assets/diya_Img.jpg';

const teamMembers = [
  {
    name: 'Khushi Alodhan',
    title: 'Frontend Development & Backend Integration',
    image: khushiImg,
    description:
      'Khushi took charge of creating a responsive and visually appealing frontend. She also worked on backend integration to enable a cohesive user experience across the application.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/khushi-alodhan-a82906283/',
    },
    imgStyle: {
      objectPosition: 'bottom',
      transform: 'scale(1.2)',
    }
  },
  {
    name: 'Ananya Goyal',
    title: 'Frontend & Backend Integration',
    image: ananyaImg,
    description:
      'Ananya played a key role in designing and developing the frontend of the website. She also worked on integrating the frontend with the backend, ensuring smooth user interaction and data flow.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/ananya-goyal-824690288/',
    },
    imgStyle: {
      objectPosition: 'center 7%',
      transform: 'scale(1.2)',
    }
  },
  {
    name: 'Ashiya Garg',
    title: 'Machine Learning, Backend & Content',
    image: ashiyaImg,
    description:
      'Ashiya worked extensively on the machine learning model training and backend integration. She also curated and wrote the website content to ensure clarity and effectiveness in communication.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/ashiya-garg-b589a8294/',
    },
    imgStyle: {
      objectPosition: 'center 30%',
      transform: 'scale(1.2)',
    }
  },
  {
    name: 'Diya Arora',
    title: 'Machine Learning & Backend Integration',
    image: diyaImg,
    description:
      'Diya focused on the development and fine-tuning of the machine learning model. She also worked on seamlessly connecting the model with the backend to ensure real-time predictions.',
    socials: {
      linkedin: 'https://www.linkedin.com/in/diya-arora-2005d/',
    },
    imgStyle: {
      objectPosition: 'center 15%',
      transform: 'scale(1.2)',
    }
  },
];

const OurTeam = () => {
  return (
    <div className="team-section">
      <div className="team-wrapper">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img
                src={member.image}
                alt={member.name}
                className="team-img"
                style={member.imgStyle}
              />
              <h3>{member.name}</h3>
              <p className="desc">{member.description}</p>
              <p className="title">{member.title}</p>
              <div className="social-icons">
                {member.socials?.linkedin && (
                  <a href={member.socials.linkedin} target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                )}
                {member.socials?.facebook && (
                  <a href={member.socials.facebook} target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                )}
                {member.socials?.twitter && (
                  <a href={member.socials.twitter} target="_blank" rel="noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                )}
                {member.socials?.instagram && (
                  <a href={member.socials.instagram} target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
