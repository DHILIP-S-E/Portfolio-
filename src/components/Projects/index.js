import React, { useState, useEffect } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { loadMarkdownCollection } from '../../utils/contentLoader';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('Web app');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectCollection = await loadMarkdownCollection('/content/projects');
      setProjects(projectCollection);
    };
    fetchProjects();
  }, []);

  if (projects.length === 0) {
    return <div>Loading projects...</div>;
  }

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          <ToggleButton active={toggle === 'Web app'} value="Web app" onClick={() => setToggle('Web app')}>WEB APP</ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'Python'} value="Python" onClick={() => setToggle('Python')}>PYTHON</ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'Agent'} value="Agent" onClick={() => setToggle('Agent')}>AGENT</ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {projects && projects.length > 0 ? projects
            .filter((item) => item?.category === toggle)
            .map((project, index) => (
              <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            )) : <div>No projects found</div>}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects
