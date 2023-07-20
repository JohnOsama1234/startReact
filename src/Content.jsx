import React from 'react'

export default function Content() {
  return (
    <>
    <header className="masthead text-white text-center vh-100 ">
        <div className="container cont-masthead d-flex align-items-center flex-column">
            <img className="masthead-avatar h-25 w-25" src="./img/avataaars.svg" alt="" />
            <h1 className="masthead-heading mb-0 ">Start React</h1>
            <div className="divider-custom divider-light mt-2">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            <p className="masthead-subheading font-weight-light mt-3">Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </header>

    </>
  )
}
