import Hero from './components/Hero';
import AboutChef from './components/AboutChef';
import RecipesGrid from './components/RecipesGrid';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutChef />
      <RecipesGrid />
      <Footer />
    </main>
  );
}