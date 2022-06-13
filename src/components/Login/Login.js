import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { auth, signInWithEmailAndPassword } from "../../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import "../../styles/Login.css"
import { getAuth } from "firebase/auth"

function Login() {
  const auth = getAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, loading, error] = useAuthState(auth)
  const [val, setVal] = useState()
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return
    }
  }, [user, loading])
  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() =>
            signInWithEmailAndPassword(auth, email, password)
              .then(() => {
                alert("You are logged in!")
              })
              .catch((error) => {
                console.log(error.message)
              })
          }
        >
          Login
        </button>

        <div>
          Don't have an account? <Link to="/signup">Register</Link> now.
        </div>
      </div>
    </div>
  )
}
export default Login
