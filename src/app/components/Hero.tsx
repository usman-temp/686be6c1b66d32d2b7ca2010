import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Culinary Canvas Hero"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
          Craft Your Culinary Masterpiece
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
          Discover recipes, share your creations, and elevate your cooking skills with our community.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/recipes"
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg"
          >
            Explore Recipes
          </Link>
          <button className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-8 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-lg">
            Watch Video
          </button>
          <Link
            href="/submit-recipe"
            className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors text-lg"
          >
            Submit Your Recipe
          </Link>
        </div>
      </div>
    </section>
  );
}