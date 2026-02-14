import { useState } from 'react';
import './index.css';
import { allDecks } from './deck';
import Flashcard from './Flashcard';

function App() {
  const [activeDeck, setActiveDeck] = useState('filipino');
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentCard = allDecks[activeDeck][currentIndex];

  if (!currentCard) return <h2 style={{ textAlign: 'center', marginTop: '100px'}}>End of the deck! <br></br> Refresh browser to return to main screen.</h2>;

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Language Flashcards App</h1>

      <Flashcard 
        card={currentCard} 
        isFlipped={isFlipped} 
        onFlip={() => setIsFlipped(!isFlipped)} 
      />

      {/* Navigation Buttons */}

<p>Card {currentIndex + 1} of {allDecks[activeDeck].length}</p>

<button onClick={() => {
  // We add length before the modulo to handle negative numbers correctly
  const prevIndex = (currentIndex - 1 + allDecks[activeDeck].length) % allDecks[activeDeck].length;
  setCurrentIndex(prevIndex);
  setIsFlipped(false);
}}>
  ⬅️ Prev Card
</button>

<button onClick={() => {
  const nextIndex = (currentIndex + 1) % allDecks[activeDeck].length;
  setCurrentIndex(nextIndex);
  setIsFlipped(false);
}}>
  Next Card ➡️
</button>


      <hr style={{ margin: '40px 0', opacity: 0.2 }} />

      {/* Language Switching Buttons */}
      <h3>Select a Language:</h3>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => { setActiveDeck('arabic'); setCurrentIndex(0); setIsFlipped(false); }}>
          🇸🇦 Arabic
        </button>
        <button onClick={() => { setActiveDeck('filipino'); setCurrentIndex(0); setIsFlipped(false); }}>
          🇵🇭 Filipino
        </button>
                <button onClick={() => { setActiveDeck('french'); setCurrentIndex(0); setIsFlipped(false); }}>
          🇫🇷 French
        </button>
        <button onClick={() => { setActiveDeck('spanish'); setCurrentIndex(0); setIsFlipped(false); }}>
          🇪🇸 Spanish
        </button>

      </div>
    </div>
  );
}

export default App;