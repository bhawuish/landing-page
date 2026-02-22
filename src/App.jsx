import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Day Trader | Join Telegram";
  }, []);

  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">

      {/* HERO SECTION */}
      <section className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-4xl text-center">

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Join <span className="text-green-400">Day Trader</span>
            <br /> Premium Trading Signals
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Get high-accuracy intraday & swing trading signals directly on Telegram.
            Smart entries. Proper risk management. Consistent opportunities.
          </p>

          <a
            href="https://t.me/YOUR_CHANNEL_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 transition-all duration-300 
                       text-black font-bold text-lg px-8 py-4 rounded-xl shadow-lg 
                       hover:scale-105"
          >
            🚀 Join Our Telegram
          </a>

          <p className="text-gray-500 mt-6 text-sm">
            Free Access • Instant Join • Limited Slots
          </p>

        </div>
      </section>


      {/* FEATURES */}
      <section className="bg-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-green-400">
              📈 High Accuracy Signals
            </h3>
            <p className="text-gray-400">
              Professionally analyzed trade setups with clear targets & stop-loss.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-green-400">
              ⚡ Real-Time Alerts
            </h3>
            <p className="text-gray-400">
              Instant Telegram updates so you never miss a move.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-green-400">
              🔥 Daily Opportunities
            </h3>
            <p className="text-gray-400">
              Consistent market setups shared every trading session.
            </p>
          </div>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="py-16 text-center bg-gradient-to-r from-green-600 to-green-400">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
          Ready to Trade Smarter?
        </h2>

        <a
          href="https://t.me/+mgIruH-k1MdkNzA1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white font-bold text-lg 
                     px-8 py-4 rounded-xl hover:scale-105 transition"
        >
          Join Day Trader Now
        </a>
      </section>


      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-600 text-center py-6 text-sm">
        © {new Date().getFullYear()} Day Trader. All rights reserved.
      </footer>

    </div>
  );
}