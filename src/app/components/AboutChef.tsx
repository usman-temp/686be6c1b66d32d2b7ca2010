import Image from 'next/image';

export default function AboutChef() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96 rounded-2xl overflow-hidden">
          <Image
            src="/chef.jpg"
            alt="Head Chef Maria Rodriguez"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            About Chef Maria Rodriguez
          </h2>
          <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
            With over 15 years of professional culinary experience and 3 Michelin stars, Chef Maria brings a passion for...
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white">Culinary Philosophy</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                "Great cooking is about following technical fundamentals while embracing creativity..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}