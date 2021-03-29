export default function Footer(){

  const logoFbURL= require('../assets/img/logo/fb.svg').default;
  const logoIgURL= require('../assets/img/logo/ig.svg').default;
  const logoMailURL= require('../assets/img/logo/mail.png').default;

    return(
        <footer>
  
        <div className="horizontal-line"></div>
        <div className= "footer-container"> 
          <a href= "mailto:softwaredevelopmentacademy@gmail.com"><img src={logoMailURL} alt="mail"/></a>
          <a target= "blank" href= "https://www.instagram.com/munamii.cakery/"><img src={logoIgURL} alt="instagram"/></a>
          <a target= "blank" href= "https://www.facebook.com/pages/category/Product-Service/munamiicakery-648486288964377/"><img src={logoFbURL} alt= "facebook"/></a>
        </div>
      
      </footer>
    )
    
}