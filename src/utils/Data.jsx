import slideImg1 from "../assets/slider/slider-1.png";
import slideImg2 from "../assets/slider/slider-2.png";
import slideImg3 from "../assets/slider/slider-3.png";

import galleryImg1 from "../assets/gallery/gallery-1.jpg";
import galleryImg2 from "../assets/gallery/gallery-2.jpg";
import galleryImg3 from "../assets/gallery/gallery-3.jpg";
import galleryImg4 from "../assets/gallery/gallery-4.jpg";
import galleryImg5 from "../assets/gallery/gallery-5.jpg";
import galleryImg6 from "../assets/gallery/gallery-6.jpg";

import testimonialImg1 from "../assets/testimonial/testimonial-1.jpg";
import testimonialImg2 from "../assets/testimonial/testimonial-2.jpg";
import testimonialImg3 from "../assets/testimonial/testimonial-3.jpg";
import testimonialImg4 from "../assets/testimonial/testimonial-4.jpg";

import menuImg1 from "../assets/menu/menu-1.jpg";
import menuImg2 from "../assets/menu/menu-2.jpg";
import menuImg3 from "../assets/menu/menu-3.jpg";
import menuImg4 from "../assets/menu/menu-4.jpg";
import menuImg5 from "../assets/menu/menu-5.jpg";
import menuImg6 from "../assets/menu/menu-6.jpg";
import menuImg7 from "../assets/menu/menu-7.jpg";
import menuImg8 from "../assets/menu/menu-8.jpg";
import { IoFastFoodSharp } from "react-icons/io5";
import { GiChefToque, GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineMenuBook } from "react-icons/md";

export const navLinks = ["home", "about", "menu", "gallery", "testimonials"];

export const homeSlide = [
  {
    img: slideImg1,
    title: "Craving <span> Flavor ?<br /> Dive Into </span> Deliciousness",
    description:
      "Satisfy your taste buds with bold bites and unforgettable flavors.",
  },

  {
    img: slideImg2,
    title: "Every <span> Bite Brings </span> <br /> Pure Joy",
    description:
      "Turn every mealtime into a moment of happiness.",
  },

  {
    img: slideImg3,
    title: "Taste <span> Magic Like </span> <br />Never Before",
    description:
      "Experience a sprinkle of culinary wonder in every bite.",
  },
];

export const featureItem = [

  {
    id: 1,
    icon: <IoFastFoodSharp />,
    title: "Irresistibly Fresh. Undeniably Delicious.",
    description:
      "At Urban Bite, every dish is crafted with the freshest ingredients and boldest flavors. From sizzling starters to hearty mains, our meals are made to satisfy your cravings and awaken your taste buds. Get ready for a dining experience that's vibrant, tasty, and made with love—just the way it should be.",
  },

  {
    id: 2,
    icon: <GiChefToque />,
    title: "Passion-Powered, Expert-Perfected",
    description:
      "At Urban Bite, every meal is a masterpiece—handcrafted by our experienced chef with a passion for perfection. We blend farm-fresh ingredients with years of culinary expertise to serve you dishes that are not just fresh and tasty, but unforgettable. Come hungry, leave happy.",
  },

  {
    id: 3,
    icon: <GiTakeMyMoney />,
    title: "Gourmet Taste. Everyday Price.",
    description:
      "At Urban Bite, we believe everyone deserves amazing food without the premium price tag. That’s why our experienced chef brings you fresh, flavor-packed meals made with quality ingredients—at prices that keep your wallet as full as your belly. Delicious dining, made affordable.",
  },

  {
    id: 4,
    icon: <MdOutlineMenuBook />,
    title: "Urban Bites of the Day",
    description:
      "At Urban Bite, our experienced chef curates a daily fresh menu filled with vibrant flavors and seasonal ingredients. Whether you're craving something comforting or bold, every dish is made fresh—every single day. Quality food, affordable prices, and a new reason to come back tomorrow.",
  },
];

export const gallery = [
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
  galleryImg6,
];

export const testimonialItem = [
  {
    img: testimonialImg1,
    name: "Niesha Phips",
    description:
      "There are many variations passage available the majority have suffered of the alteration in some form by injected humour or randomised words which look even slightly believable.",
    stars: 4.5,
  },

  {
    img: testimonialImg2,
    name: "Daniel Porter",
    description:
      "There are many variations passage available the majority have suffered of the alteration in some form by injected humour or randomised words which look even slightly believable.",
    stars: 5,
  },

  {
    img: testimonialImg3,
    name: "Ebony Swihart",
    description:
      "There are many variations passage available the majority have suffered of the alteration in some form by injected humour or randomised words which look even slightly believable.",
    stars: 4.8,
  },

  {
    img: testimonialImg4,
    name: "Loreta Jones",
    description:
      "There are many variations passage available the majority have suffered of the alteration in some form by injected humour or randomised words which look even slightly believable.",
    stars: 4.4,
  },
];

export const menu = [
  {
    id: 1,
    img: menuImg1,
    category: "Lunch",
    title: "Roasted Beef",
    description: "It is long established of fact that reader will distracted.",
    price: 50.25,
    reviews: 1600,
    stars: 5,
  },

  {
    id: 2,
    img: menuImg2,
    category: "Dinner",
    title: "Chicken Bread",
    description: "It is long established of fact that reader will distracted.",
    price: 29.65,
    reviews: 1500,
    stars: 4.9,
  },

  {
    id: 3,
    img: menuImg3,
    category: "Dinner",
    title: "Roasted Steak",
    description: "It is long established of fact that reader will distracted.",
    price: 60.35,
    reviews: 1800,
    stars: 4.5,
  },

  {
    id: 4,
    img: menuImg4,
    category: "Lunch",
    title: "Fish Steak",
    description: "It is long established of fact that reader will distracted.",
    price: 40.79,
    reviews: 1300,
    stars: 4.8,
  },

  {
    id: 5,
    img: menuImg5,
    category: "Breakfast",
    title: "Vegetable Salad",
    description: "It is long established of fact that reader will distracted.",
    price: 25.49,
    reviews: 1700,
    stars: 4.4,
  },

  {
    id: 6,
    img: menuImg6,
    category: "Fast Food",
    title: "Daily Fastfood",
    description: "It is long established of fact that reader will distracted.",
    price: 45.19,
    reviews: 1900,
    stars: 4.5,
  },

  {
    id: 7,
    img: menuImg7,
    category: "Lunch",
    title: "Fresh Seafood",
    description: "It is long established of fact that reader will distracted.",
    price: 69.25,
    reviews: 1400,
    stars: 4.4,
  },

  {
    id: 8,
    img: menuImg8,
    category: "Dessert",
    title: "Chocolate Shake",
    description: "It is long established of fact that reader will distracted.",
    price: 35.62,
    reviews: 1200,
    stars: 5.0,
  },
];

export const footerLinks = ["about", "menu", "testimonials"];
