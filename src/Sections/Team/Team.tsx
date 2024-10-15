import React from "react";
import styles from "./Team.module.scss";
import Container from "../../components/Container/Container";

import image1 from "../../assets/images/Team/Mask.jpg";
import image2 from "../../assets/images/Team/Mask-1.jpg";
import image3 from "../../assets/images/Team/Mask-2.jpg";
import image4 from "../../assets/images/Team/Mask-3.jpg";
import image5 from "../../assets/images/Team/Mask-4.jpg";

enum LinkTypes {
  Twitter = "fab fa-twitter",
  Facebook = "fab fa-facebook",
  Dribbble = "fab fa-dribbble",
  Instagram = "fab fa-instagram",
  Skype = "fab fa-skype",
  Git = "fab fa-git",
  Medium = "fab fa-medium",
}

interface Link {
  name: LinkTypes;
  url: string;
}

interface IcoLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  link: Link;
}

let IcoLink: React.FC<IcoLinkProps> = React.memo(({ link, ...rest }) => {
  return (
    <a
      href={link.url}
      className={styles["team__link"] + " " + link.name}
      {...rest}
    />
  );
});

interface PersonProps {
  name: string;
  profession: string;
  image: string;
  links?: Link[];
}

let Person: React.FC<PersonProps> = React.memo(
  ({ name, profession, image, links }) => {
    return (
      <div className={styles["team__member"]}>
        <img className={styles["team__member-image"]} src={image} alt={name}/>
        <div className={styles["team__member-info"]}>
          <h3 className={styles["team__member-name"]}>{name}</h3>
          <p className={styles["team__member-profession"]}>{profession}</p>
          <div className={styles["team__member-links"]}>
            {links && links.map((el) => <IcoLink key={el.name} link={el} />)}
          </div>
        </div>
      </div>
    );
  }
);

interface TeamProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "children"> {}

let Team: React.FC<TeamProps> = React.memo(({ ...rest }) => {
  return (
    <section className={styles["team"]} {...rest}>
      <Container className={styles["team__container"]}>
        <h2 className={styles["team__header"]}>Startup Crew</h2>
        <p className={styles["team__description"]}>
          The most important part of the Startup Framework is the samples. The
          samples form a set of 25 usable pages you can use as is or you can add
          new blocks from UI Kit.
        </p>
        <div className={styles["team__members"]}>
          <Person
            image={image1}
            name="Leah Salomon"
            profession="UI Designer"
            links={[
              { name: LinkTypes.Twitter, url: "#" },
              { name: LinkTypes.Facebook, url: "#" },
              { name: LinkTypes.Dribbble, url: "#" },
              { name: LinkTypes.Instagram, url: "#" },
            ]}
          />

          <Person
            image={image2}
            name="Colin Timmons"
            profession="UX Designer"
            links={[
              { name: LinkTypes.Twitter, url: "#" },
              { name: LinkTypes.Dribbble, url: "#" },
            ]}
          />

          <Person
            image={image3}
            name="Miguel Osborne"
            profession="Front-end Developer"
            links={[
              { name: LinkTypes.Skype, url: "#" },
              { name: LinkTypes.Medium, url: "#" },
              { name: LinkTypes.Git, url: "#" },
            ]}
          />

          <Person
            image={image4}
            name="Taylor Simon"
            profession="Product Manager"
            links={[
              { name: LinkTypes.Twitter, url: "#" },
              { name: LinkTypes.Instagram, url: "#" },
            ]}
          />

          <Person
            image={image5}
            name="Steven MacAlister"
            profession="Copyrighter"
            links={[{ name: LinkTypes.Twitter, url: "#" }]}
          />
        </div>
      </Container>
    </section>
  );
});

export default Team;
