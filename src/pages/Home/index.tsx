import { useEffect, useState } from "react";
import { Card } from "../../components";
import { Layout } from "../../layout";
import styles from "./styles.module.scss";
import { productService } from "../../services/ProductService";
import { Product } from "../../types/Product";

export function Home() {
  const [products, setPorducts] = useState<Product[]>([]);

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
              />
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}
