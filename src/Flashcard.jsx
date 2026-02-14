// src/Flashcard.jsx
function Flashcard({ card, isFlipped, onFlip }) {
const cardStyle = {
    width: '350px',
    height: '275px',
    perspective: '1000px',
    margin: '20px auto',
    cursor: 'pointer',
    justifyContent: 'center',
  };

  const innerStyle = {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    border: '2px solid #333',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: isFlipped ? 'white' : 'black',
    backgroundColor: isFlipped ? '#000000ce' : '#ffffff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.6s',
    padding: '20px',
    textAlign: 'center'
  };
  
  return (
    <div style={cardStyle} onClick={onFlip}>
      <div style={innerStyle}>
        <small style={{ color: '#7c7575' }}>{card.partOfSpeech}</small>
       <h2 style={{ 
          fontSize: '2.5rem', 
          margin: '10px 0',
          height: '80px',
          display: 'flex',
          alignItems: 'center', 
          justifyContent: 'center',
          lineHeight: '1.2' 
        }}>
        {isFlipped ? card.back : card.front}
      </h2>
        {isFlipped && (
          <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>
            "{card.sentenceTrans}"
          </p>
        )}
        {!isFlipped && (
          <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>
            "{card.sentenceOrig}"
          </p>
        )}
           <img
          src={card.image}
          alt="card visual"
          style={{
            maxWidth: '100%',
            maxHeight: '80px',
            marginTop: '10px',
            borderRadius: '8px'
          }}
          />
          <p style={{ fontSize: '.5em'}}>{card.credit}</p>
      </div>
    </div>
  );
}

export default Flashcard;