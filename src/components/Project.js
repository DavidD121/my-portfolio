import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Project = ({ title, image, color, id, github, deployed, skills, description, media }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = {
    hidden: { x: id % 2 === 0 ? "10vw" : "-10vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  
  const [showAccordian, setShowAccordian] = useState(false);

  const toggleAccordian = () => showAccordian ? setShowAccordian(false) : setShowAccordian(true);

  return (
    <motion.div
      ref={ref}
      className="col-sm-12 col-lg-6 project"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div
        style={{ backgroundColor: color }}
        className="projectCard d-flex align-items-center justify-content-center"
        onClick={toggleAccordian}
      >
          <img className="project-image" src={image} alt="Laptop displaying application" />

      </div>
      
      <Accordion expanded={showAccordian} disableGutters={true} className="accordian" onClick={toggleAccordian} sx={{"& .MuiPaper-root-MuiAccordion-root.Mui-expanded": {margin: 0}}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>{title}</AccordionSummary>
        <AccordionDetails>
          <p className="skills">Skills/Tech Used: {skills}</p>
          {media ? 
            <div>

              <p className="projectDescription with-video">{description}</p>
              <video className="video" controls onClick={(e) => e.stopPropagation()}> 
                <source src={media} type="video/mp4"/>
              </video>
            </div> 
            : <p className="projectDescription">{description}</p>
          }
          {github ? 
            <button className="btn" onClick={(e) => { e.stopPropagation(); window.open(github, "_blank", "noopener,noreferrer"); }}>
              GitHub Repo
            </button> : ""
          }

          {deployed ? 
            <button className="btn" onClick={(e) => { e.stopPropagation(); window.open(deployed, "_blank", "noopener,noreferrer"); }}>
              Live Link
            </button> : ""
          }
        </AccordionDetails>
      </Accordion>
    </motion.div>
  );
};

export default Project;
