import { FaUserShield, FaDatabase, FaCode } from "react-icons/fa";

export default async function Homepage() {
  return (
    <main className="min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Empowering Devs to Build & Solve
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Wansing.dev is your launchpad to collaborate, solve problems, and
              grow your full-stack career. Post requests. Solve. Get hired.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                Get Started
              </button>
              <button className="px-6 py-3 border border-gray-400 rounded-xl hover:bg-gray-200 transition">
                Explore Platform
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="/hero-illustration.svg"
              alt="Hero Illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUserShield className="text-blue-600 text-4xl mb-4" />,
                title: "Authentication",
                desc: "Secure login with Supabase Auth or NextAuth — role-based access built in.",
              },
              {
                icon: <FaDatabase className="text-green-600 text-4xl mb-4" />,
                title: "Database Ready",
                desc: "Relational setup with PostgreSQL, Prisma ORM, and migrations.",
              },
              {
                icon: <FaCode className="text-purple-600 text-4xl mb-4" />,
                title: "API Routes",
                desc: "REST & GraphQL-ready route handlers built with Next.js.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">What is Wansing.dev?</h2>
          <p className="text-lg text-gray-700">
            A dev-driven marketplace for job requests, project challenges, and
            real-world solutions. If you have a task — we have a coder.
          </p>
        </div>
      </section>

      {/* Request Section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Post a Request</h2>
            <p className="text-gray-600">
              Need help with a bug, integration, or MVP feature? Post your
              problem, set your budget, and get proposals or votes from the
              community.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-2">Example:</h3>
            <p className="text-sm text-gray-700">
              "I need a developer to help integrate Stripe Checkout to my SaaS
              dashboard. Budget: $200. Timeline: 3 days."
            </p>
          </div>
        </div>
      </section>

      {/* Solve & Earn Section */}
      <section className="bg-gradient-to-r from-white to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Solve & Earn</h2>
          <p className="text-gray-600">
            Developers can browse public requests, submit solutions, get hired,
            and build reputation. It’s your open portfolio.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gray-800 text-white py-12 text-center">
        <p className="text-lg font-semibold">Ready to build or get help?</p>
        <p className="text-sm text-gray-300 mt-2">
          Join Wansing.dev — where code meets real-world challenges.
        </p>
      </section>
    </main>
  );
}
