// import Testimonial from "@/sections/testimonials";

export default  function TestimonialCard({clientName, clientCompany, image, testimony}){
  return(
    <div className="testimonial-card hover">
    <div className="c-flex testimonial-card-header">
    <div className="thumbnail">
       <img src={image.src} alt={clientName}/>
     </div>
     <div>
       <p className='client-name'>{clientName}</p>
       <p className='client-company'>{clientCompany}</p>
     </div>
    </div>
    <div>
     <p className='client-testimonial'>
      {`"${testimony}"`}
      </p>
    </div>
    <style jsx>{`
        .thumbnail{
          width: 70px;
          height: 70px;
          border-radius: 50%;
        }
        .testimonial-card-header{
          gap: 10px;
          padding-bottom: 15px;
        }
        .client-name{
          font-weight: 600;
          font-size: 16px;
        }
        .client-company{
          font-weight: 400;   
          font-size: 14px;
        }
        .testimonial-card{
          max-width: 390px;
          min-height: 240px;
          padding: 30px;
          border-radius: 20px;
          color: var(--grey-variant-1);
          background-color: var(--white);
        }
        `}</style>
   </div>
  )
}