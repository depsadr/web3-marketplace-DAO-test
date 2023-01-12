import css from "./Product.css";
import Card from "./Card.js";
import WBCC from "../logo.svg";

function Product(props) {

    return (
        <div>
            <main>
                <section className="cards">

                    <Card name="test" imageURL={WBCC} description="asdf adsf asdf asdf safd asfd asfd" />

                    <Card name="Item2" imageURL={WBCC} description="asdf adsf asdf asdf safd asfd asfd" />
                    <Card name="Item3" imageURL={WBCC} description="asdf adsf asdf asdf safd asfd asfd" />

                </section>

            </main>

        </div>
    );
}

export default Product;