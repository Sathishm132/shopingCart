import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DummyProduct=[
  {
    title:"book",
    price:100,
    description:"python book is easy learn python",
    id:"p1"

  },
  {
    title:"mobile",
    price:10000,
    description:"it has new features",
    id:"p2"

  }
]
  


const Products = (props) => {
  const products=DummyProduct.map((product)=>(<ul>
    <ProductItem
      key={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
      id={product.id}
    />
  </ul>))
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {products}
    </section>
  );
};

export default Products;
