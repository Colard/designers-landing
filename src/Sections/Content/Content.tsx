import styles from "./Content.module.scss";

type ContentPropsWithoutChildren = Omit<
  React.ComponentPropsWithoutRef<"section">,
  "children"
>;
interface ContentProps extends ContentPropsWithoutChildren {}

let Content: React.FC<ContentProps> = ({ ...rest }) => {
  return (
    <section className={styles.content} {...rest}>
        <div className={styles['content__text-block']}>
            <p className={styles['content__title']}>Free Sample</p>
            <h2 className={styles.content__header}>Powerful Generator and Free Figma Sources </h2>
            <p className={styles.content__description}>
                Startup Framework contains components and complex blocks which can
                easily be integrated into almost any design. All of the components are
                made in the same style, and can easily be integrated into projects,
                allowing you to create hundreds of solutions.
            </p>
        </div>
    </section>
  );
};

export default Content;
