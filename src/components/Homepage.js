/* eslint-disable jsx-a11y/no-distracting-elements */
import { Row, Col, Container, Card } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Container fluid className={styles.card_container}>
        {/* <marquee>
          देश की सुरक्षा आपके हाथ में, आपकी सुरक्षा हमारा कर्त्तव्य
        </marquee> */}
        <Row>
          <Col>
            <Card className={styles.card_body}>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body>
                <Card.Title>YOU HELP THE NATION WE WILL PROTECT YOU</Card.Title>
                <hr />
                <Card.Text>
                  Everybody has a right to feel and stay safe, and it is a
                  collective responsibility for citizens to be the eyes and ears
                  of local law enforcement. This website is designed to
                  contribute to the security nationwide. In Todays world where
                  criminal activities happens quite offen and people witnessing
                  it wants to report it without getting involved in police or
                  court cases. nstead of forcing people to identify themselves
                  as part of providing a tip-off might lead to missing out on a
                  lot of useful information, therefore we assure you the
                  security of your identity.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className={styles.card_body}>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body>
                <Card.Title>NOBODY WILL KNOW YOU HELPED US</Card.Title>
                <hr />
                <Card.Text>
                  <p>
                    {" "}
                    ~ We are not capturing any of your personal details such as
                    name, mobile number, email id, address.{" "}
                  </p>
                  <p>
                    {" "}
                    ~ Your computer and mobile phone IP adresses cannot be
                    tracked or saved
                  </p>
                  <p>~ Hence your identity remains annonymous.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Container
          fluid
          style={{
            // backgroundColor: "yellow",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to={"/tipoff"}
          >
            <button className={styles.submit_button}>Submit Tipoff</button>
          </Link>

          {/* <button className={styles.submit_button}>Submit Tipoff</button> */}
        </Container>
        <Row>
          <Col>
            <Card className={styles.card_body}>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body>
                <Card.Title>WE ARE NOT POLICE OFFICIALS</Card.Title>

                <hr />
                <Card.Text>
                  <p>
                    {" "}
                    ~ We are an independent platform working to help
                    communitites.
                  </p>
                  <p>
                    {" "}
                    ~ We will pass all the Captured information to the
                    Officials.
                  </p>
                  <p>
                    {" "}
                    ~ We will pass all the Captured information to the
                    Officials.
                  </p>
                  <p>~ Hence your help matters.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className={styles.card_body}>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body>
                <Card.Title>WE ARE NOT POLICE OFFICIALS</Card.Title>
                <hr />
                <Card.Text>
                  <p>
                    {" "}
                    ~ We are an independent platform working to help
                    communitites.
                  </p>
                  <p>
                    {" "}
                    ~ We will pass all the Captured information to the
                    Officials.
                  </p>
                  <p>
                    {" "}
                    ~ We will pass all the Captured information to the
                    Officials.
                  </p>
                  <p>~ Hence your help matters.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
