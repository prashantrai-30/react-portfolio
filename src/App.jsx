import Layout from "./components/layout/Layout/";
import Hero from "./components/home/Hero/";
import Projects from "./components/home/Projects/";
import About from "./components/home/About/";
import Contact from "./components/home/Contact/";

const App = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </Layout>
  );
};

export default App;