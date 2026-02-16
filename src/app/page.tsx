import Categories from "../components/homepage/Categories ";
import HeroBanner from "../components/homepage/HeroBanner";
import ProductCarousel from "../components/homepage/Product";
import Testimonials from "../components/homepage/Testimonial";



export default function Home() {
  return (
    <div className="">
     
      <HeroBanner/>
      <Categories/>
      <ProductCarousel/>
      <Testimonials/>
      
     
    </div>
  );
}
