export default function SolutionCard({ icon, title, description, type = "" }) {
  const isSecondaryCard = type === "secondary";
  return (
    <div className={`c-card hover ${isSecondaryCard ? "card-sec" : ""}`}>
      <div className="icon-wrap">
        <img src={icon.src} alt={title} />
      </div>
      <h5>{title}</h5>
      <div className="card-body my-1">
        <p>{description}</p>
        <button className={`${isSecondaryCard ? "c-btn-pri" : "c-btn-sec"}`}>
          Read more
        </button>
      </div>
      <style jsx>{`
        .c-card {
          max-width: 290px;
          min-width: 290px;
          width: 100%;
          min-height: 364px;
          background-color: var(--white-variant-1);
          padding: 20px;
          margin: auto;
          box-shadow: 0px 0px 20px rgba(215, 215, 215, 0.25);
          border-radius: 2px;
        }
        .c-card h5 {
          font-weight: 700;
          font-size: 24px;
        }
        .card-body p {
          font-weight: 500;
          font-size: 16px;
          line-height: 26px;
        }
        .card-body button {
          margin: 20px auto;
          max-width: 170px;
          width: 100%;
          font-size: 16px;
        }
        .icon-wrap {
          max-height: 78px;
          min-height: 78px;
          height: 100%;
          display: flex;
          align-items: center;
        }
        .icon-wrap img {
          margin: auto;
        }
        .card-sec {
          background-color: var(--bg-blue);
          color: var(--white-variant-1);
        }
        @media screen and (max-width: 900px) and (min-width: 700px) {
          .c-card {
            margin: unset;
          }
        }
        @media screen and (max-width: 767px) {
          .c-card {
            min-width: unset;
          }
        }
      `}</style>
    </div>
  );
}
