import React from 'react';

export default function Footer({ onReplayMusic }) {
  return (
    <footer className="py-8 bg-white border-t border-pink-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-pink-700/80 text-sm text-center">
          Made with love by <span className="font-semibold">Tabish Ahmad</span> for <span className="font-semibold">Unnati Mall</span> ❤️
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={onReplayMusic}
            className="rounded-full px-4 py-2 text-sm bg-pink-600 text-white hover:bg-pink-700 shadow"
          >
            Replay Music
          </button>
          <a
            href="#top"
            className="rounded-full px-4 py-2 text-sm bg-white text-pink-700 border border-pink-200 hover:bg-pink-50"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
