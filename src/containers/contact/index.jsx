import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import axios from "axios";
import toast from "react-hot-toast";
import { server } from "../../App";

const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Description, setDescription] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      `${server}/contactUs`,
      {
        email: Email,
        name: Name,
        message: Description,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (data.message) {
      toast.success(data.message, {
        style: {
          fontSize: "1.5rem",
        },
      });
      setName("");
      setEmail("");
      setDescription("");
    }
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form onSubmit={submitHandler}>
            <div className="contact__content__form">
              <div className="contact__content__form__controlswrapper">
                <div>
                  <input
                    required
                    name="name"
                    className="inputName"
                    type={"text"}
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="name" className="nameLabel">
                    Name
                  </label>
                </div>
                <div>
                  <input
                    required
                    name="email"
                    className="inputEmail"
                    type={"text"}
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="email" className="emailLabel">
                    Email
                  </label>
                </div>
                <div>
                  <textarea
                    required
                    name="description"
                    className="inputDescription"
                    type={"text"}
                    value={Description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="5"
                  />
                  <label htmlFor="description" className="descriptionLabel">
                    Description
                  </label>
                </div>
              </div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;
