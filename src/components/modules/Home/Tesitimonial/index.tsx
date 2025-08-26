// app/components/Testimonials.tsx
"use client";

import { Star, StarHalf, Instagram } from "lucide-react";
import image1 from "../../../../assets/Rezension_1.jpg";
import image2 from "../../../../assets/Rezension_2.jpg";
import image3 from "../../../../assets/Rezension_4.jpg";
import image4 from "../../../../assets/Rezension_5.jpg";
import image5 from "../../../../assets/Rezension_6.jpg";
import Image from "next/image";

// 👇 add slick-carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Review = {
  name: string;
  username: string;
  review: string;
  avatar: any;
  rating: number;
};

const reviews: Review[] = [
  {
    name: "August V.",
    username: "artikoll99",
    review:
      "Falls eure Heizung Wasser verliert, dann ruft hier an! Der Monteur hat alles zu unserer vollsten Zufriedenheit geregelt und dank seines Einsatzes konnte Schlimmeres verhindert werden. Wir haben Ihre Rufnummer für den Fall der Fälle abgespeichert.",
    avatar: image1,
    rating: 5,
  },
  {
    name: "Mané L.",
    username: "lovenbeauty",
    review:
      "Ich war positiv überrascht, dass man mir nachts um 3 mit meiner Problemheizung hilft. Sie machte Geräusche und wurde schon länger nicht mehr richtig warm. Doch als der Heizungsmann da war, wird jedes Zimmer wieder warm und wir können nachts gut schlafen.",
    avatar: image2,
    rating: 5,
  },
  {
    name: "Klaus Sch.",
    username: "klaus.schambeck",
    review:
      "Wollte mich für die schnelle Hilfe für die Reparatur meiner Heizung bedanken. Ihr Techniker war sehr nett, schnell und kompetent. Alles bestens. Vielen lieben Dank…",
    avatar: image3,
    rating: 4.5,
  },
  {
    name: "Klaus Sch.",
    username: "klaus.schambeck",
    review:
      "Wollte mich für die schnelle Hilfe für die Reparatur meiner Heizung bedanken. Ihr Techniker war sehr nett, schnell und kompetent. Alles bestens. Vielen lieben Dank…",
    avatar: image4,
    rating: 4.5,
  },
  {
    name: "Klaus Sch.",
    username: "klaus.schambeck",
    review:
      "Wollte mich für die schnelle Hilfe für die Reparatur meiner Heizung bedanken. Ihr Techniker war sehr nett, schnell und kompetent. Alles bestens. Vielen lieben Dank…",
    avatar: image5,
    rating: 4.5,
  },
];

function Stars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return (
    <div className="flex items-center text-orange-500">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
      ))}
      {hasHalf && (
        <StarHalf className="w-4 h-4 fill-orange-500 text-orange-500" />
      )}
    </div>
  );
}

export default function Testimonials() {
  // 👇 slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-orange-500 text-sm font-medium mb-2 border-b-2 border-orange-500 inline-block pb-1">
            Berwertungen
          </div>
          <div className="flex justify-between ">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
              Das sagen unsere Kunden
            </h1>
          </div>
        </div>

        {/* 👇 Replaced grid with slider */}
        <Slider {...settings}>
          {reviews.map((r, index) => (
            <div key={index} className="px-3">
              <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
                {/* Top Part */}
                <div className="flex items-center justify-between p-4 bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={r.avatar}
                      alt={r.name}
                      width={48}
                      height={48}
                      className="size-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{r.name}</h4>
                      <Stars rating={r.rating} />
                      <p className="text-sm text-gray-500">@{r.username}</p>
                    </div>
                  </div>
                  <Instagram className="w-5 h-5 text-gray-400" />
                </div>

                {/* Review Text */}
                <div className="p-4 bg-gray-100 h-[180px]">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {r.review}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
