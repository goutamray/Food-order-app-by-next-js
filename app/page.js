"use client"
import BannerSlider from "./components/bannerSlider/BannerSlider";
import BergerBanner from "./components/bergerBanner/BergerBanner";
import ImageContent from "./components/imageContent/ImageContent";
import Product from "./components/product/Product";

export default function Home() {
  return (
        <div>
          <BannerSlider /> 
          <ImageContent /> 
          <BergerBanner /> 
          <Product /> 
          
        </div>
  );
}
