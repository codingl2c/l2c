import Avatar1 from "@/assets/img/testimonial_avatar_1.png";
import Chroncloud from "@/assets/img/chron_cloud.png";
import MasterCard from "@/assets/img/master_card.png";
import Timeless from "@/assets/img/timeless.png";
import Ellipse from "@/assets/img/ellispse.svg";
import TestimonialCard from "@/components/testimonialCard";

const testimonials = [
  {
    clientName: "Robert Fox",
    clientCompany: "Nintendo.org",
    image: Avatar1,
    testimony:
      "Since I invested in it I made over 100,000 dollars profits. It's is the most valuable business resource we have EVER purchased.",
  },
  {
    clientName: "John Fox",
    clientCompany: "Nintendo.org",
    image: Avatar1,
    testimony:
      "Since I invested in it I made over 100,000 dollars profits. It's is the most valuable business resource we have EVER purchased.",
  },
  {
    clientName: "Robert Fox",
    clientCompany: "Nintendo.org",
    image: Avatar1,
    testimony:
      "Since I invested in it I made over 100,000 dollars profits. It's is the most valuable business resource we have EVER purchased.",
  },
];

export default function Testimonial() {
  return (
    <section className="testimonials">
      <div className="testimonial-wrap">
        <div className="testimonial-pattern">
          <img
            src={Ellipse.src}
            alt="ellipse pattern"
            data-aos="zoom-in"
            data-aos-delay="60"
            data-aos-duration="2000"
          />
        </div>
        <div className="c-container">
          <div>
            <h1
              className="testimonial-title my-1 c-text-center"
              data-aos="fade-down"
              data-aos-delay="60"
              data-aos-duration="2000"
            >
              What People Are Saying!
            </h1>
            <div
              className="c-flex testimonial-list"
              data-aos="fade-up-right"
              data-aos-delay="70"
              data-aos-duration="2000"
            >
              {testimonials.map((testimony, i) => (
                <TestimonialCard {...testimony} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="c-flex brands">
        <img
          src={Chroncloud.src}
          alt="chron cloud"
          data-aos="flip-left"
          data-aos-delay="60"
          data-aos-duration="2000"
        />
        <img
          src={MasterCard.src}
          alt="chron cloud"
          data-aos="flip-right"
          data-aos-delay="80"
          data-aos-duration="2000"
        />
        <img
          src={Timeless.src}
          alt="chron cloud"
          data-aos="flip-left"
          data-aos-delay="100"
          data-aos-duration="2000"
        />
      </div>
      <style jsx>{`
        .testimonial-wrap {
          position: relative;
          background-color: var(--bg-blue);
          overflow: hidden;
        }
        .testimonial-wrap h1 {
          color: var(--white-variant-1);
        }
        .testimonial-title {
          font-weight: 600;
          font-size: 45px;
          line-height: 55px;
          padding: 30px 0;
        }
        .testimonial-list {
          position: relative;
          flex-wrap: wrap;
          justify-content: center;
          gap: 40px;
          padding-bottom: 50px;
          z-index: 100;
        }
        .testimonial-pattern {
          position: absolute;
          transform: rotate(-180deg);
          left: -5%;
          top: -3%;
        }
        .brands {
          justify-content: center;
          margin: 100px auto;
          gap: 50px;
        }
      `}</style>
    </section>
  );
}
