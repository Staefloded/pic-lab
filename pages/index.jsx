import Features from "../components/Features";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Hero from "../components/Hero";
import News from "../components/News";
import Overview from "../components/Overview";
import Client from "../prismic-config";

export default function Home({ home }) {
  return (
    <div className="relative">
      <Hero hero={home?.data} />
      <Form />
      <Overview overview={home?.data} />
      <Features features={home?.data} />
      <News news={home?.data} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const home = await Client().getSingle("homepage");

  return {
    props: {
      home,
    },
    revalidate: 10,
  };
}
