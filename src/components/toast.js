import React, {useEffect, useState} from "react";

/**
 * @param {string} message - message
 * @param {string} type - "success" | "warning" | "error"
 * 
 */
export function showMessage(visible, message, type="success"){
  let showToast = visible
  if(visible){
    setTimeout(()=>{
     showToast = false
    }, 5000)
    return <Toast message={message} type={type}/>
  }


}
export default function Toast({visible, message, type="success", setVisibility}){
  useEffect(() => {
    if(visible){
      setTimeout(()=>{
       setVisibility(false)
      }, 3000)
    }
 
  }, [visible])

 

  return(
        visible && message && <div className="notification-container"  data-aos="fade-left" data-aos-delay="50">
        <div className="toast-container" >
        <div>
        <h5 className={`toast-title ${type}`}>{type}</h5>
        <p>{message}</p>
        </div>
        </div>
        <style jsx>
          {`
          .notification-container{
            position: fixed;
            z-index: 999999;
            box-sizing: border-box;
            right: 12px;
            top: 12px;
            min-width: 250px;
            background-color: white;
            box-shadow: 0px 0px 20px rgba(215, 215, 215, 0.25);
            transition: transform .6s ease-in-out;
            transition: transform .6s ease-in-out;
            max-height: 100px;
            border-radius: 3px 3px 3px 3px;
            box-shadow: 0 0 10px #999;
            overflow-hidden;
          }
            .success{
              color: green;
            }
            .toast-title{
              padding-bottom: 10px;
              text-transform: capitalize;
            }
            .toast-container{
              padding: 30px;
            }
            @keyframes toast-in-right {
              from {
                transform: translateX(100%);
                
              }
              to {
                transform: translateX(0);
              }
            }
          `}
        </style>
      </div>
  )
}
