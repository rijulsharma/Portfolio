import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import YoutubeGallery from "../../Assets/Projects/YoutubeGallery.png";
import pocketNotes from "../../Assets/Projects/pocketNotes.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="WeebGram"
              description="•	A complete social media application using MERN with multiple components and functionalities including adding friends, image(posts) uploading, likes, login, registration.
              •	JWT based User Authentication and authorization. Designed schemas for model entities of users, posts.
              •	Developed the front end using React, and Redux-toolkit for state management.
              "
              ghLink="https://github.com/rijulsharma/MERN-Social-Media-App"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pocketNotes}
              isBlog={false}
              title="Pocket-Notes"
              description="•	fully responsive Pocket Notes app using React.js, providing users with a sleek and intuitive interface for creating, organizing, and managing notes on the go. Implemented features such as real-time syncing across devices, rich text editing, and seamless navigation. The application ensures a consistent and user-friendly experience on various devices, enhancing productivity and accessibility for note-taking tasks.
              
              "
              ghLink="https://github.com/rijulsharma/Pocket-Notes-App"
              demoLink="https://cuvette-pocket-notes-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Scribble"
              description=""
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="QuickChat"
              description="• real-time chat application using React.js, Node.js, and Socket.io, enabling instant messaging with features like user authentication, intuitive UI, multi-room support, and file sharing. 
              •	Implemented responsive design for seamless user experience across devices.
              "
              ghLink="https://github.com/rijulsharma/QuickChat"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={YoutubeGallery}
              isBlog={false}
              title="Personal Youtube Gallery"
              description="•	A responsive Web App made using node.js to save favorite YouTube videos with video ID or link.
              •	Allows users to stream video directly into the same App. The user data is saved in MongoDb
              "
              ghLink="https://github.com/rijulsharma/Personal-Youtube-Gallery"
              demoLink="https://rijulsharma.github.io/youtube-gallery-updated/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Student Management System"
              description="•	A Web Application made using SpringBoot to keep a track of students.
              •	Authentication using Spring Security, enables CRUD operations for expense tracking, Database used is PostgreSql.
              "
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
