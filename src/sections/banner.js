import Icon from "@/assets/icons";
import React from "react";
import BannerImage from "@/assets/img/banner.png";
import AiImage from "@/assets/img/ai.svg";
import DigitizedImage from "@/assets/img/digitized.svg";
import "aos/dist/aos.css";

export default function Banner() {
  return (
    <section
      className="banner c-center"
      id="home"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="2000"
    >
      <div className="c-container">
        <div className="banner-flex">
          <div className="banner-text">
            <p className="enhance">Enhance Cloud</p>
            <p className="computing">Computing </p>
            <p className="transform">
              Transform your Business with Cloud{" "}
              <span className="bg-comp">Computing</span>
            </p>
            <button className="learn-btn">
              <span className="learn-text">Learn More</span>{" "}
              <Icon type="arrowRight" />
            </button>
          </div>
          <div>
            <img src={BannerImage.src} alt="cloud computing" />
          </div>
        </div>
       
      </div>
      {/* <div className="bottom-banner">
        <div className="left">
        <img src={AiImage.src} alt="Artificial Inteligence" />
          <p>Artificial Inteligence Computing</p>
        </div>
        <div className="right">
        <img src={DigitizedImage.src} alt="Digitized Technology" />
          <p>Digitized Technology Computing</p>
        </div>
      </div> */}
      <style jsx>{`
        .banner{
          padding: 80px 0 0;
        }
        .banner-flex {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }
        .banner-text {
          color: var(--grey-variant-1);
          width: 50%;
        }
        .enhance {
          font-weight: 700;
          font-size: 6vw;
          line-height: 120%;
        }
        .computing {
          font-size: 8vw;
          font-weight: 700;
          line-height: 100%;
        }
        .transform {
          font-weight: 500;
          font-size: 38px;
          font-style: italic;
          line-height: 120%;
          margin: 15px 0;
        }
        .learn-btn {
          box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.04);
          border-radius: 4px;
          background-color: rgba(251, 133, 0, 0.5);
          min-width: 180px;
          height: 50px;
          font-weight: 500;
          font-size: 16px;
          margin-top: 30px;
        }
        .learn-text {
          margin-right: 10px;
          transition: var(--primary-transition);
        }
        .learn-btn:hover .learn-text{
          padding-right: 10px;
          transition: var(--primary-transition);
        }
        // .bottom-banner{
        //   display: flex;
        //   width: 100%;
        //   justify-content: space-between;
        //   text-align: center;
        //   font-style: italic;
        //   font-weight: 200;
        //   font-size: 16px;
        //   line-height: 30px;
        // }
        // .bottom-banner .left{
        //   background-color: rgba(251, 133, 0, 0.25);
        //   width: 50%;
        //   padding: 20px 0;
        // }
        // .bottom-banner .right{
        //   background-color: rgba(251, 133, 0, 0.35);
        //   width: 50%;
        //   padding: 20px 0;
        // }
        @media screen and (min-width: 1300px) {
          .enhance {
            font-size: 85px;
          }
          .computing {
            font-size: 115px;
          }
        }
        @media screen and (max-width: 768px) {
          // .bottom-banner{
          //  font-size: 10px;
          // }
          .enhance {
            font-size: 40px;
          }
          .computing {
            font-size: 55px;
          }
          .banner-flex {
            flex-wrap: wrap;
            padding-top: 50px;
          }
          .banner-text {
            width: 100%;
          }
          .transform {
            font-size: 25px;
          }
        }
        @media screen and (min-width: 600px) and (max-width: 768px) {
          .enhance {
            font-size: 60px;
          }
          .computing {
            font-size: 85px;
          }
        }
      `}</style>
    </section>
  );
}
