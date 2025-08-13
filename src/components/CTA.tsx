import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
              Your Support Makes a Difference
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Your generous donation helps us continue our mission of serving vulnerable communities. 
            Every contribution, no matter the size, creates real and lasting positive change in someone's life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300 mb-2">$25</div>
              <div className="text-green-100">Provides school supplies for 1 child</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300 mb-2">$50</div>
              <div className="text-green-100">Funds healthcare for 5 families</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300 mb-2">$100</div>
              <div className="text-green-100">Supports women's training program</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Support Our Mission
            </Link>
            <Link
              href="/volunteer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors duration-200"
            >
              Volunteer With Us
            </Link>
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 max-w-2xl mx-auto">
            <p className="text-green-100 text-sm mb-2">
              <strong>Transparency Promise:</strong> 100% of your donation goes directly to our programs.
            </p>
            <p className="text-green-100 text-sm">
              All contributions are tax-deductible. We provide regular updates on how your support is making a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
