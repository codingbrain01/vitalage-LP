export default function Product() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* PRODUCT HERO */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <img
          src="https://cdn.britannica.com/96/229896-050-E7262BF5/Fresh-maca-hypocotyls-Lepidium-meyenii-Peruvian-ginseng.jpg"
          className="rounded-xl shadow"
        />

        <div>
          <h1 className="text-3xl font-bold mb-4">
            VitalAge Libido & Joint Boost
          </h1>

          <p className="text-gray-600 mb-6">
            Advanced joint mobility and vitality support designed for adults 55+.
          </p>

          <p className="text-2xl font-bold mb-6">$29.99 / month</p>

          <a
            href="#"
            className="bg-green-600 text-white px-6 py-3 rounded inline-block"
          >
            Buy Now
          </a>
        </div>

      </div>

      {/* BENEFITS */}
      <section className="mt-20">

        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose VitalAge?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">

          <div>
            <h3 className="font-semibold text-xl mb-2">Maca Root</h3>
            <p className="text-gray-600">
              Supports energy, libido, and hormone balance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">Turmeric</h3>
            <p className="text-gray-600">
              Powerful anti-inflammatory for joint comfort.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">Glucosamine</h3>
            <p className="text-gray-600">
              Helps maintain cartilage and mobility.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <div className="text-center mt-16">

        <a
          href="#"
          className="bg-black text-white px-10 py-4 rounded"
        >
          Subscribe & Save 20%
        </a>

      </div>

    </div>
  );
}
