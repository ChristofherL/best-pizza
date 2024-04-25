import { useContext, useEffect, useState } from "react";
import { Card } from "../../components";
import { Layout } from "../../layout";
import styles from "./styles.module.scss";
import { productService } from "../../services/ProductService";
import { Product } from "../../types/Product";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

export function Home() {
  const [products, setPorducts] = useState<Product[]>([]);

  const { addProductToCart } = useContext(ShoppingCartContext);

  useEffect(() => {
    (async () => {
      const productsData = await productService.getProducts();
      setPorducts(productsData);
    })();
  }, []);

  return (
    <Layout>
      <div className={styles.container__home}>
        <section>
          <div>
            <h1>
              A <span>Melhor</span> Pizza da Cidade.
            </h1>
            <p>
              Faça seu pedido agora e experiment o sabor autêntico da Itália entregue na sua porta.
            </p>
          </div>
          <img
            src="pizza-delivery-man.jpg"
            alt="pizza delivery man"
          />
        </section>
        <section>
          <h2>Nosso cardápio</h2>
          <ul>
            {products.map((product) => (
              <Card
                key={product.id}
                name={product.name}
                imagePath={product.imagePath}
                price={product.price}
                handleClickAddToCartButton={() => addProductToCart({ ...product, quantity: 1 })}
              />
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}
