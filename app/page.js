"use client"
import BannerSlider from "./components/bannerSlider/BannerSlider";
import BergerBanner from "./components/bergerBanner/BergerBanner";
import ImageContent from "./components/imageContent/ImageContent";
import Product from "./components/product/Product";
import ProductFilter from "./components/productFilter/ProductFilter";
import PromoBanner from "./components/promoBanner/PromoBanner";

export default function Home() {
  return (
        <div>
          <BannerSlider /> 
          <ImageContent /> 
          <BergerBanner /> 
          <Product /> 
          <PromoBanner /> 
          <ProductFilter /> 

        </div>
  );
}
