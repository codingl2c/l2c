import React, {useState} from "react";
import Image from "next/image";
import Logo from '@/assets/img/logo.svg'
import Icon from "@/assets/icons";

const navData = [
  { title: "Home", link: "#home", id: "1" },
  { title: "About Us", link: "#about", id: "2"},
  { title: "Solution", link: "#solution", id: "3" },
  { title: "Contact", link: "#contact", id: "4" },

]

export default function Header() {
  const [isVisible, toggleNav] = useState(false)
  const [activeNav, setActiveNav] = useState("1");

  const handleClick = (id) => {
    toggleNav(!isVisible);
    if(id){
        setActiveNav(id);
    }
  }
  return (
    <header>
      <div>
        
      </div>
      <div className="nav-wrap">
        <nav className="nav c-container">
          <div className="nav-content c-flex">
          <div className="nav-title" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="2000">
          <a href="#" className="nav-anchor">
              <Image src={Logo} alt="Cloud wave Logo" />
            </a>
            <button className="nav-toggle" onClick={() => toggleNav(!isVisible)}>
              <Icon type="hamburger" color="#FB8500" />
            </button>
          </div>
            <div className={isVisible ? "sm-show" : "sm-hide"}>
              <ul className="c-flex nav-list" data-aos="zoom-in" data-aos-delay="80" data-aos-duration="2000">
                {navData.map((item, i )=> (
                  <li key={i} onClick={() => handleClick(item.id)} className={activeNav === item.id ? "active" : ""}>
                  <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <style jsx>{`
            .nav-wrap{
              background-color: white;
            }
            .nav-content{
              display: flex;
              justify-content: space-between;
            }
            .nav-list li{
             margin-left: 50px;
            }
            .nav-list .active a{
              color: var(--yellow);
            }
            .nav-content-wrap{
              display: flex
            }
            .nav-title{
              display: flex;
              justify-content: space-between;
            }
            .nav-toggle{
              display: none;
            }
            @media screen and (max-width: 767px){
              .nav {
                z-index: 2000;
                position: fixed;
                width: 100%;
                margin: auto;
                right: 0;
                top: 0;
                left: 0;
                background-color: white;
                padding: 10px 30px;
              }
              .nav-anchor{
                display: flex;
              }
              .nav-content{
                display: block;
                margin: auto;
              }
              .nav-list{
                display: block;
                position: absolute;
                width: 90%;
                background-color: white;
                padding-bottom: 50px;
                z-index: 100;
                transition: all ease-in 0.4s;
              }
              .sm-hide{
                display: none;
              }
              .sm-show{
                display: block;
                height: 100vh;
              }
              .nav-toggle{
                display: block;
              }
              .nav-list li{
                margin-left: 10px;
                margin-top: 50px;
                // display: none;
               }
            }
        `}</style>
    </header>
  )
}
