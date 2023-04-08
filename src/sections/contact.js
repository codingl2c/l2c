import React, {useState} from "react";
import Toast from "@/components/toast";

export default function Contact() {
const initialValue = {
  userName: "",
  userEmail: "",
  userMessage: "",

}
const [formValues, setFormValues] = useState(initialValue);
const [toastVisibile, setToastVisibility] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues) //formValues - data taken from user
    setFormValues(initialValue)
    setToastVisibility(true)
    // showMessage("Thank you for contacting us!")
  }

  const handleChange = (e) => {
    e.target.setCustomValidity("");
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }
  
  return (
    <section className="contact" id="contact">
      <div className="c-container">
        <div className="contact-content">
          <div className="text-group">
            <h2>Contact Us</h2>
            <p className="my-1">
              In CloudWave, we provide access to computing resources and
              software applications over the internet.
            </p>
          </div>
          <form className="form-group" onSubmit={handleSubmit}>
            <div className="input-group my-1">
              <label htmlFor="name">Name</label>
              <br />
              <input
                id="name"
                name="userName"
                required
                type="text"
                minLength={3}
                maxLength={40}
                onInput={handleChange}
                value={formValues["userName"]}
                onInvalid={(e) =>
                  e.target.setCustomValidity(
                    "Message must contain a minimum of 3 characters"
                  )
                }
              />
            </div>
            <div className="input-group my-1">
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                id="email"
                name="userEmail"
                type="email"
                required
                onInvalid={(e) =>
                  e.target.setCustomValidity("Enter a valid email (example@email.com)")
                }
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
                onInput={handleChange}
                value={formValues["userEmail"]}
              />
            </div>
            <div className="input-group my-1">
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                id="message"
                name="userMessage"
                minLength={10}
                maxLength={200}
                required
                onInvalid={(e) =>
                  e.target.setCustomValidity(
                    "Message must contain a minimum of 10 characters"
                  )
                }
                rows={10}
                onInput={handleChange}
                value={formValues["userMessage"]}
              />
            </div>
            <div className="submit">
              <input className="hover" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      <Toast message={"Thank you for contacting us!"} visible={toastVisibile} setVisibility={setToastVisibility} />
      <style jsx>{`
        .contact {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 50px 0;
          position: relative;
        }
        .text-group {
          text-align: center;
          margin-bottom: 40px;
        }
        .text-group h2 {
          font-weight: 400;
          font-size: 45px;
          line-height: 55px;
        }
        .text-group p {
          font-size: 24px;
          line-height: 30px;
        }
        .contact-content {
          max-width: 771px;
          width: 100%;
          margin: auto;
        }
        .input-group label {
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
        }
        .input-group input,
        .input-group textarea {
          width: 100%;
          background: rgba(250, 253, 255, 0.5);
          border: 1px solid #a3a3a3;
          border-radius: 4px;
          padding: 10px;
          font-family: "Work Sans", sans-serif;
        }
        .input-group input {
          height: 55px;
        }
        .submit {
          display: flex;
          justify-content: flex-end;
        }
        .submit input {
          max-width: 187px;
          width: 100%;
          height: 50px;
          background: rgba(251, 133, 0, 0.5);
          box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.04);
          border-radius: 4px;
          border: none;
          font-size: 16px;
          line-height: 30px;
          outline: none;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}
