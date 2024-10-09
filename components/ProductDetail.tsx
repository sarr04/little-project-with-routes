import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const params = useParams();
  console.log(params.productId);
  return (
    <section>
      <h1>product detail</h1>
      <p>{params.product.id}</p>
    </section>
  );
};
export default ProductDetail;
