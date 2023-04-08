import Icon from "@/assets/icons";
import ServiceImage from "@/assets/img/service.jpg";
import Ellipse from "@/assets/img/ellispse.svg";

export default function Services() {
  return (
    <section className="services c-container">
      <div className="c-flex services-content">
        <div className="relative">
          <div
            className="c-flex services-wrap"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1500"
          >
            <div className="img-wrap">
              <div className="pattern-img services-pattern"></div>
              <div className="service-img">
                <img src={ServiceImage.src} alt="group of people" />
              </div>
            </div>
            <div className="text-wrap">
              <div className="text-cont">
                <div>
                  <h2 className="services-title">How do we Help?</h2>
                  <p className="services-descr my-1">
                    Our Cloud Computing computer services addresses all customer
                    challenges pertaining to a seamless transition to the cloud,
                    and we have resources to maintain the cloud solutions.
                  </p>
                  <ul className="service-list">
                    <li className="c-flex">
                      <span className="arrow-wrap">
                        <Icon type={"arrowRight"} color="white" />
                      </span>
                      Cloud Strategy Services
                    </li>
                    <li className="c-flex">
                      <span className="arrow-wrap">
                        <Icon type={"arrowRight"} color="white" />
                      </span>
                      Application Development Services
                    </li>
                    <li className="c-flex">
                      <span className="arrow-wrap">
                        <Icon type={"arrowRight"} color="white" />
                      </span>
                      Maintenance and Security Services
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="service-pattern"
            data-aos="fade-left"
            data-aos-delay="70"
            data-aos-duration="1500"
          >
            <img src={Ellipse.src} alt="ellipse pattern" />
          </div>
          <div
            className="services-stat"
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1500"
          >
            <div className="c-flex">
              <div className="stat-item">
                <h1 className="my-1">30%</h1>
                <p>
                  Helping businesses to quickly recover from unexpected
                  disruptions.
                </p>
              </div>
              <div className="v-divider"></div>

              <div className="stat-item">
                <h1 className="my-1">30%</h1>
                <p>
                  Percentage of users using software applications from anywhere
                  with an internet connection
                </p>
              </div>
              <div className="v-divider"></div>

              <div className="stat-item">
                <h1 className="my-1">30%</h1>
                <p>
                  Helping businesses to quickly recover from unexpected
                  disruptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .services {
          padding-bottom: 100px;
        }
        .services-content {
          margin-left: auto;
          color: var(--grey-variant-1);
        }
        .services .img-wrap {
          flex: 65%;
        }
        .services-wrap {
          gap: 50px;
          align-items: flex-start;
        }
        .services-pattern {
          background: #b8b4b4;
          border-radius: 50px;
          max-width: 630px;
          position: absolute;
          z-index: -999;
          width: 95%;
          max-height: 334px;
          height: 95%;
        }
        .service-img {
          margin-top: 30px;
          margin-left: 30px;
        }
        .relative {
          position: relative;
        }
        .service-img img {
          object-fit: cover;
          height: 400px;
          width: 100%;
          border-radius: 50px;
          margin-right: 20px;
        }
        .services-descr {
          font-weight: 500;
          font-size: 24px;
          line-height: 30px;
        }
        .services-title {
          font-weight: 600;
          font-size: 45px;
          line-height: 55px;
        }
        .arrow-wrap {
          background-color: var(--bg-blue);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }

        .service-list li {
          gap: 10px;
          margin-top: 10px;
        }
        .text-cont {
          position: relative;
        }
        .service-pattern {
          position: absolute;
          left: -22%;
        }
        .service-pattern img {
          width: 90%;
        }
        .services-stat {
          position: relative;
          margin: 30px 0;
          z-index: 100;
          max-width: 900px;
          width: 100%;
          padding: 30px 30px 50px;
          background-color: var(--bg-blue);
          color: var(--white-variant-1);
          font-weight: 600;
          border-radius: 25px;
        }
        .services-stat .c-flex {
          gap: 10px;
        }
        .stat-item {
          max-width: 220px;
        }
        .services-stat h1 {
          font-size: 60px;
          line-height: 55px;
          color: var(--yellow);
        }
        .services-stat p {
          font-size: 18px;
          line-height: 25px;
        }
        .v-divider {
          height: 130px;
          margin-right: 15px;
          border: 1px solid var(--yellow);
        }
        @media screen and (min-width: 1100px) {
          .services {
            padding-bottom: 300px;
          }
          .service-pattern {
            left: 25%;
            bottom: -40%;
          }
          .services-stat {
            min-width: 800px;
            right: 0;
            top: 70%;
            position: absolute;
          }
        }
        @media screen and (max-width: 767px) {
          .services-stat {
            min-width: unset;
          }
          .services-wrap {
            flex-wrap: wrap;
          }
          .service-img img,
          .services-pattern{
            border-radius: 15px;
          }
        }
        @media screen and (max-width: 440px) {
          .v-divider {
            height: 0;
            width: 120px;
            margin-right: 0;
            margin-top: 10px;
          }
        }
      `}</style>
    </section>
  );
}
