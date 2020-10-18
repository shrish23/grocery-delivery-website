import React from "react";

import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import Product from "./Product";

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://static.toiimg.com/thumb/72975551.cms?width=250&height=250&imgsize=881"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://www.bigbasket.com/media/uploads/p/s/104860_6-amul-butter-pasteurised.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://www.bigbasket.com/media/uploads/p/s/10000370_13-fresho-guava.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="home_row">
        <Product
          id="885496"
          title="Kashmiri Apples"
          price={100}
          image="https://images-na.ssl-images-amazon.com/images/I/319J7YpfyNL.jpg"
          rating={4}
        />
        <Product
          id="885496"
          title="Sunflower Refined Oil"
          price={122}
          image="https://www.bigbasket.com/media/uploads/p/s/274145_10-fortune-sunflower-refined-oil.jpg"
          rating={3}
        />
        <Product
          id="86391"
          title="Amul Butter- Pasturised"
          price={47.52}
          image="https://www.bigbasket.com/media/uploads/p/s/104860_6-amul-butter-pasteurised.jpg"
          rating={5}
        />
        <Product
          id="877452"
          title="Guava"
          price={58.42}
          image="https://www.bigbasket.com/media/uploads/p/s/10000370_13-fresho-guava.jpg"
          rating={4}
        />
      </div>

      <div className="home_row">
        <Product
          id="877452"
          title="Pear- Nakh,Indian"
          price={158}
          image="https://www.bigbasket.com/media/uploads/p/mm/30001460_2-fresho-pear-nakh-indian.jpg"
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
