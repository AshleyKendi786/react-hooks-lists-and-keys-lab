 import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import ProjectItem from '../components/ProjectItem';

describe('ProjectItem', () => {
  const testProject = {
    name: "Reciplease",
    about: "A recipe tracking app",
    technologies: ["Rails", "Bootstrap CSS"]
  };

  test("renders project name", () => {
    render(
      <ProjectItem
        name={testProject.name}
        about={testProject.about}
        technologies={testProject.technologies}
      />
    );
    expect(screen.getByText(testProject.name)).toBeInTheDocument();
  });

  test("renders project description", () => {
    render(
      <ProjectItem
        name={testProject.name}
        about={testProject.about}
        technologies={testProject.technologies}
      />
    );
    expect(screen.getByText(testProject.about)).toBeInTheDocument();
  });

  test("renders all technologies", () => {
    render(
      <ProjectItem
        name={testProject.name}
        about={testProject.about}
        technologies={testProject.technologies}
      />
    );
    testProject.technologies.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });
});