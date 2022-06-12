import React from "react"
import { CardGroup, Card } from "react-bootstrap"
import styles from "../styles/About.module.css"
import { Link } from "react-router-dom"
import logo1 from "../asset/official_logo/logo1 (1).jpeg"
import logo2 from "../asset/official_logo/logo1 (2).jpeg"
import logo3 from "../asset/official_logo/logo1 (3).jpeg"
import logo4 from "../asset/official_logo/logo1 (4).jpeg"

function About() {
  return (
    <>
      <CardGroup className={styles.card}>
        <Card className={styles.card_wrapper} text="dark">
          <Card.Img className={styles.card_image} variant="top" src={logo1} />
          <Card.Body>
            <hr />
            <Card.Text>
              Email :- xxxxxx@gov.in <br /> Call :- +91-xxxxxxxxxx
            </Card.Text>
          </Card.Body>
          <Card.Footer className={styles.card_footer}></Card.Footer>
        </Card>
        <Card className={styles.card_wrapper} text="dark">
          <Card.Img className={styles.card_image} variant="top" src={logo2} />
          <Card.Body>
            <hr />
            <Card.Text>
              Email :- xxxxxx@gov.in <br /> Call :- +91-xxxxxxxxxx
            </Card.Text>
          </Card.Body>
          <Card.Footer className={styles.card_footer}></Card.Footer>
        </Card>
        <Card className={styles.card_wrapper} text="dark">
          <Card.Img className={styles.card_image} variant="top" src={logo3} />
          <Card.Body>
            <hr />
            <Card.Text>
              Email :- xxxxxx@gov.in <br /> Call :- +91-xxxxxxxxxx
            </Card.Text>
          </Card.Body>
          <Card.Footer className={styles.card_footer}></Card.Footer>
        </Card>
        <Card className={styles.card_wrapper} text="dark">
          <Card.Img className={styles.card_image} variant="top" src={logo4} />

          <Card.Body>
            <hr />
            <Card.Text>
              Email :- xxxxxx@gov.in <br /> Call :- +91-xxxxxxxxxx
            </Card.Text>
          </Card.Body>
          <Card.Footer className={styles.card_footer}></Card.Footer>
        </Card>
      </CardGroup>
    </>
  )
}

export default About
