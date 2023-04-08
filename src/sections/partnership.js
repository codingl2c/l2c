import React, { useState, useEffect } from "react";
import Ellispse from "@/assets/img/ellispse.svg";
import Icon from "@/assets/icons";

const data = [
  {
    id: "1",
    title: "Access to Cloud Computing Services",
    description: `Partnership with a cloud computing provider can help businesses reduce infrastructure costs by using computing resources on a pay-as-you-go basis.`
  },
  {
    id: "2",
    title: "Enhanced Data Security",
    description: `computing provider can help businesses reduce infrastructure costs by using computing resources on a pay-as-you-go basis.`
  },
  {
    id: "3",
    title: "Access to Cloud Computing Services",
    description: `cloud computing provider can help businesses reduce infrastructure costs by using computing resources on a pay-as-you-go basis.`
  },
  {
    id: "4",
    title: "Access to Cloud Computing Services",
    description: `provider can help businesses reduce infrastructure costs by using computing resources on a pay-as-you-go basis.`
  }
] 


export default function Partnership() {
  const [visibleContent, show] = useState("");
  const handleVisibility = (id) => {
    if (visibleContent === id) {
      return show("");
    }
    show(id);
  };
  const getActiveClass = (id) => {
    return visibleContent === id ? "show" : "hide";
  };
  return (
    <section className="partnership">
      <div className="c-container">
        <div className="c-flex partnership-content">
          <div
            className="descr"
            data-aos="zoom-in"
            data-aos-delay="60"
            data-aos-duration="2000"
          >
            <div className="title my-1">
              <span>Strategic </span>
              <b>Partnership</b>
            </div>
            <p>
              Our Cloud Computing computer services addresses all customer
              challenges pertaining to a seamless transition to the cloud.
            </p>
            <p>
              Partnership with a cloud computing provider can help businesses
              reduce infrastructure costs by using computing resources on a
              pay-as-you-go basis.
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="80" data-aos-duration="2000">
            <ul className="strategy-list">
             {data.map((item, i)=>(
               <li
               onClick={() => handleVisibility(item.id)}
               className={`${getActiveClass(item.id)} hover`}
               key={i}
             >
               <div className="accordion-head">
                 <p>{item.title}</p>
                 <span className="icon-wrap">
                   <Icon type="dropdown" color="#FB8500" />
                 </span>
               </div>
               <div className="accordion-body">
                 <p>{item.description} </p>
               </div>
             </li>
             ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-pattern">
        <img
          src={Ellispse.src}
          alt="ellipse"
          data-aos="zoom-in"
          data-aos-delay="90"
          data-aos-duration="2000"
        />
      </div>
      <style jsx>{`
        .partnership {
          background: rgba(217, 217, 217, 0.21);
          padding: 50px 0;
          color: var(--grey-variant-1);
          position: relative;
          overflow: hidden;
        }
        .partnership-content {
          align-items: baseline;
          position: relative;
          z-index: 10;
        }
        .partnership-content > div {
          flex: 50%;
        }
        .partnership-content .icon-wrap {
          display: inline-block;
          transition: all ease-in 0.4s;
        }
        .title {
          font-weight: 400;
          font-size: 45px;
          line-height: 55px;
        }
        .partnership p {
          font-size: 22px;
          line-height: 30px;
          padding-bottom: 15px;
          width: 85%;
        }
        .strategy-list li {
          border-bottom: 1px solid rgba(0, 0, 0, 0.3);
          width: 75%;
          margin-bottom: 20px;
          transition: all ease-in 0.4s;
        }
        .strategy-list .accordion-head {
          display: flex;
          gap: 20px;
          align-items: center;
          cursor: pointer;
        }
        .show .icon-wrap {
          transition: all ease-in 0.4s;
          transform: rotate(-180deg);
        }
        .hide .accordion-body {
          display: none;
        }
        .accordion-body {
          transition: all ease-in 0.4s 0.4s;
        }
        .show .accordion-body {
          display: block;
        }
        .bg-pattern {
          position: absolute;
          right: -10%;
          top: 10px;
          opacity: 0.5;
        }
       
        @media screen and (max-width: 767px) {
          .partnership-content{
            display: block;
          }
          .strategy-list {
            margin-top: 30px;
          }
          .strategy-list li {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
