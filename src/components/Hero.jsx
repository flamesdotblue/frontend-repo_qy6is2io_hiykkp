import React, { useMemo } from 'react';
import Spline from '@splinetool/react-spline';

const letters = Array.from('HAPPY BIRTHDAY');

function getTimeUntilBirthday() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const target = new Date(`${currentYear}-12-16T00:00:00`);
  if (now > target) target.setFullYear(currentYear + 1);
  const diff = target.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Hero({ onLetterClick, isMusicPlaying, onToggleMusic }) {
  const [tick, setTick] = React.useState(0);
  const time = useMemo(getTimeUntilBirthday, [tick]);

  React.useEffect(() => {
    const id = setInterval(() => setTick((v) => v + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/60 via-white/40 to-pink-100/70 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs tracking-widest uppercase text-pink-500 mb-2">December 16 • A magical love world</p>
        <h1 className="text-4xl md:text-6xl font-serif text-pink-700 drop-shadow-sm">
          Happy Birthday, <span className="font-semibold">Unnati</span> 💖
        </h1>
        <p className="mt-4 text-pink-700/80 leading-relaxed max-w-2xl mx-auto">
          A dreamy place of soft lights, hidden memories, and infinite love. Start anywhere, explore everywhere — it all leads back to you.
        </p>

        <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-white/70 backdrop-blur px-5 py-2 shadow-sm border border-pink-100">
          <span className="text-xs text-pink-600">Countdown to Dec 16:</span>
          <span className="font-medium text-pink-700">
            {time.days}d {time.hours}h {time.minutes}m {time.seconds}s
          </span>
        </div>

        <div className="mt-4">
          <button
            onClick={onToggleMusic}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-sm border transition-all ${
              isMusicPlaying
                ? 'bg-pink-600 text-white border-pink-600 hover:bg-pink-700'
                : 'bg-white text-pink-700 border-pink-200 hover:bg-pink-50'
            }`}
          >
            <span>{isMusicPlaying ? 'Pause Music' : 'Play Music'}</span>
            <span aria-hidden>♪</span>
          </button>
        </div>

        <div className="mt-10 grid grid-cols-5 sm:grid-cols-7 gap-3 justify-items-center">
          {letters.map((ch, idx) => (
            <button
              key={`${ch}-${idx}`}
              onClick={() => onLetterClick(ch)}
              className="group relative select-none"
              aria-label={`Open letter ${ch}`}
            >
              <div className="w-14 h-16 sm:w-16 sm:h-20 rounded-2xl bg-white/70 backdrop-blur border border-pink-100 shadow hover:shadow-md transition-transform transform hover:-translate-y-1 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-serif text-pink-700 group-hover:scale-110 transition-transform">{ch}</span>
              </div>
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity">Tap me</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
