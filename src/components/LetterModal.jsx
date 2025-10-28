import React from 'react';

const letterThemes = {
  H: {
    bg: 'from-pink-50 to-white',
    text: 'How could I ever explain what you mean to me? You turned ordinary moments into constellations, and somehow my heart learned a new language — it speaks your name in every beat.',
  },
  A: {
    bg: 'from-rose-50 to-pink-50',
    text: 'All the stars in the sky remind me of your eyes — the way they hold whole universes without even trying. You are my favorite sparkle in an endless night.',
  },
  P: {
    bg: 'from-fuchsia-50 to-pink-50',
    text: 'Perhaps destiny knew what it was doing when it brought you to me. I find you in the quiet, in the laughter, in every future I dare to imagine.',
  },
  Y: {
    bg: 'from-rose-50 to-amber-50',
    text: 'You are the softest place my heart has ever landed. You make the world kinder just by being in it.',
  },
  B: {
    bg: 'from-purple-50 to-pink-50',
    text: 'Because of you, even ordinary days hum with a gentle magic. I love the calm we build together.',
  },
  I: {
    bg: 'from-indigo-50 to-white',
    text: 'In your presence, time slows and everything makes sense. Your laughter is my favorite melody.',
  },
  R: {
    bg: 'from-pink-50 to-lavender-50',
    text: 'Remember this: you are loved in a thousand quiet ways, and in every loud one too. I will choose you, always.',
  },
  T: {
    bg: 'from-rose-50 to-white',
    text: 'There is a tenderness in the way you look at me that makes the whole world feel safe. Thank you for being you.',
  },
  D: {
    bg: 'from-amber-50 to-pink-50',
    text: 'Destiny, fate, or luck — whatever it was, I’m grateful. Your love is a home I never knew I was missing.',
  },
};

function getTheme(letter) {
  return letterThemes[letter] || { bg: 'from-pink-50 to-white', text: '' };
}

export default function LetterModal({ open, letter, onClose }) {
  if (!open) return null;
  const theme = getTheme(letter);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
        aria-hidden
      />
      <div className={`relative z-10 w-[92%] max-w-2xl rounded-3xl shadow-xl border border-pink-100 bg-gradient-to-br ${theme.bg} overflow-hidden`}>
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl md:text-3xl font-serif text-pink-700">
              {letter}
            </h3>
            <button
              onClick={onClose}
              className="rounded-full px-3 py-1 text-pink-600 hover:bg-pink-100/60"
              aria-label="Close"
            >
              Close
            </button>
          </div>

          <p className="mt-4 text-pink-700/90 leading-relaxed">
            {theme.text}
          </p>

          <div className="mt-6 flex items-center gap-2">
            <div className="animate-pulse text-pink-500">❤</div>
            <div className="text-sm text-pink-600">A tiny surprise: you are my always.</div>
          </div>
        </div>

        <div className="h-2 bg-gradient-to-r from-pink-300 via-rose-300 to-fuchsia-300" />
      </div>
    </div>
  );
}
