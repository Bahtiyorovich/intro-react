
import Button from './../../FORM-UI/button/button';
const Product = ({product}) => {
  return (
    <div 
      data-aos="fade-down"
      data-aos-duration="1000"
      key={product.title} className="bg-white rounded-lg shadow-lg h-[410px] duration-300 hover:scale-105 hover:shadow-2xl ">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[80%] object-contain duration-300 hover:h-[75%]"
      />
      <h3 className="text-xl font-bold p-2">{product.title}</h3>
      <div className="flex items-center justify-between px-4">
        <Button className={'bg-green-500 text-white px-3 rounded-full'} type={'button'} children={'Buy'}/>
        <p className="text-sm bg-green-300 px-2 rounded-full">
          <span className="text-white font-semibold">
            {product.sale.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
          <span className='line-through mx-2 text-red-600'>
            {product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Product;
