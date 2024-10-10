import Checkbox from "../../components/Checkbox/Checkbox";
import Container from "../../components/Container/Container";
import FormContainer from "../../components/FormContainer/FormContainer";
import Select from "../../components/Select/Select";
import styles from "./Contact.module.scss";

import React from "react";

interface ContactFormProps {}

let ContactForm: React.FC<ContactFormProps> = React.memo(() => {
  return (
    <FormContainer className={styles["contact__form"]}>
      <div className={styles["contact__form-content"]}>
        <div className={styles["contact__input-row"]}>
          <div className={styles["contact__input-column"]}>
            <label className={styles["contact__label"]} htmlFor="name">
              YOUR NAME
            </label>
            <input
              className={`${styles["contact__input"]} text`}
              name="name"
              placeholder="Firs name"
            />
          </div>

          <div
            className={
              styles["contact__input-column"] +
              " " +
              styles["contact__input-budget"]
            }
          >
            <label className={styles["contact__label"]} htmlFor="budget">
              BUDGET
            </label>
            <Select
              options={[
                { value: "500", text: "$500" },
                { value: "1000", text: "$1000" },
                { value: "2000", text: "$2000" },
                { value: "1000", text: "$3000" },
                { value: "2000", text: "$4000" },
                { value: "1000", text: "$5000" },
                { value: "2000", text: "$6000" },
                { value: "1000", text: "$7000" },
                { value: "2000", text: "$8000" },
                { value: "2000", text: "$9000" },
                { value: "2000", text: "$10000" },
              ]}
              name="budget"
              className={`${styles["contact__select"]}`}
            />
          </div>
        </div>

        <label className={styles["contact__label"] + " " + styles["contact__label-email"]} htmlFor="email">
          INPUT FIELD
        </label>
        <input
          className={`${styles["contact__input"]}  text`}
          name="email"
          placeholder="name@mail.com"
        />

        <label className={styles["contact__label"]  + " " + styles["contact__label-message"]} htmlFor="message">
          YOUR MESSAGE
        </label>
        <textarea
          maxLength={500}
          className={`${styles["contact__input"]}  text`}
          name="message"
          placeholder="Message"
          autoComplete="off"
        />

        <div className={styles["contact__input-row"] + " " + styles["contact__input-checkbox"]}>
          <div className={styles["contact__checkbox-wrapper"]}>
            <Checkbox/>
            <label
              className={styles["contact__checkbox-label"]}
              htmlFor="checkbox"
            >
              Send me a copy
            </label>
          </div>

          <input
            className={`${styles["contact__submit-button"]}  button`}
            type="submit"
            value="Send"
          />
        </div>
      </div>
    </FormContainer>
  );
});

interface ContactProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {}

let Contact: React.FC<ContactProps> = React.memo(({ ...rest }) => {
  return (
    <section className={styles["contact"]} {...rest}>
      <Container className={styles["contact__container"]}>
        <div className={styles["contact__description-box"]}>
          <h2 className={styles["contact__header"]}>Let’s Keep in Touch</h2>
          <p className={styles["contact__description"]}>
            We have created a new product that will help designers, developers
            and companies create websites for their startups quickly and easily.
          </p>

          <div className={styles["contact__info"]}>
            <div className={styles["contact__info-block"]}>
              <i className="fa fa-phone"></i>
              <p className={styles["contact__info-item"]}>+1 555 505 5050</p>
            </div>

            <div className={styles["contact__info-block"]}>
              <i className="fa fa-envelope"></i>
              <p className={styles["contact__info-item"]}>
                info@designmodo.com
              </p>
            </div>

            <div className={styles["contact__info-block"]}>
              <i className="fa fa-building"></i>
              <p className={styles["contact__info-item"]}>
                San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco,
                230909
              </p>
            </div>
          </div>
        </div>

        <div className={styles["contact__form-wrapper"]}>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
});

export default Contact;
