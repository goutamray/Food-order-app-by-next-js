
"use client"
import Banner from "./components/banner/Banner";
import BannerSlider from "./components/bannerSlider/BannerSlider";
import BergerBanner from "./components/bergerBanner/BergerBanner";
import BestOffer from "./components/bestOffer/BestOffer";
import Blog from "./components/blog/Blog";
import DownloadBtn from "./components/downloadBtn/DownloadBtn";
import ImageContent from "./components/imageContent/ImageContent";
import LogoCarousel from "./components/logoCarousel/LogoCarousel";
import PriceBurger from "./components/product/PriceBurger";
import Product from "./components/product/Product";
import ProductFilter from "./components/productFilter/ProductFilter";
import PromoBanner from "./components/promoBanner/PromoBanner";
import Testimonial from "./components/testimonial/Testimonial";

export default function Home() {
  return (
        <div>
          <BannerSlider /> 
          <ImageContent /> 
          <BergerBanner /> 
          <Product /> 
          <PromoBanner /> 
          <ProductFilter /> 
          <Testimonial />
          <PriceBurger /> 
          <Banner />
          <BestOffer />
          <DownloadBtn />
          <LogoCarousel /> 
          <Blog />
        </div>
  );
}
