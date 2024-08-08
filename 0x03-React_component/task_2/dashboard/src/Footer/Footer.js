import React from "react"
import { getFullYear, getFooterCopy } from "../utils/utils";
import "./Footer.css"

function Footer() {
    <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
    </div>
}

export default Footer