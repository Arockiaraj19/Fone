import type { NextPage } from "next";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent1 from "../components/frame-component1";

import Header from "../components/header";
import { InfiniteMovingCards } from "../components/infinit_moving_card";

import Slider from "../components/slider";

import FAQMainComponent from "../components/faq_main_component";
import FooterSection from "../components/footer_section";

const Homepage: NextPage = () => {
  return (
    <>
      <div className="w-full relative bg-white  flex flex-col items-start justify-start pt-0 px-0 box-border leading-[normal] tracking-[normal]">
        <Header />
        <Slider slides={[1, 2, 3]} />

        <FrameComponent3 />
        <FrameComponent1 />
        <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-16 pr-5  box-border max-w-full text-center text-45xl text-new-1f font-poppins">
          <h1 className="m-0 w-[1126px] relative text-inherit tracking-[-0.06em] leading-[70px] font-medium font-inherit flex items-center justify-center shrink-0 max-w-full mq800:text-32xl mq800:leading-[56px] mq450:text-19xl mq450:leading-[42px]">
            Testimonials
          </h1>
        </section>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <FAQMainComponent />

        <FooterSection />
      </div>
    </>
  );
};

export default Homepage;

const testimonials = [
  {
    quote:
      "I was skeptical about buying a pre-owned iPhone at first, but my experience with Fone Garage completely changed my mind. The phone looks and works like new, and the price was unbeatable. Customer service was excellent, and I appreciate the warranty that gives me peace of mind. Highly recommend!",
    name: "John D",
  },
  {
    quote:
      "Upgrading to the latest model was not in my budget, so I opted for a pre-owned iPhone from Fone Garage. The phone arrived in perfect condition, and I've had no issues since. It’s been a great experience, and I’ll definitely return for future purchases!",
    name: "Sarah L",
  },
  {
    quote:
      "I needed a reliable phone for my teenage daughter without breaking the bank. Fone Garage provided a fantastic pre-owned iPhone that looks brand new. She’s thrilled with it, and I’m happy knowing I got a great deal. Thank you for making technology affordable!",
    name: "David R",
  },
  {
    quote:
      "Fone Garage has the best selection of pre-owned iPhones I’ve seen. The buying process was smooth, and the staff was incredibly knowledgeable and helpful. My phone works flawlessly, and I couldn’t be happier with my purchase. Two thumbs up!",
    name: "Emily S",
  },
  {
    quote:
      "After researching various options, I chose Fone Garage for their reputation and customer reviews. The pre-owned iPhone I bought exceeded my expectations in terms of quality and performance. Plus, their customer support team was quick to answer all my questions. I will definitely be a repeat customer",
    name: "Michael T",
  },
  {
    quote:
      "I needed a second phone for work and didn’t want to spend a fortune. The pre-owned iPhone from Fone Garage was the perfect solution. It was in mint condition and performs just like a new one. Great value for money and excellent customer service!",
    name: "Lisa K",
  },
  {
    quote:
      "Buying a pre-owned iPhone from Fone Garage was one of the best decisions I’ve made. The phone is practically new, with no scratches or defects, and the price was very reasonable. The entire experience from purchase to delivery was seamless. Highly recommend to anyone looking for a quality pre-owned phone.",
    name: "Robert A",
  },
  {
    quote:
      "I was hesitant to buy a pre-owned phone, but Fone Garage made the process easy and trustworthy. The phone came with a warranty, and it’s been working perfectly. It’s a great way to save money without sacrificing quality. Very satisfied with my purchase!",
    name: "Karen P",
  },
];

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
];
