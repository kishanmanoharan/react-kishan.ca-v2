import React from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import env from "react-dotenv";

export const Contact = () => {
  const [name, setname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [reason, setreason] = React.useState("");
  const [details, setdetails] = React.useState("");

  const [sent, setsent] = React.useState(false);

  const submitForm = () => {
    console.log("Sending email...");

    let message = {
      name: name,
      email: email,
      reason: reason,
      details: details,
    };

    console.log(message);

    emailjs
      .send(
        env.EMAIL_SERVICE_ID,
        env.EMAIL_TEMPLATE_ID,
        message,
        env.EMAIL_PUBLIC_KEY
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setsent(true);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <>
      <Container fluid className="App-header">
        <Container className="title title-pad-1">
          <Row>
            <h2>Contact</h2>
            <h5>You can reach me here!</h5>
          </Row>
        </Container>
        <Container className="title-pad-0">
          <Alert variant="success" show={sent}>
            <Alert.Heading>Message sent!</Alert.Heading>
          </Alert>
          <Form>
            <Row>
              <Col lg={4}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Friendly contact exchange"
                    onChange={(e) => setname(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col lg={4}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="So I can get back to you"
                    onChange={(e) => setemail(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col lg={4}>
                <Form.Group className="mb-3" controlId="formReason">
                  <Form.Label>Reason:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Why you are reaching out"
                    className="grey"
                    onChange={(e) => setreason(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formReason">
                  <Form.Label>Any Details?</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Throw in some details, the more the merrier!"
                    onChange={(e) => setdetails(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  type="button"
                  value="Submit"
                  className="btn btn--submit"
                  onClick={submitForm}
                ></input>
              </Col>
            </Row>
          </Form>
        </Container>
        <Container className="title-pad-0">
          <Row>
            <Col className="p-3 m-2 grey">
              <Row>
                <Col>
                  <h5>Download my contact card (vCard)</h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button href="./vcard.vcf">vCard</Button>
                </Col>
              </Row>
            </Col>
            <Col className="p-3 m-2 grey">
              <Row>
                <Col>
                  <h5>You can also reach out to me through</h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button href="mailto:kishan@kishanm.ca">Email</Button>
                  <Button href="https://github.com/kishanmanoharan">
                    GitHub
                  </Button>
                  <Button href="https://www.linkedin.com/in/kishan-manoharan-333464195/">
                    LinkedIn
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
