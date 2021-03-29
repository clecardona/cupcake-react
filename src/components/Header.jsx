import Nav from './Nav';


export default function Header(){
    
    const logoMunamiiURL= require('../assets/img/logo/cake.jpeg').default;
     


    return(     
        <header>

       <div className= "nav-container">
         <img className="logo" src= {logoMunamiiURL} alt="logo"/>

         <div><Nav/></div>

         <p>Munamii<br/> Cakery</p>

       </div>
       

     </header>
        






        
    )
}