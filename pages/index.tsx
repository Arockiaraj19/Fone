import type { NextPage } from "next";

import MainComponent from "../components/home_main_component";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import SeparatorContainer from "../components/separator-container";
import SellButtonContainer from "../components/sell-button-container";
import NewsletterContent from "../components/newsletter-content";
import Footer from "../components/footer";
import Header from "../components/header";
import { InfiniteMovingCards } from "../components/infinit_moving_card";
import { HoverEffect } from "../components/card-hover-effect";
import Slider from "../components/slider";


const Homepage: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[64.3px] box-border leading-[normal] tracking-[normal]">
      <Header/>
      <Slider slides={[1,2,3]}/>
    
      <div className="max-w-5xl mx-auto px-8">
     
    </div>
      <FrameComponent3 />
      <FrameComponent1 />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-16 pr-5 pl-[26px] box-border max-w-full text-center text-45xl text-new-1f font-poppins">
        <h1 className="m-0 w-[1126px] relative text-inherit tracking-[-0.06em] leading-[70px] font-medium font-inherit flex items-center justify-center shrink-0 max-w-full mq800:text-32xl mq800:leading-[56px] mq450:text-19xl mq450:leading-[42px]">
          Testimonials
        </h1>
      </section>
      <InfiniteMovingCards    items={testimonials}
        direction="right"
        speed="slow"/>
      <section className="flex flex-row items-start justify-start pt-0 px-0 pb-16 box-border max-w-full text-left text-45xl text-new-1f font-poppins mq1125:pb-[42px] mq1125:box-border mq450:pb-[27px] mq450:box-border">
        <div className="w-[1600px] bg-ghostwhite flex flex-col items-start justify-start py-[120px] pr-0 pl-60 box-border gap-[20.5px] max-w-full mq800:pl-[60px] mq800:box-border mq1125:pt-[78px] mq1125:pb-[78px] mq1125:box-border mq450:pl-5 mq450:pt-[51px] mq450:pb-[51px] mq450:box-border mq1350:pl-[120px] mq1350:box-border">
          <div className="w-[1140px] flex flex-row flex-wrap items-end justify-start py-0 pr-5 pl-0 box-border gap-[10px] max-w-full">
            <h1 className="m-0 w-[542px] relative text-inherit tracking-[-0.06em] leading-[70px] font-medium font-inherit flex items-center shrink-0 max-w-full mq800:text-32xl mq800:leading-[56px] mq450:text-19xl mq450:leading-[42px]">
              FAQs
            </h1>
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[2.5px] box-border min-w-[369px] max-w-full text-3xl font-work-sans mq800:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch rounded-[27px] flex flex-col items-start justify-start py-8 px-0 gap-[16px]">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                    <h3 className="m-0 relative text-inherit leading-[28px] font-medium font-inherit mq450:text-lg mq450:leading-[22px]">
                      What is AI application development? 
                    </h3>
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/answer-content.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch relative text-lg leading-[28px] text-anew-black">{`It’s simple. Check the price of your phone or any other device, confirm, and get cash. Use our free home pick-up service and get cash on the spot. `}</div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <h3 className="m-0 relative text-inherit leading-[28px] font-medium font-inherit mq450:text-lg mq450:leading-[22px]">
                    What items can I sell on NorthLadder?
                  </h3>
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/frame-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SeparatorContainer />
          <SellButtonContainer />
        </div>
      </section>
      <div className="w-[1127px] h-px relative box-border hidden max-w-full border-t-[1px] border-solid border-gray-300" />
      <section className="self-stretch flex flex-col items-start justify-start gap-[42.7px] max-w-full text-left text-xl text-anew-black font-inter mq450:gap-[21px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[74px] max-w-full mq800:gap-[37px] mq450:gap-[18px]">
          <NewsletterContent />
          <Footer />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[26px] box-border max-w-full">
          <div className="w-[1126px] flex flex-row items-start justify-between max-w-full gap-[20px] mq800:flex-wrap">
            <div className="flex flex-row items-start justify-start gap-[24px] max-w-full mq450:flex-wrap">
              <div className="relative font-medium mq450:text-base">
                Terms and Conditions
              </div>
              <a className="[text-decoration:none] relative font-medium text-[inherit] mq450:text-base">
                Privacy Policy
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 text-sm">
              <div className="relative font-medium inline-block min-w-[106px]">
                Copyright 2024
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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