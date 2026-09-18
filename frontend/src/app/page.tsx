// app/page.js
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import FeaturedPlaces from "../components/FeaturedPlaces";
import KumbhHighlights from "../components/KumbhHighlights";
import DailyDarshan from "../components/DailyDarshan";
import FeaturedShlokas from "../components/FeaturedShlokas";
import FeaturedPosts from "../components/FeaturedPosts";
import ShlokaPopup from "../components/ShlokaPopup";

export default function Home() {
  return (
    <Layout>
      <ShlokaPopup />
      <Hero />
      <FeaturedPlaces />
      <KumbhHighlights />
      <DailyDarshan />
      <FeaturedShlokas />
      <FeaturedPosts />
    </Layout>
  );
}
