import { useState, useEffect } from 'react';
import { FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [projectsWithLink, setProjectsWithLink] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
      const paragraphStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    color: 'white',
    margin: '10px 0'
  };

  const linkStyle = {
    color: '#0073e6',
    textDecoration: 'none'
  };

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setFilteredProjects(data);
        const filteredWithLink = data.filter(project => project.link);
        setProjectsWithLink(filteredWithLink);
        console.log(filteredWithLink);
      })
      .catch(error => console.error('Error loading project data:', error));
  }, []);

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === category);
      setFilteredProjects(filtered);
    }
  };
  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
       
      </header>

       <p style={paragraphStyle}>
      GitHub account: <a href="https://github.com/seyasmoke12" style={linkStyle}>https://github.com/seyasmoke12</a>
    </p>
    <br />

      
      <ul className="filter-list">
        {['Web development'].map(category => (
          <li className="filter-item" key={category}>
            <button
              className={category === selectedCategory ? 'active' : ''}
              onClick={() => handleFilterClick(category)}
              data-filter-btn
            >
              {category}
              
            </button>
          </li>
        ))}
      </ul>

    
      <section className="projects">
        <ul className="project-list">
          {filteredProjects.map(project => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category}
              key={project.id}
            >
              <Link to={project.link}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaRegEye />
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;