import Container from "../../components/Container/Container";
import styles from "./Testimonial.module.scss";
import React from "react";

import user1 from "../../assets/images/Testimonial/user1.jpg";
import user2 from "../../assets/images/Testimonial/user2.jpg";
import user3 from "../../assets/images/Testimonial/user3.jpg";
import user4 from "../../assets/images/Testimonial/user4.jpg";

interface TestimonialProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {}

interface TestimonialCommentProps {
  image: string;
  name: string;
  comment: string;
}

let TestimonialComment: React.FC<TestimonialCommentProps> = React.memo(
  ({ image, name, comment }) => {
    return (
      <article className={styles["testimonial__comment-box"]}>
        <div className={styles["testimonial__image-wrapper"]}>
          <img className={styles.testimonial__image} src={image} alt={name} />
        </div>
        <div className={styles["testimonial__comment-wrapper"]}>
          <p className={styles.testimonial__comment}>{comment}</p>
          <p className={styles.testimonial__name}>{name}</p>
        </div>
      </article>
    );
  }
);

let Testimonial: React.FC<TestimonialProps> = React.memo(
  ({ className, ...rest }) => {
    return (
      <section className={`${styles.testimonial} ${className || ""}`} {...rest}>
        <Container className={styles.testimonial__container}>
          <h2 className={styles.testimonial__header}>Our Happy Clients</h2>
          <div className={styles.testimonial__clients}>
            <TestimonialComment
              image={user1}
              name="Rayhan Curran"
              comment="Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support"
            />

            <TestimonialComment
              image={user2}
              name="Kayley Frame"
              comment="As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website"
            />

            <TestimonialComment
              image={user3}
              name="Gene Whitfield"
              comment="The most important part of the Startup Framework is the samples"
            />

            <TestimonialComment
              image={user4}
              name="Allan Kim"
              comment="I’ve built my website with Startup just in one day, and it was ready-to-go. "
            />
          </div>
        </Container>
      </section>
    );
  }
);

export default Testimonial;
