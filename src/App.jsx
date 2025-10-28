import React from 'react';
import Hero from './components/Hero.jsx';
import LetterModal from './components/LetterModal.jsx';
import InteractivePlayground from './components/InteractivePlayground.jsx';
import Footer from './components/Footer.jsx';

function useAudio(url) {
  const audioRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  React.useEffect(() => {
    const audio = new Audio(url);
    audio.loop = true;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [url]);

  const play = React.useCallback(async () => {
    try {
      await audioRef.current?.play();
      setIsPlaying(true);
    } catch (e) {
      // Autoplay might be blocked until user interaction
    }
  }, []);

  const pause = React.useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const replay = React.useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  const toggle = React.useCallback(() => {
    if (isPlaying) pause(); else play();
  }, [isPlaying, play, pause]);

  return { isPlaying, play, pause, toggle, replay };
}

export default function App() {
  const [openLetter, setOpenLetter] = React.useState(null);
  const { isPlaying, toggle, replay } = useAudio(
    // Royalty-free soft piano from Pixabay (can be replaced later)
    'https://cdn.pixabay.com/download/audio/2022/03/10/audio_2e6b0a2b8c.mp3?filename=love-112941.mp3'
  );

  return (
    <div id="top" className="min-h-screen bg-white text-pink-900">
      <Hero onLetterClick={setOpenLetter} isMusicPlaying={isPlaying} onToggleMusic={toggle} />

      <main>
        <section className="px-6 max-w-3xl mx-auto py-10">
          <h2 className="text-2xl md:text-3xl font-serif text-pink-700 text-center">A Little Love Note</h2>
          <p className="mt-4 text-pink-700/80 text-center">
            Dear Unnati, this space is for your smile. I’ll blend your stories, moments, and dreams here — soft, warm, and always ours. Paste your video script anytime, and these pages will glow with your words.
          </p>
        </section>
        <InteractivePlayground />
      </main>

      <Footer onReplayMusic={replay} />

      <LetterModal open={!!openLetter} letter={openLetter || ''} onClose={() => setOpenLetter(null)} />
    </div>
  );
}
