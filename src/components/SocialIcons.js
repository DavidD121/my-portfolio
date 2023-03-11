const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/DavidD121">
        <i className="fa-brands fa-github" aria-hidden="true" title="David Danielian's GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/david-danielian-83bb2a209/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="David Danielian's LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/David_D121/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="David Danielian's Instagram Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
