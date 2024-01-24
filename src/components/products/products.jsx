import { useEffect } from "react";
import { products } from "../../constants/data"
import Product from "./product"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Products = () => {
  
  useEffect(()=> {
    AOS.init();
  }, [])


  return (
    <div className="w-full min-h-[100vh] p-20">
      <div 
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <h1 className="text-4xl font-bold my-4">Our Vagetables</h1>
        <p>
          All Products
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 py-20">
          {products.map(item => (
            <Product product={item} key={item.title}/>
          ))}
      </div>
    </div>
  )
}

export default Products