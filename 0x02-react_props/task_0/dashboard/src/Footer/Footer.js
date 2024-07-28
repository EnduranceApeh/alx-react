import React from 'react'

function Footer() {
    return (
        <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
      </div>
    )
}

export default Footer