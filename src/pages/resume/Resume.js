import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";
import resume from "./David-Danielian-Resume.pdf";

const Resume = ({ name, tagline }) => {

    const params = "#view=Fit";
    return (
        <section className="resume">
            <PageHeader title="Resume" description="Last updated 3/26/2023"></PageHeader>
            <embed className= "pdf" src={resume+params} type="application/pdf" />
            <SocialIcons />
        </section>
    );
};

export default Resume;