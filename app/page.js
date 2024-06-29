"use client"
import BannerSlider from "./components/bannerSlider/BannerSlider";
import BergerBanner from "./components/bergerBanner/BergerBanner";
import ImageContent from "./components/imageContent/ImageContent";

export default function Home() {
  return (
        <div>
          <BannerSlider /> 
          <ImageContent /> 
          <BergerBanner /> 
        </div>
  );
}
