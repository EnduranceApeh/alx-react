import React from "react"
import logo from "../assets/holberton-logo.jpg";
import {Stylesheet, css} from 'aphrodite'

function Header() {
    return(
        <div className={css(styles["App-header"])}>
        <img src={logo} className={css(styles.img)} alt="logo" />
        <h1>School dashboard</h1>
      </div>
    )
}

const styles = Stylesheet.create({
  "App-header": {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
  },

  img: {
    width: "200px",
    height: "200px",
  },
})
export default Header