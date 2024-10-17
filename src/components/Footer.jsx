import React from 'react'
import garboIcon from '../assets/style/images/GarboLogo.png'; 

const Footer = () => {
  return (
    <div>
   <footer id="join-footer">
  <div className="right">
    <form>
      <span style={{textAlign: 'center'}}>Do you want to join the Garbo? Fill out the form now</span>
      <div className="first">
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Phone Number" />
      </div>
      <textarea placeholder="Tell us how you'd like to contribute..." defaultValue={""} />
      <div className="submit-container">
        <input type="submit" id="sbt-btn" defaultValue="Join us" style={{color: 'black'}} />
      </div>
    </form>
  </div>
  <div className="left">
    <div className="logo-2">
      <img src={garboIcon} alt="GARBO-icon" className="icon" width={65} height={65} />
      <span style={{marginLeft: '-5px'}}>GARBO</span>
    </div>
    <div className="contact-icons">
      <i className="fa-brands fa-facebook" />
      <i className="fa-brands fa-instagram" />
      <i className="fa-brands fa-linkedin" />
    </div>
    <span className="contact">+994 99 721 20 05<br />
      info@garbo.com</span>
    <div className="copright">© 2024 | from Azerbaijan</div>
  </div>
</footer>

    </div>
  )
}

export default Footer