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
<Header/> 
  <Slider slides={[1,2,3]}/>


   <FrameComponent3 />
      <FrameComponent1 />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-16 pr-5  box-border max-w-full text-center text-45xl text-new-1f font-poppins">
        <h1 className="m-0 w-[1126px] relative text-inherit tracking-[-0.06em] leading-[70px] font-medium font-inherit flex items-center justify-center shrink-0 max-w-full mq800:text-32xl mq800:leading-[56px] mq450:text-19xl mq450:leading-[42px]">
          Testimonials
        </h1>
      </section> 
      <InfiniteMovingCards    items={testimonials}
        direction="right"
        speed="slow"/>
 <FAQMainComponent/>



   <FooterSection/>
    </div>
    </>
  );
};

export default Homepage;


const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
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
  }
];

