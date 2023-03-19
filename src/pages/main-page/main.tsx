import ProductCard from "../../components/card/card";
import { myProducts } from "../../data-example";
import "./style.sass";

export default function Main() {
  return (
    <div className="about">
      <p>here shoud be cards and serch</p>
      <ProductCard products={myProducts}/>
    </div>
  );
}
