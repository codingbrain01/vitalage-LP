import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              VitalAge Supplements
            </h1>

            <p className="text-gray-600 mb-6">
              Premium Health & Wellness for Active Seniors
            </p>

            <p className="mb-8">
              Welcome to VitalAge, your trusted source for high-quality supplements designed to support joint health,
              immunity, and overall vitality for those 55 and older.
            </p>

            <div className="flex gap-4">
              <Link
                to="/product"
                className="bg-black text-white px-6 py-3 rounded"
              >
                Shop Now
              </Link>

              <Link
                to="/blog"
                className="border px-6 py-3 rounded"
              >
                Read Article
              </Link>
            </div>
          </div>

          <img
            src="https://bayoulifemag.com/wp-content/uploads/2021/11/2R1C1982_1-1024x683.jpg"
            className="rounded-xl shadow-lg"
          />

        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          Discover the VitalAge Difference
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="font-semibold mb-2">Science-Backed</h3>
            <p className="text-gray-600">
              Clinically studied ingredients for maximum efficacy.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Natural & Pure</h3>
            <p className="text-gray-600">
              No fillers, GMOs, or artificial additives.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Tailored for Seniors</h3>
            <p className="text-gray-600">
              Supports bone strength, energy, and cognitive health.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Easy Subscriptions</h3>
            <p className="text-gray-600">
              Save 20% with auto-delivery.
            </p>
          </div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Top Products
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border rounded-xl p-6 text-center bg-white">
              <h3 className="font-semibold text-xl mb-2">
                Joint & Mobility Support
              </h3>

              <p className="text-gray-600 mb-4">
                Featuring turmeric, glucosamine, and boswellia for flexibility and comfort.
              </p>

              <p className="font-bold mb-4">$29.99 / month</p>

              <Link to="/product" className="bg-black text-white px-5 py-2 rounded">
                Shop Now
              </Link>
            </div>

            <div className="border rounded-xl p-6 text-center bg-white">
              <h3 className="font-semibold text-xl mb-2">
                Immune Boost
              </h3>

              <p className="text-gray-600 mb-4">
                Supports immune defense and daily resilience.
              </p>

              <p className="font-bold mb-4">$24.99 / month</p>

              <Link to="/product" className="bg-black text-white px-5 py-2 rounded">
                Shop Now
              </Link>
            </div>

            <div className="border rounded-xl p-6 text-center bg-white">
              <h3 className="font-semibold text-xl mb-2">
                Daily Wellness
              </h3>

              <p className="text-gray-600 mb-4">
                Complete nutritional support for everyday vitality.
              </p>

              <p className="font-bold mb-4">$19.99 / month</p>

              <Link to="/product" className="bg-black text-white px-5 py-2 rounded">
                Shop Now
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* TESTIMONIALS PLACEHOLDER */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">

        <h2 className="text-3xl font-bold mb-6">
          What Our Customers Say
        </h2>

        <p className="text-gray-600">
          Real stories coming soon.
        </p>

      </section>

    </div>
  );
}
