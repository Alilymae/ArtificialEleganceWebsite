import React from 'react'
import "./NewsLetter.css"

const NewsLetter = () => {
  return (
    <>
        <div className="newsletter">
            <h1>Subscribe to our Newsletter</h1>
            <div className="newinput">
                <input type="email" placeholder="Email Address"/>
                <button>&#8594;</button>
            </div>
        </div>
    </>
  )
}

export default NewsLetter