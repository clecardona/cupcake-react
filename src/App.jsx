import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MyJSON from "./data/products.json";
import Product from './components/Product';

export default function App() {

  const CupcakesArray = MyJSON.filter(item=> item.type === "cupcake").map(item => {
    return <Product 
    key={item.id} 
    title={item.title}
    fileName={item.fileName}
    price={item.price}
    type={item.type}
    />}
  );
  const WedCakesArray = MyJSON.filter(item=> item.type === "wedcake").map(item => {
    return <Product 
    key={item.id} 
    title={item.title}
    fileName={item.fileName}
    price={item.price}
    type={item.type}   
    />}
  );


// This part will be displayed on the screen // 
  return (
    <div className="App">


        <Header />

        <h1>- Our creations -</h1>  
        <h2>Cupcakes</h2>

        <div>
            <section>
              {CupcakesArray}
            </section>
        </div>

        <h2>Wedding cakes</h2>

        <div>
            <section>
              {WedCakesArray}
            </section>
        </div>

        <Footer/>
        
    </div>
  );
}


