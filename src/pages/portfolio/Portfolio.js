import projectData from "./projectsData.json";
import Project from "../../components/Project";
import PageHeader from "../../components/PageHeader";

const Portfolio = () => {
  const renderProject = (project, i) => (
      <Project
        key={i}
        order={i}
        id={project.id}
        title={project.title}
        image={project.image}
        color={project.bgcolor}
        github={project.github}
        deployed={project.deployed}
        skills={project.sklls}
        description={project.description}
        media={project.media}
      />
    );

  // Two independent columns so expanding a project only pushes down the
  // projects below it in the same column.
  const columns = [0, 1].map((col) =>
    projectData
      .map((project, i) => [project, i])
      .filter(([, i]) => i % 2 === col)
      .map(([project, i]) => renderProject(project, i))
  );

  return (
    <section className="portfolio">
      <PageHeader title="Projects" description="View my work" />
      <div className="row">
        {columns.map((column, i) => (
          <div key={i} className="projectColumn">
            {column}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
