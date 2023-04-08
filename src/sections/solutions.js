// import Image from "next/image";
import PrivateCloud from "@/assets/img/feature_private_cloud.svg";
import PublicCloud from "@/assets/img/feature_public_cloud.svg";
import HybridCloud from "@/assets/img/feature_hybrid_cloud.svg";
import RecoveryCloud from "@/assets/img/feature_recovery_cloud.svg";
import SolutionCard from "@/components/solutionCard";

const solutions = [
  {
    title: "Private Cloud",
    icon: PrivateCloud,
    description:
      "The computing infrastructure in private cloud is dedicated to one organization and not shared with other organization.",
  },
  {
    title: "Public Cloud",
    icon: PublicCloud,
    description:
      "The computing infrastructure in private cloud is dedicated to one organization and not shared with other organization.",
  },
  {
    title: "Hybrid Cloud",
    icon: HybridCloud,
    description:
      "The computing infrastructure in private cloud is dedicated to one organization and not shared with other organization.",
  },
  {
    title: "Recovery Cloud",
    icon: RecoveryCloud,
    description:
      "The computing infrastructure in private cloud is dedicated to one organization and not shared with other organization.",
    type: "secondary",
  },
];

export default function Solutions() {
  return (
    <section className="feature" id="solution">
      <div
        className="c-container"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        <div className="c-text-center">
          <div className="feat-head">
            <span className="text-group">
              <span className="why">Why </span>
              <span>Choose Us</span>
            </span>
            <p>
              In CloudWave, we provide access to computing resources and
              software applications over the internet.
            </p>
          </div>
          <div
            className="c-flex my-1 card-list"
            data-aos="fade-left"
            data-aos-delay="80"
            data-aos-duration="2500"
          >
            {solutions.map((feat, i) => (
              <SolutionCard {...feat} key={i} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .feature {
          padding: 80px auto 80px;
          background-color: #fafdff;
        }
        .feat-head {
          width: 40%;
          margin: 80px auto 70px;
        }
        .feat-head .text-group {
          display: block;
          margin-bottom: 15px;
          font-size: 45px;
          color: var(--grey-variant-1);
        }
        .feat-head .why {
          font-weight: 700;
        }
        .feat-head p {
          font-weight: 500;
        }
        .card-list {
          gap: 20px;
          flex-wrap: wrap;
          padding-bottom: 100px;
        }

        @media screen and (max-width: 900px) and (min-width: 700px) {
          .feat-head {
            width: 80%;
          }
          .card-list {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        @media screen and (max-width: 767px) {
          .feat-head {
            width: 95%;
          }
        }
      `}</style>
    </section>
  );
}
