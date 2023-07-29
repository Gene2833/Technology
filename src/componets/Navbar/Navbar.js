import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () =>{
    return(
        <div>
              <header>
            <div className="logo">
        <img src="\images\Group 23.png"  alt="logo"/>
                    <h1>Technologycal</h1>
            </div>
                <nav className="menu">
                    <ul>
                      <li><Link style={{textDecoration: "none", color: "black"}}>Home</Link> </li>
                        <li><Link style={{textDecoration: "none", color: "black"}}> feactures</Link></li>
                       <li><Link style={{textDecoration: "none", color: "black"}}> Resources</Link></li>
                       <li><Link style={{textDecoration: "none", color: "black"}}>Pricing</Link></li>
                       <li> <Link to={`/Blog`} style={{textDecoration: "none", color: "black"}}>Blog</Link></li>
                </ul>
                </nav>    
            <div>
                <img className="logo-carrito" src=".\images\Cart Icon.svg" alt="logocarrito"/>
                    <button>Sign In</button>
            </div>
    </header>
        </div>
    )
}

export default Navbar