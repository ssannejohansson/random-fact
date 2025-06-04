import "../components/window.css"
import API from "../components/api.jsx"

function Window() {


  return (
    <>
    <div className="container" id="slide-in-fwd-bl">
        <div className="top">
            <div className="circles-container">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
            </div>
        </div>
            <section className="window">
                <API/>
            </section>
         </div>
        <footer>
            <p className="footer-text">Background by www.freepik.com</p>
            <p className="footer-text">Icon by www.icon8.com</p>     
        </footer>
   
   
    </>
  )
}

export default Window