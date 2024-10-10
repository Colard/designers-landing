import CallToAction from "./Sections/CallToAction/CallToAction";
import Contact from "./Sections/Contact/Contact";
import Content from "./Sections/Content/Content";
import Features from "./Sections/Features/Features";
import FormPage from "./Sections/FormPage/FormPage";
import Header from "./Sections/Header/Header";
import Hero from "./Sections/Hero/Hero";
import PricingTable from "./Sections/PricingTable/PricingTable";
import ShowCase from "./Sections/ShowCase/ShowCase";
import Team from "./Sections/Team/Team";
import Testimonial from "./Sections/Testimonial/Testimonial";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Content />
        <Features />
        <FormPage />
        <Testimonial />
        <CallToAction />
        <ShowCase />
        <Team />
        <Contact />
        <PricingTable />
      </main>
    </>
  );
}

export default App;
