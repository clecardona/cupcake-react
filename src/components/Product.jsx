

export default function Product({ title, fileName, price,type } ){
    
    const imageObject = require('../assets/img/' + fileName);
    const imageURL = imageObject.default;

    return(        
        <article>
        
        <img src={imageURL} alt={title} className={type} />  
        <h3>{title}</h3>
        <h3>{price} SEK </h3>    
        
        </article>
    )
}
