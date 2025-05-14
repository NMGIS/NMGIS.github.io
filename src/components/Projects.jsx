import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <div className="content-region">
      <div className="grid-container">
        {projects.map((project, index) => (
          <div className="grid-item" key={index}>
            {project.slug === 'send-me-project-ideas' ? (
              <a href={project.appLink} target="_blank" rel="noopener noreferrer">
                <img src={project.image} width="300" height="146" alt={project.title} />
              </a>
            ) : (
              <Link to={project.customRoute || `/projects/${project.slug}`}>
                <img src={project.image} width="300" height="146" alt={project.title} />
              </Link>
            )}
            <p>{project.title}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Projects;
