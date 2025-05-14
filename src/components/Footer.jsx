const Footer = () => {
  return (
    <footer
      style={{
        marginTop: '2rem',
        background: 'rgba(0, 0, 0, 0.85)',
        padding: '1rem 2rem',
        borderRadius: '8px',
        textAlign: 'center',
      }}
    >
      <a
        href="https://github.com/NMGIS"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: '0 1rem' }}
      >
        <i className="fa-brands fa-github fa-2x"></i>
      </a>
      <a
        href="https://linkedin.com/in/nevinmcintyregis"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: '0 1rem' }}
      >
        <i className="fa-brands fa-linkedin fa-2x"></i>
      </a>
    </footer>
  );
};

export default Footer;
