import React from 'react';

const reasons = [
  'Your laugh turns any room into sunshine.',
  'You listen with your whole heart.',
  'You make ordinary days feel like little holidays.',
  'Your kindness is effortless and radiant.',
  'You see beauty in small moments.',
  'With you, home is a person, not a place.',
  'You are brave, gentle, and endlessly inspiring.',
  'You believe in me when I forget to.',
  'You are my favorite adventure.',
];

const flowers = [
  { name: 'Rose', memo: 'The day we first held hands — the world got quieter and brighter at once.' },
  { name: 'Lavender', memo: 'Late-night talks where we built our own tiny universe.' },
  { name: 'Peony', memo: 'Every inside joke that still makes us smile out of nowhere.' },
  { name: 'Daisy', memo: 'The calm of just sitting together, saying nothing, saying everything.' },
  { name: 'Cherry Blossom', memo: 'That moment I realized you are my forever.' },
];

function Heart({ className = '', onClick, title }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={`absolute text-pink-500 hover:text-pink-600 transition-transform active:scale-95 ${className}`}
    >
      ❤
    </button>
  );
}

export default function InteractivePlayground() {
  const [currentReason, setCurrentReason] = React.useState('');
  const [notes, setNotes] = React.useState('');
  const [openFlower, setOpenFlower] = React.useState(null);
  const [sparkleMsg, setSparkleMsg] = React.useState('');

  React.useEffect(() => {
    const saved = localStorage.getItem('unnati_secret_diary');
    if (saved) setNotes(saved);
  }, []);

  function spinHeart() {
    const idx = Math.floor(Math.random() * reasons.length);
    setCurrentReason(reasons[idx]);
  }

  function saveNotes(val) {
    setNotes(val);
    localStorage.setItem('unnati_secret_diary', val);
  }

  const compliments = [
    'You glow a little brighter than the stars.',
    'Your smile is my favorite sunrise.',
    'You make love feel effortless.',
    'You are wonder, wrapped in warmth.',
  ];

  function revealCompliment() {
    const idx = Math.floor(Math.random() * compliments.length);
    setSparkleMsg(compliments[idx]);
    setTimeout(() => setSparkleMsg(''), 2000);
  }

  return (
    <section className="relative py-16 bg-gradient-to-b from-white via-pink-50 to-rose-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-pink-700 text-center">
          Explore Our Little Love World
        </h2>
        <p className="text-pink-700/80 text-center mt-2">
          Hidden memories, tiny games, gentle surprises.
        </p>

        {/* Memory Garden */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-pink-100 bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="text-xl font-serif text-pink-700 mb-3">💐 Memory Garden</h3>
            <p className="text-sm text-pink-700/80 mb-4">Click a flower to reveal a hidden memory.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {flowers.map((f, i) => (
                <button
                  key={f.name}
                  onClick={() => setOpenFlower(openFlower === i ? null : i)}
                  className={`rounded-2xl border text-pink-700 p-4 shadow-sm transition-colors ${
                    openFlower === i ? 'bg-pink-50 border-pink-200' : 'bg-white border-pink-100 hover:bg-pink-50'
                  }`}
                >
                  <div className="text-lg">🌸 {f.name}</div>
                  {openFlower === i && (
                    <p className="text-sm mt-2 text-pink-600">{f.memo}</p>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Spin the Heart + Play Our Song */}
          <div className="rounded-3xl border border-pink-100 bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="text-xl font-serif text-pink-700 mb-3">❤️ Spin the Heart</h3>
            <p className="text-sm text-pink-700/80 mb-4">Spin to reveal a reason I love you.</p>
            <button
              onClick={spinHeart}
              className="rounded-full px-5 py-2 bg-pink-600 text-white hover:bg-pink-700 shadow"
            >
              Spin
            </button>
            {currentReason && (
              <p className="mt-3 text-pink-700/90">{currentReason}</p>
            )}

            <div className="mt-8">
              <h4 className="text-lg font-serif text-pink-700 mb-2">🎶 Play Our Song</h4>
              <p className="text-sm text-pink-700/70 mb-2">Embed your favorite track here later. For now, a sweet placeholder:</p>
              <div className="aspect-video w-full rounded-2xl border border-pink-100 bg-white flex items-center justify-center text-pink-600">
                <span>Song placeholder (YouTube/Spotify embed)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Secret Diary + Gallery */}
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-pink-100 bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="text-xl font-serif text-pink-700 mb-3">📖 Secret Diary</h3>
            <p className="text-sm text-pink-700/80 mb-3">Write anything you feel here. It saves on this device.</p>
            <textarea
              value={notes}
              onChange={(e) => saveNotes(e.target.value)}
              placeholder="Dear future us..."
              className="w-full min-h-[160px] rounded-2xl border border-pink-100 bg-white p-4 text-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div className="rounded-3xl border border-pink-100 bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="text-xl font-serif text-pink-700 mb-3">🖼️ Gallery of Us</h3>
            <p className="text-sm text-pink-700/80 mb-4">Add photos or videos later. For now, cozy placeholders.</p>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-24 rounded-xl bg-gradient-to-br from-pink-100 to-rose-50 border border-pink-100 flex items-center justify-center text-pink-600"
                >
                  <span>Memory {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hidden hearts / sparkles */}
        <div className="relative mt-10 rounded-3xl border border-pink-100 bg-white/70 backdrop-blur p-8 shadow-sm overflow-hidden">
          <p className="text-center text-pink-700/80">Psst… there are hidden hearts here. Find them for a compliment ✨</p>
          <div className="relative h-40 mt-4">
            <Heart className="top-6 left-8" onClick={revealCompliment} />
            <Heart className="top-16 right-10" onClick={revealCompliment} />
            <Heart className="bottom-6 left-1/2" onClick={revealCompliment} />
            <Heart className="top-1/2 left-1/3" onClick={revealCompliment} />
            {sparkleMsg && (
              <div className="absolute inset-x-0 bottom-3 text-center text-pink-600 animate-pulse">
                {sparkleMsg}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
