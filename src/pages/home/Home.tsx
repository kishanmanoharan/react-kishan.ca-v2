import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Home = () => {
  const draw = {
    hidden: {
      opacity: 1,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
    },
  };

  return (
    <>
      <Container fluid className="App-header">
        <Container className="title title-pad-2">
          <Row className="justify-content-md-center">
            <Col md={8} className="center">
              <motion.svg
                width="100%"
                height="194"
                viewBox="0 0 753 194"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M218 9C219.371 24.0854 228.887 40.9816 233.713 55.3275C242.161 80.4348 251.268 106.096 261.889 130.373C269.855 148.579 277.606 165.872 283.834 184.557"
                  stroke="white"
                  variants={draw}
                  initial="hidden"
                  animate="visible"
                  strokeWidth="14"
                  strokeLinecap="round"
                  transition={{
                    default: { duration: 3, ease: "easeInOut" },
                  }}
                />
                <motion.path
                  d="M306.907 24.0727C286.65 48.3801 264.066 84.5371 275.209 117.27C279.116 128.747 284.007 128.345 295.257 122.146C319.603 108.731 341.685 90.6285 363.258 73.1095C375.422 63.2316 387.283 52.1441 400.645 43.85C404.291 41.5874 411.753 33.0576 411.753 37.3479C411.753 39.722 403.504 45.6583 402.135 47.6429C396.865 55.2853 394.067 64.9238 392.247 73.9222C389.936 85.3496 385.25 107.923 392.247 118.624C398.976 128.916 428.365 124.252 437.491 122.959C460.883 119.644 480.032 112.118 499.532 100.202C506.868 95.7181 490.232 114.781 484.36 121.063C447.312 160.695 569.534 139.119 578.912 137.047C632.477 125.208 685.318 111.216 737.942 95.8669C768.133 87.0612 675.11 92.264 643.662 92.3449C503.196 92.706 362.583 102.603 222.921 117.27C149.606 124.969 77.3827 138.812 9.435 167.932"
                  stroke="white"
                  variants={draw}
                  initial="hidden"
                  animate="visible"
                  strokeWidth="14"
                  strokeLinecap="round"
                  transition={{
                    default: { duration: 3, ease: "easeInOut" },
                  }}
                />
              </motion.svg>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md={8} className="center">
              <h1>Kishan Manoharan</h1>
              <h4>Software Developer (human)</h4>
            </Col>
          </Row>
        </Container>
        <Container className="title title-pad-0 info">
          <Row className="justify-content-md-center">
            <Col md={8} className="center">
              <h5>
                Full-time software developer that designs, develops, and deploys
                web and software applications. I enjoy programming, photography,
                coffee, and other 'human-activities'!
              </h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/projects">
                {" "}
                <Button>My work</Button>
              </Link>
              <Link to="/contact">
                <Button>Contact</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
