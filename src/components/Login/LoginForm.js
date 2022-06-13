import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import style from "../../styles/Login.module.css"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function validateForm() {
    return email.length > 0 && password.length > 0
  }

  function handleSubmit(event) {
    
    event.preventDefault()
  }

  return (
    <div class={style.Container}>
      <div className={style.Login}>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div class={style.button}>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
              Login
            </Button>
          </div>
          <hr></hr>
          <div class={style.or}>
            <h5>Or</h5>
          </div>

          <div class={style.createButton}>
            <Button block size="lg" type="submit">
              Create Account
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
