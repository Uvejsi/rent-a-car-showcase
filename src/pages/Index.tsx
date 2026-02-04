import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FeaturedCars } from "@/components/home/FeaturedCars";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <WhyChooseUs />
      <FeaturedCars />
    </Layout>
  );
};

export default Index;
