import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import text from "../asset/img/text.svg";
import audio from "../asset/img/audio.svg";
import image from "../asset/img/image.svg";

function Home() {
  return (
    <CardGroup className={styles.card}>
      <Card className={styles.card_wrapper} bg="success" text="dark">
        <Card.Img className={styles.card_image} variant="top" src={text} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer className={styles.card_footer}>
          <Button className={styles.button_size} variant="primary">
            TEXT
          </Button>
        </Card.Footer>
      </Card>
      <Card className={styles.card_wrapper} bg="success" text="dark">
        <Card.Img className={styles.card_image} variant="top" src={audio} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer className={styles.card_footer}>
          <Button className={styles.button_size} variant="primary">
            AUDIO
          </Button>
        </Card.Footer>
      </Card>
      <Card className={styles.card_wrapper} bg="success" text="dark">
        <Card.Img className={styles.card_image} variant="top" src={image} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer className={styles.card_footer}>
          <Button className={styles.button_size} variant="primary">
            IMAGE
          </Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Home;
