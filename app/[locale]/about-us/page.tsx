"use client";

import Banner from "./_components/banner";
import Definition from "./_components/definition";
import Locations from "./_components/locations";
import News from "./_components/news";

export default function AboutUs() {
  return (
    <div className="w-full">
      <Banner />
      <Definition />
      <News />
      <Locations />
    </div>
  );
}
