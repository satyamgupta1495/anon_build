import React from "react"
import ImageUploader from "react-images-upload"
// import Recorder from "./Recorder";
import { Container } from "react-bootstrap"
import styles from "../styles/Tipoff.module.css"
// import Homepage from "./Homepage";

// import "./App.css";
// import { Axios } from "axios";

class Tipoff extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pictures: [],
      audioDetails: {
        url: null,
        blob: null,
        chunks: null,
        duration: {
          h: 0,
          m: 0,
          s: 0,
        },
      },
    }
    this.onDrop = this.onDrop.bind(this)
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    })
  }
  handleAudioStop(data) {
    console.log(data)
    this.setState({ audioDetails: data })
  }
  handleAudioUpload(file) {
    console.log("file", file)
  }

  handleCountDown(data) {
    console.log(data)
  }

  handleReset() {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0,
      },
    }
    this.setState({ audioDetails: reset })
  }
  renderView() {
    const { view } = this.props
    if (view === "image") {
      return (
        <ImageUploader
          className={styles.imageUpload}
          // style={{ padding: "20px" }}
          withIcon={false}
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
          withLabel={true}
          withPreview={true}
          buttonText="Choose images"
        ></ImageUploader>
      );
    } else {
      return;
    }
  }

  render() {
    const { view } = this.props
    return (
      <>
        <Container className={styles.container}>
          <form onSubmit="submitForm">
            {view === "text" ? (
              <input
                className={styles.textInput}
                placeholder="Enter the text"
              />
            ) : null}
            {this.renderView()}
            {/* image uplaoder */}
            <Container className={styles.btn_container}>
              <button className={styles.submit_button}>Submit Tipoff</button>
            </Container>
          </form>
        </Container>
      </>
    )
  }
}

export default Tipoff
