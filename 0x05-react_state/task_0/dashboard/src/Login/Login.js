import React from "react";
import {Stylesheet, css} from 'aphrodite';

function Login() {
    return(
      <>
        <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input className={css(styles.input)} type="email" name="email"></input>
          <label htmlFor="password">Password:</label>
          <input className={css(styles.input)} type="password" name="password"></input>
          <button>OK</button>
        </form>
      </div>
      </>
    )
}

const styles = Stylesheet.create({
  "App-body": {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",
  },

  input: {
    margin: "10px",
  },
})
export default Login