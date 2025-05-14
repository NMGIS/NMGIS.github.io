import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <div className="content-region"><h2>Project not found</h2></div>;
  }

  return (
    <div className="content-region">
      <div className="project-detail">
        <h2 style={{ textAlign: 'center' }}>
          {project.appLink ? (
            <a
              href={project.appLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'inherit',
                textDecoration: 'none',
                transition: 'color 0.2s, border-bottom 0.2s',
                borderBottom: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderBottom = '2px solid #EF6D3D';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderBottom = '2px solid transparent';
              }}
            >

              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h2>
        {project.embedUrl ? (
          <div style={{ margin: '1rem 0' }}>
            <iframe
              src={project.embedUrl}
              width="100%"
              height="600"
              style={{ border: 'none', borderRadius: '8px' }}
              title={`${project.title} Embedded App`}
            ></iframe>
          </div>
        ) : (
          project.image && (
            <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
              {project.appLink ? (
                <a
                  href={project.appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-block', transition: 'transform 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '8px' }}
                  />
                </a>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '8px' }}
                />
              )}
            </div>
          )
        )}


        {(project.appLink || project.github) && (
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            {project.appLink && (
              <a href={project.appLink} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#EF6D3D' }}>
                App
              </a>
            )}
            {project.appLink && project.github && ' | '}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#EF6D3D' }}>
                Code
              </a>
            )}
          </div>
        )}
        <br />
        <p>{project.summary}</p>
        <br />
        {project.details && (
          <div
            className="project-detail"
            dangerouslySetInnerHTML={{ __html: project.details }}
          />
        )}

        {project.additionalImages && (
          <div style={{ marginTop: '1.5rem' }}>
            {project.additionalImages.map((img, i) => (
              <figure key={i} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <img
                  src={img.src}
                  alt={img.caption || `Supplemental graphic ${i + 1}`}
                  style={{
                    width: '100%',
                    maxWidth: '750px',
                    borderRadius: '8px'
                  }}
                />
                {img.caption && (
                  <figcaption style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#ccc' }}>
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
        {project.stack && (
          <>
            <h4>What was used:</h4>
            <ul>
              {project.stack.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {project.upcoming && (
          <>
            <h4>Upcoming Features:</h4>
            <ul>
              {project.upcoming.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
