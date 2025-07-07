import Link from 'next/link';
import Image from 'next/image';

const recipes = [
  {
    id: 1,
    title: 'Authentic Paella Valenciana',
    cuisine: 'Spanish',
    time: '90 mins',
    difficulty: 'Advanced',
    image: '/paella.jpg',
  },
];

export default function RecipesGrid() {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
        Featured Recipes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {recipe.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm rounded-full">
                  {recipe.cuisine}
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-sm rounded-full">
                  {recipe.time}
                </span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 text-sm rounded-full">
                  {recipe.difficulty}
                </span>
              </div>
              <Link
                href={`/recipes/${recipe.id}`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Recipe →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}