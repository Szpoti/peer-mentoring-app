import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Badge,
  Button,
  Form,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import MultiSelect from "react-multi-select-component";

const SearchMentorPage = () => {
  const [users, setUsers] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [selectedTech, setSelectedTech] = useState([]);
  const [selectedProject, setSelectedProject] = useState([]);

  const sampleUsers = [
    {
      profilePicture: "/ződ.png",
      userId: "1",
      firstName: "Zöld",
      lastName: "Zoli",
      technologies: ["React"],
    },
    {
      profilePicture: "/nari.png",
      userId: "2",
      firstName: "Narancs",
      lastName: "Nándi",
      technologies: ["React", "C#", "Javascript"],
    },
    {
      profilePicture: "/feka.png",
      userId: "3",
      firstName: "Fekete",
      lastName: "Feri",
      technologies: ["Java", "Spring"],
    },
    {
      profilePicture: "/sari.png",
      userId: "4",
      firstName: "Sárga",
      lastName: "Sára",
      technologies: ["C#", "ASP.Net"],
    },
  ];

  const sampleTechs = [
    { label: "C#", value: "csharp" },
    { label: "Java", value: "java" },
    { label: "React", value: "react" },
    { label: "Spring", value: "spring" },
    { label: "Javascript", value: "javascript" },
    { label: "ASP.NET", value: "aspdotnet" },
    { label: "Bootstrap", value: "bootstrap" },
    { label: "PSQL", value: "psql" },
  ];

  const sampleProjects = [
    { label: "Ask Mate", value: "askmate" },
    { label: "Proman", value: "proman" },
    { label: "Web Blackjack", value: "blackjack" },
    { label: "Pong", value: "pong" },
    { label: "File Manager", value: "filemanager" },
    { label: "Codecool Quest", value: "quest" },
  ];

  const search = () => {
    console.log("search");
    console.log("selectedTech", selectedTech);
    console.log("selectedProject", selectedProject);
    //ide jön majd a szerver hivás
  };

  useEffect(() => {
    setUsers(sampleUsers);
    setTechnologies(sampleTechs);
  }, []);

  return (
    <Container className="page">
      <Row className="content-container">
        <Col>
          <Row className="mb-2">
            <Col sm={5}>
              <MultiSelect
                className="mb-2"
                options={sampleTechs}
                value={selectedTech}
                onChange={setSelectedTech}
                labelledBy={"Select a technology"}
                hasSelectAll={false}
                shouldToggleOnHover={true}
                overrideStrings={{
                  selectSomeItems: "Select a technology to filter",
                }}
              />
            </Col>
            <Col sm={5}>
              <MultiSelect
                options={sampleProjects}
                value={selectedProject}
                onChange={setSelectedProject}
                labelledBy={"Select a Project"}
                hasSelectAll={false}
                shouldToggleOnHover={true}
                overrideStrings={{
                  selectSomeItems: "Select a project to filter",
                }}
              />
            </Col>
            <Col className="text-right">
              <Button onClick={search}>Search</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              {users.map((user) => {
                return (
                  <Row>
                    <Col sm={2} className="text-center">
                      <Image
                        className="img-fluid img-thumbnail rounded-circle border"
                        src={user.profilePicture}
                        alt="Profile"
                      />
                    </Col>
                    <Col className="content-container" sm={10}>
                      <Row>
                        <Col>
                          <Link to={`/user/${user.userId}`} className="h5">
                            {user.firstName} {user.lastName}
                          </Link>
                        </Col>
                        <Col sm={4} className="mt-1">
                          {user.technologies.map((tech) => {
                            return (
                              <Badge
                                variant="primary"
                                className="badge-pill float-right ml-1"
                              >
                                {tech}
                              </Badge>
                            );
                          })}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                );
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchMentorPage;
