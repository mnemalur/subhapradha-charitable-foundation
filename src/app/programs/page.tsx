import Link from 'next/link';

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Comprehensive initiatives that create lasting positive change in communities
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Serving Communities Through Compassion</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SCO focuses on four essential areas to create lasting positive change in communities 
              and empower individuals to build better futures for themselves and their families.
            </p>
          </div>

          {/* Education Program */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-4">
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                    Education Initiative
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Education for All</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Breaking the cycle of poverty through quality education, providing school supplies, 
                  scholarships, and after-school programs for children in underserved communities.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">School supplies for 5,000+ children annually</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Scholarships for 500+ students</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">After-school tutoring programs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Computer literacy training</span>
                  </div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Impact</h4>
                  <p className="text-green-700">95% of our scholarship recipients graduate high school and 60% pursue higher education.</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Education Stats</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-bold text-green-600">5,000+</div>
                      <div className="text-gray-600">Children Served</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600">500+</div>
                      <div className="text-gray-600">Scholarships</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600">95%</div>
                      <div className="text-gray-600">Graduation Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600">25</div>
                      <div className="text-gray-600">Schools Partnered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Healthcare Program */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-blue-100 to-green-100 p-8 rounded-2xl">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Healthcare Stats</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-3xl font-bold text-blue-600">10,000+</div>
                        <div className="text-gray-600">Patients Treated</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-blue-600">15</div>
                        <div className="text-gray-600">Medical Camps</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-blue-600">50+</div>
                        <div className="text-gray-600">Healthcare Workers</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-blue-600">100%</div>
                        <div className="text-gray-600">Free Care</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                    Healthcare Initiative
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Healthcare Access</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Providing essential healthcare services to communities that lack access to medical care, 
                  including regular check-ups, vaccinations, and emergency medical support.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Free medical camps in rural areas</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Vaccination drives for children</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Maternal and child healthcare</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Health awareness programs</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Impact</h4>
                  <p className="text-blue-700">Reduced infant mortality by 40% and improved vaccination rates to 95% in target communities.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Women Empowerment Program */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-4">
                  <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
                    Empowerment Initiative
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Women&apos;s Empowerment</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Empowering women through skill development, entrepreneurship training, and creating 
                  opportunities for economic independence and leadership roles in their communities.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Vocational training programs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Microfinance and business support</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Leadership development workshops</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Support groups and networking</span>
                  </div>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Impact</h4>
                  <p className="text-yellow-700">2,500+ women have started their own businesses, with 80% reporting increased household income.</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Empowerment Stats</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-bold text-yellow-600">2,500+</div>
                      <div className="text-gray-600">Women Empowered</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-yellow-600">80%</div>
                      <div className="text-gray-600">Income Increase</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-yellow-600">150+</div>
                      <div className="text-gray-600">Businesses Started</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-yellow-600">20</div>
                      <div className="text-gray-600">Training Centers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Environmental Conservation Program */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Environmental Stats</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-3xl font-bold text-green-600">50,000+</div>
                        <div className="text-gray-600">Trees Planted</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-green-600">25</div>
                        <div className="text-gray-600">Clean Water Projects</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-green-600">100%</div>
                        <div className="text-gray-600">Renewable Energy</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-green-600">15</div>
                        <div className="text-gray-600">Communities Served</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="mb-4">
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                    Environmental Initiative
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Environmental Conservation</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Protecting our environment through sustainable practices, tree planting initiatives, 
                  clean water projects, and promoting eco-friendly community development.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Tree planting and reforestation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Clean water and sanitation projects</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Renewable energy installations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Environmental education programs</span>
                  </div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Impact</h4>
                  <p className="text-green-700">50,000+ trees planted, 25 clean water projects completed, and 15 communities now using renewable energy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Support Our Programs</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Your donation directly supports these life-changing programs and helps us reach more communities in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors duration-200"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors duration-200"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
