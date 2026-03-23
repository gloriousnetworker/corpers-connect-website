export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#008751] flex items-center justify-center">
            <span className="text-white text-xs font-bold">CC</span>
          </div>
          <span className="font-bold text-gray-800 text-lg">Corpers Connect</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={process.env.NEXT_PUBLIC_APP_URL ?? '#'}
            className="text-sm text-gray-600 hover:text-[#008751] font-medium"
          >
            Sign In
          </a>
          <a
            href={process.env.NEXT_PUBLIC_APP_URL ?? '#'}
            className="text-sm bg-[#008751] hover:bg-[#006b3f] text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Join Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="inline-flex items-center gap-2 bg-[#e6f4ed] text-[#008751] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#008751]" />
          Built exclusively for NYSC corps members
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 max-w-3xl leading-tight mb-6">
          Connect, Grow &amp; Serve{' '}
          <span className="text-[#008751]">Together</span>
        </h1>

        <p className="text-gray-500 text-lg max-w-xl mb-10">
          Corpers Connect is the social platform built for Nigerian NYSC corps members — find your
          community, discover opportunities, and make the most of your service year.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={process.env.NEXT_PUBLIC_APP_URL ?? '#'}
            className="bg-[#008751] hover:bg-[#006b3f] text-white px-8 py-3 rounded-xl font-semibold text-base transition-colors"
          >
            Get Started — It&apos;s Free
          </a>
          <a
            href="#features"
            className="border border-gray-200 hover:border-[#008751] text-gray-700 px-8 py-3 rounded-xl font-semibold text-base transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Feature pills */}
      <section id="features" className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
            Everything you need during your service year
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: '🤝', title: 'Social Feed', desc: 'Share moments with fellow corpers' },
              { icon: '💬', title: 'Messaging', desc: 'Private and group chats' },
              { icon: '📞', title: 'Voice & Video', desc: 'Free calls to other corps members' },
              { icon: '🛒', title: 'Mami Market', desc: 'Buy & sell within the community' },
              { icon: '💼', title: 'Opportunities', desc: 'Jobs, internships & gigs' },
              { icon: '🔔', title: 'Notifications', desc: 'Stay updated in real time' },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-4 border border-gray-100">
                <div className="text-2xl mb-2">{f.icon}</div>
                <div className="font-semibold text-gray-800 text-sm">{f.title}</div>
                <div className="text-gray-500 text-xs mt-0.5">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-gray-400 border-t border-gray-100">
        © {new Date().getFullYear()} Corpers Connect · All rights reserved
      </footer>
    </main>
  );
}
