import Icon from '@/assets/icons'
import Logo from '@/assets/img/logo.svg'

export default function Footer(){
  return(
    <footer className='footer'>
      <div className="c-container">
        <div className="c-flex footer-group my-1">
          <div className='divider'></div>
          <div className="f-1">
            <div className='my-1 title'>
            <img src={Logo.src} alt="logo"/>
            </div>
            <h4 className='get-started'>Get started now</h4>
            <p>
            Our Cloud Computing computer services addresses all customer challenges pertaining to a seamless transition to the cloud, and we have resources to maintain the cloud solutions.
            </p>
            <div className='social-cons-list' data-aos="zoom-in" data-aos-delay="60" data-aos-duration="2000">
              <Icon type="youtube" color="white" />
              <Icon type="instagram" color="white" />
              <Icon type="twitter" color="white" />
              <Icon type="facebook" color="white" />
            </div>
          </div>
          <div className="f-2">
          <div className="my-1 title">Services</div>
            <ul>
              <li>Cloud</li>
              <li>Management</li>
              <li>Digital Transformation</li>
              <li>Identity and access</li>
              <li>DeveOps services</li>
              <li>Managed IT Services</li>
            </ul>
          </div>
          <div className="f-3">
          <div className="my-1 title">Industries</div>
          <ul>
              <li>Banking</li>
              <li>Automotive</li>
              <li>Government</li>
              <li>Healthcare</li>
              <li>Aviation</li>
              <li>Manufacturing</li>
            </ul>
          </div>
          <div className="f-4">
          <div className="my-1 title">Headquarters</div>
            <p>
            2972 Westheimer Rd. Santa Ana, Illinois 85486 
            </p>
          </div>
        </div>
        <hr/>
        <div className='my-1' >Copyright 2023 Cloud Wave</div>
      </div>
      <style jsx>{`
      .footer{
        background-color: var(--bg-blue);
        color: var(--white-variant-1);
        font-size: 20px;
        line-height: 25px;
      }
  
      .footer-group {
        align-items: baseline;
        gap: 50px;
        position: relative;

      }
      .get-started{
        font-size: 25px;
        padding-bottom: 20px;
        color: var(--yellow);
      }
      .footer li{
        margin-bottom: 10px;
      }
      .divider{
        position: absolute;
        top: 70px;
        margin-top: 20px;
        width: 100%;
        height: 2px;
        border: 1px solid rgba(255, 255, 255, 0.6);
      }
      .social-cons-list{
        display: flex;
        gap: 30px;
        margin-top: 10px;
      }
      .title{
        padding: 20px 0;
        font-weight: 600;
      }
      hr{
        border-color: rgba(255, 255, 255, 0.6);
      }
      .f-1{
        flex: 30%
      }
      .f-2, .f-3, .f-4{
        flex: 20%
      }
      @media screen and (max-width: 810px){
        .divider{
          display: none
        }
        .title{
        padding: 5px 0;
        }
        .c-flex{
          flex-wrap: wrap;
        }
      }
      @media screen and (max-width: 550px){
        .c-flex{
          display: block;
        }
      }
      `}</style>
    </footer>
  )
}