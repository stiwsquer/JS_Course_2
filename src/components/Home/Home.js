import React from "react";
import "./style.scss";
import gallery1 from "../../images/gallery-1.2.jpg";
import gallery2 from "../../images/gallery-2.1.jpg";
import gallery3 from "../../images/gallery-3.1.jpg";
import Button from "../Button/Button";

export default function Home(props) {
  return (
    <>
      <section className="home-intro"></section>
      <section className="home-description">
        <h2>
          Trendy Clothing & Accessories at Dress Up - An Online Dress Boutique
        </h2>
        <p>
          DRESS UP IS A WOMEN&apos;S CLOTHING BOUTIQUE CARRYING A VARIETY OF
          FITS, STYLES, AND PATTERNS FOR WOMEN OF ALL AGES, SHAPES, AND SIZES.
          WE OFFER A DIVERSE COLLECTION OF NEW PRODUCTS EVERY SINGLE WEEK,
          INCLUDING YOUR FAVORITE CLOTHING ITEMS: CUTE ROMPERS, MAXI DRESSES,
          KNIT SWEATERS, OVERSIZED TOPS, AND LIGHTWEIGHT CARDIGANS, AS WELL AS
          TRENDY SHOES, ACCESSORIES, JEWELRY, ACTIVEWEAR, LOUNGEWEAR, AND SO
          MUCH MORE. DRESS UP&apos;S TRENDY, YET WEARABLE CLOTHES WILL HAVE YOU
          FEELING LIKE YOUR BEST SELF, NO MATTER WHERE YOU&apos;RE HEADED. YOU
          CAN SHOP WITH US ONLINE OR AT ANY OF OUR RETAIL LOCATIONS ACROSS THE
          SOUTHEAST, INCLUDING STORES IN GEORGIA, ALABAMA, SOUTH CAROLINA, AND
          TENNESSEE. GET FREE SHIPPING ON ALL ORDERS OVER $49, AND FEEL FREE TO
          REACH OUT TO US AT 678.989.2006 WITH ANY QUESTIONS. DON&apos;T MISS
          OUT - COME SEE WHY DRESS UP IS ONE OF THE FASTEST GROWING ONLINE DRESS
          BOUTIQUES IN THE UNITED STATES!{" "}
        </p>
        <Button>SHOP OUR NEWEST ARRIVALS</Button>
      </section>
      <section className="home-gallery">
        <div className="gallery-new-shoes">
          <h2>NEW SHOES</h2>
          <p>
            We just dropped new fall shoe styles, and they are all ON SALE! Shop
            new combat boots, booties, mules, sneakers & more!
          </p>
          <Button>SHOP SHOES</Button>
        </div>
        <div className="gallery-accessories">
          <h2>Accessories</h2>
          <p>
            Take your fall outfit to the next level with new accessories! The
            perfect trendy handbag, dainty gold necklace, coin bracelet or
            statement earrings will upgrade any look.
          </p>
          <Button>SHOP ACCESSORIES</Button>
        </div>
        <img className="gallery1" src={gallery1} />
        <img className="gallery2" src={gallery2} />
        <img className="gallery3" src={gallery3} />
      </section>
    </>
  );
}
