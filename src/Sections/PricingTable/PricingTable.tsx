import React from "react";
import Container from "../../components/Container/Container";
import styles from "./PricingTable.module.scss";
import Button from "../../components/Button/Button";

interface Service {
  name: string;
  isActive: boolean;
}

interface PriceColumnProps {
  services: Service[];
  header: string;
  price: number;
}

let PriceColumn: React.FC<PriceColumnProps> = React.memo(
  ({ services, header, price }) => {
    return (
      <div className={styles["price-column"]}>
        <h3 className={styles["price-column__header"]}>{header}</h3>
        <p className={styles["price-column__price"]}>
          {price} <span>$</span>
        </p>

        <div className={styles["price-column__services"]}>
          {services.map((service) => (
            <div
              key={service.name}
              className={`${styles["price-column__service"]} ${
                service.isActive ? styles["active"] : ""
              }`}
            >
              {service.name}
            </div>
          ))}
        </div>

        <Button className={styles["price-column__button"]}>Get Started</Button>
      </div>
    );
  }
);

let PricingTable: React.FC<Omit<
  React.ComponentPropsWithoutRef<"section">,
  "children"
>> = React.memo(({ ...rest }) => {
  return (
    <section className={styles["pricing-table"]} {...rest}>
      <Container className={styles["pricing-table__container"]}>
        <div className={styles["pricing-table__description"]}>
          <h2 className={styles["pricing-table__header"]}>Plans & Pricing</h2>
          <p className={styles["pricing-table__description-text"]}>
            Startup Framework is free forever — you only pay for custom domain
            hosting or to export your site.
          </p>
        </div>

        <div className={styles["pricing-table__content"]}>
          <PriceColumn
            header="Starter"
            price={9.99}
            services={[
              { name: "2 GB of space", isActive: true },
              { name: "14 days of backups", isActive: true },
              { name: "Social integrations", isActive: true },
              { name: "Client billing", isActive: true },
              { name: "Remote access", isActive: false },
              { name: "Custom domain", isActive: false },
              { name: "24 hours support", isActive: false },
              { name: "Admin tools", isActive: false },
              { name: "Collaboration tools", isActive: false },
              { name: "User management", isActive: false },
            ]}
          />

          <PriceColumn
            header="Professional"
            price={19.99}
            services={[
              { name: "2 GB of space", isActive: true },
              { name: "14 days of backups", isActive: true },
              { name: "Social integrations", isActive: true },
              { name: "Client billing", isActive: true },
              { name: "Remote access", isActive: true },
              { name: "Custom domain", isActive: true },
              { name: "24 hours support", isActive: true },
              { name: "Admin tools", isActive: false },
              { name: "Collaboration tools", isActive: false },
              { name: "User management", isActive: false },
            ]}
          />

          <PriceColumn
            header="Team"
            price={49.99}
            services={[
              { name: "2 GB of space", isActive: true },
              { name: "14 days of backups", isActive: true },
              { name: "Social integrations", isActive: true },
              { name: "Client billing", isActive: true },
              { name: "Remote access", isActive: true },
              { name: "Custom domain", isActive: true },
              { name: "24 hours support", isActive: true },
              { name: "Admin tools", isActive: true },
              { name: "Collaboration tools", isActive: true },
              { name: "User management", isActive: true },
            ]}
          />
        </div>
      </Container>
    </section>
  );
});

export default PricingTable;
