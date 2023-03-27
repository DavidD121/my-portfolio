import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import SocialIcons from "../../components/SocialIcons";

const Landing = ({ name, tagline }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex"
    },

    // landingButtons: {
    //   position: "absolute",
    //   bottom: "0",
    //   opacity: "0.3",
    //   mixBlendMode: "lighten",
    //   height: "80%",
    // },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px"
    },
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="landing" style={styles.landing}>
      <div className="textContainer" style={styles.textContainer}>
        <motion.h1
          className="name"
          style={styles.name}
          ref={ref}
          initial={{ y: "-10vw", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: "-10vw", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {name}
        </motion.h1>
        <motion.p
          className="description"
          ref={ref}
          initial={{ y: "10vw", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: "10vw", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Howdy! Thanks for checking out my website. Click to learn more about me and and see what I'm up to
        </motion.p>
      </div>
      <div className="button-container">
        <motion.div
          className="landingButtons"
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={styles.landingButtons}
        >
          <NavLink to="/about">
            <button className="landing-button">About Me</button>
          </NavLink>
          <NavLink to="/projects">
            <button className="landing-button">Projects</button>
          </NavLink>
          <NavLink to="/contact">
            <button className="landing-button">Contact Info</button>
          </NavLink>
        </motion.div>
      </div>

      <SocialIcons />
    </section>
  );
};

export default Landing;
