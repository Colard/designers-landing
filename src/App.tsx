import CallToAction from "./Sections/CallToAction/CallToAction";
import Content from "./Sections/Content/Content";
import Features from "./Sections/Features/Features";
import FormPage from "./Sections/FormPage/FormPage";
import Header from "./Sections/Header/Header";
import Hero from "./Sections/Hero/Hero";
import ShowCase from "./Sections/ShowCase/ShowCase";
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
      </main>

    </>
  );
}

export default App;
