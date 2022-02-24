import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import hog from "../../Assets/Projects/hog-cell.png";
import canny from "../../Assets/Projects/canny.png";
import depression from "../../Assets/Projects/depression.png";
import covid from "../../Assets/Projects/covid.png";
import dataViz from "../../Assets/Projects/dataViz.png";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataViz}
              isBlog={false}
              title="Data Visualization of US city temperatures"
              description="Visualize min, max and average temperature data of 4 US cities from the year 2015 using R."
              link="https://github.com/bhaleraoyash/US-City-Temperature-Data-Viz"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hog}
              isBlog={false}
              title="HOG Feature Descriptor"
              description="Detect HOG features in test images using the HOG Feature Descriptor algorithm. And, classify the test images as human/no-human using the K Nearest Neighbors algorithm with given training images. Implemented in Python."
              link="https://github.com/bhaleraoyash/HOG-Feature-Descriptor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="COVID-19 Donation Portal"
              description="Donation portal for donation of grocery kits to COVID-19 patients admitted to government hospitals. Salesforce site implemented in Apex and Javascript using Lightning Web and Aura component frameworks."
              link="www.cloudwerxcares.com"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={canny}
              isBlog={false}
              title="Canny Edge Detector"
              description="Detect edges in images using the Canny Edge Detection algorithm. Implemented in Python from scratch without using OpenCV."
              link="https://github.com/bhaleraoyash/Canny-Edge-Detector"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={depression}
              isBlog={false}
              title="Detecting Symptoms of Depression"
              description="Predict percentage of depression in text input using Deep Learning and Natural Language Processing. Implemented a deep learning model using TensorFlow and Recurrent Neural Networks in Python."
              link="www.detectdepression.com"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
