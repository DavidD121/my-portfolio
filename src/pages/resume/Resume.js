import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";
import resume from "./David-Danielian-Resume.pdf";
import { useInView } from "react-intersection-observer";


const Resume = ({ name, tagline }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const params = "#view=Fit";
  return (
    
      <section className="resume">
        <PageHeader title="Resume" description="Last updated 3/25/2026"></PageHeader>
        <motion.div
          className="personalInfo col-12 col-lg-8"
          ref={ref}
          initial={{ y: "20vh", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: "20vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <embed className= "pdf" src={resume+params} type="application/pdf" />
        </motion.div>
        <SocialIcons />
      </section>
  );
};

export default Resume;