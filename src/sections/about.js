import Image from "next/image";
import AboutImage from "@/assets/img/about.png";
import Ellipse from "@/assets/img/ellispse.svg";
import Icon from "@/assets/icons";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about">
        <div
          className="c-container c-flex about-content"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="2000"
        >
          <div className="sm-order-2 img-wrap c-flex-left">
            <div className="about-pattern-img">
              <img src={Ellipse.src} alt="group of people sitting" />
            </div>
            <div className="about-img">
              <img src={AboutImage.src} alt="group of people sitting" />
            </div>
          </div>
          <div className="sm-order-1 c-flex-right text-wrap">
            <p className="about-intro-title text-yellow">
              Cloud Consulting Services
            </p>
            <h2 className="my-1">
              <span>Cloud Computing </span>
              <span>Computer Service</span>
            </h2>
            <p className="about-text-descr">
              Cloud computing allows users to access and use computing resources
              such as servers, storage, databases, software, and applications
              over the internet without the need for local hardware and
              infrastructure.
            </p>
            <button className="my-1 text-yellow learn-more">
              Learn more &nbsp;
              <span className="icon-wrap">
              <Icon type={"arrowRight"} color="#FB8500" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about-section {
          margin-bottom: 100px;
        }
        .about {
          padding-top: 100px;
          background-color: var(--bg-blue);
        }
        .about .img-wrap {
          flex: 45%;
        }
        .about .text-wrap {
          flex: 40%;
        }
        .about .absolute-img {
          left: 20%;
        }
        .about-pattern-img {
          position: absolute;
          left: 0;
          top: -10%;
        }
        .about-img {
          margin-left: auto;
          padding-right: 20px;
          margin-bottom: -100px;
          z-index: 100;
        }

        .about-content {
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          color: var(--white-variant-1);
        }
        .about-text-descr {
          font-weight: 500;
          font-size: 24px;
        }
        .about-intro-title {
          font-weight: 500;
          font-size: 24px;
        }
        .text-yellow {
          color: var(--yellow);
        }
        .icon-wrap{
          transition: var(--primary-transition);
        }
        .learn-more:hover .icon-wrap{
          padding-left: 10px;
          transition: var(--primary-transition);
        }
        @media screen and (max-width: 800px) {
          .about-content {
            display: block;
          }
          .about {
            background-position: bottom;
          }
          .about .absolute-img {
            left: 0;
            top: 20%;
          }

          .sm-order-1 {
            order: 1;
          }
          .sm-order-2 {
            order: 2;
          }
          .about-text-descr {
            width: 100%;
          }
        }
        @media screen and (max-width: 767px) {
        }
      `}</style>
    </section>
  );
}

{
  /* <a href="/"></a> */
}
