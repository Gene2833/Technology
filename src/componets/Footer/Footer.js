import "./Footer.css"
const Footer = () =>{
    return(
    
       <footer>
        <div className="barra-footer"></div>
        <div className="logo-footer">
        <img src="\images\Group 23.png" alt="logo"/>
        <h1>Technologycal</h1> 
         <h5> See our Case Studies</h5>
        </div>
      <div className="barra-footer1"></div>
        <div className="column-footer">


        <div className="list1">
        <h2> Resources</h2>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Blog Post</li>
        <li>Pricing</li>
        <li>Pricing Singles</li>
            </div>
        <div className="list2">
            <li>Blog</li>
            <li>Blog Post</li>
            <li>Careers</li>
            <li>Why choose us</li>
            <li>Case studies</li>
        </div>
        <div className="list3">
            <h3>Utility Pages</h3>
            <li>Start here</li>
            <li>Style guide</li>
            <li> Password protected </li>
            <li>404 Not found</li>
            <li>Licenses</li>
            <li>Changelog</li>
            <div className="barra-footer2"></div>
        </div>

         <div className="container-popular" >
            <img src="./images/popular.jpeg" alt="img" />
            <h2>Startup</h2>
            <h3> $25</h3>
            <h5>Choose Plan</h5>
            <div className="barra-footer3"></div>
            <div className="list4">
                <li> ✅ 3 Social set</li>
                <li> ✅ 150 posts per social</li>
                <li> ✅ 5 users</li>
                <li> ✅ Phone Support</li>
                <li> ✅Planning & publishing</li>
                <li> ✅Analytics tools</li>
                 <img src="./images/logos-redes-copy.jpeg" alt="img"/>
                
            </div>
           <p> Copyright © Technologycal | Designed by VictorFlow Templates - Powered by Webflow</p>
         <div className="barra-footer5"></div>
        </div>
           
        </div>
    
       
       </footer>
  
    )
}


export default Footer