import Image from "next/image";
import Link from "next/link";

import FeatureCard from "@/components/FeatureCard";

import { featureData, testimonialData } from "@/data";
import SectionTitle from "@/components/SectionTitle";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main>
      <section className="hero my-20 text-center grid place-items-center">
        <h1 className="hero-title font-extrabold text-4xl md:text-[52px] text-text">Landing template for startups</h1>
        <p className="hero-desc text-text-light md:text-xl pt-4 max-w-2xl">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
        <div className="hero-btn-group flex items-center gap-3 pt-8 pb-20">
          <Link href="/" className="font-medium py-3 px-8 rounded-sm text-sm md:text-base text-white bg-accent-purple">Start Free Trial</Link>
          <Link href="/" className="font-medium py-3 px-8 rounded-sm text-sm md:text-base text-text-light bg-light-gray">Learn More</Link>
        </div>

        <div className="video-section relative w-full aspect-video md:h-[576px] grid place-items-center">
          <Image src="/video_thumb.png" fill priority alt="Hero Video" className="absolute"/>
          <Image src="/icon_play.svg" height={120} width={120} priority alt="Hero Video" className="absolute" />
        </div>
      </section>

      <section className="features my-20 text-center">
        <SectionTitle title={"The majority our customers do not understand their workflows."} />

        <div className="featured-grid grid grid-cols-1 md:grid-cols-3 gap-16 pt-12">
          {
            featureData.map(el => {
              return (
                <FeatureCard key={el.icon} {...el} />
              )
            })
          }
        </div>
      </section> 

      <div className="separator w-full h-[1px] bg-light-gray" /> 

      <section className="about my-20">
        <SectionTitle title={"One product, unlimited solutions"} subTitle={"Reach goals that matter"} />

        <div className="about-wrapper">
          <AboutSection title={"Keep projects on schedule"} subTitle={"More speed. Less spend"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} list={["Duis aute irure dolor in reprehenderit", "Excepteur sint occaecat", "Amet consectetur adipiscing elit"]} image={"/illustration_1.png"} />
          <AboutSection right={true} title={"Keep projects on schedule"} subTitle={"More speed. Less spend"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} list={["Duis aute irure dolor in reprehenderit", "Excepteur sint occaecat", "Amet consectetur adipiscing elit"]} image={"/illustration_2.png"} />
          <AboutSection title={"Keep projects on schedule"} subTitle={"More speed. Less spend"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} list={["Duis aute irure dolor in reprehenderit", "Excepteur sint occaecat", "Amet consectetur adipiscing elit"]} image={"/illustration_3.png"} />
        </div>
      </section>

      <div className="separator w-full h-[1px] bg-light-gray" /> 

      <section className="testimonials my-20">
        <SectionTitle title={"Don't take our word for it"} description={"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare."} />

        <div className="testimonial-carousel mt-20 grid md:grid-cols-3 gap-6">

          {
            testimonialData.map((el, index) => {
              return (
                <div className="bg-dark-gray p-6" key={index}>
                  <div className="avatar-wrapper relative inline-block">
                    <Image src={el.avatar} height={48} width={48} alt={el.name} className="testi-avatar" />
                    <Image src="/icon_quotes.svg" height={18} width={24} alt={"Quotes"} className="absolute -right-3 top-0" />
                  </div>


                  <p className="review pt-4 text-text-light">{el.review}</p>

                  <div className="separator w-full h-[1px] bg-light-gray my-6" /> 

                  <h5 className="font-medium text-base">{el.name} / <span className="text-accent-purple">{el.position}</span></h5>
                </div>
              )
            })
          }

        </div>
      </section>
    </main>
  )
}
