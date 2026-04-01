'use client';

import { RefreshCw } from 'lucide-react';

interface Personality {
  key: string;
  name: string;
  coffee: string;
  tagline: string;
  emoji: string;
  sign: string;
  signSymbol: string;
  description: string;
}

interface QuizResultProps {
  personality: Personality;
  onRetake: () => void;
}

export default function QuizResult({ personality, onRetake }: QuizResultProps) {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Masthead */}
      <header style={{
        borderBottom: '1px solid #000',
        padding: '16px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '11px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#000',
        }}>
          Beauty & Lifestyle
        </span>
        <span style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '28px',
          fontWeight: 900,
          letterSpacing: '8px',
          textTransform: 'uppercase',
          color: '#000',
        }}>
          Vogue
        </span>
        <span style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '11px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#000',
        }}>
          Quiz
        </span>
      </header>

      <main style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
      }}>
        <div style={{ maxWidth: '600px', width: '100%' }}>

          {/* Kicker */}
          <p style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: '10px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#888',
            marginBottom: '20px',
          }}>
            Your Result
          </p>

          {/* Placeholder image — editorial block */}
          <div style={{
            width: '100%',
            height: '280px',
            background: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '80px',
            marginBottom: '32px',
            borderTop: '3px solid #000',
          }}>
            {personality.emoji}
          </div>

          {/* Personality type */}
          <p style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: '10px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#888',
            marginBottom: '12px',
          }}>
            You are
          </p>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '48px',
            fontWeight: 900,
            color: '#000',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}>
            {personality.name}
          </h1>
          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '18px',
            fontStyle: 'italic',
            color: '#444',
            marginBottom: '24px',
          }}>
            {personality.tagline}
          </p>

          {/* Description */}
          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '17px',
            fontStyle: 'italic',
            color: '#222',
            lineHeight: 1.8,
            marginBottom: '32px',
            borderLeft: '3px solid #000',
            paddingLeft: '20px',
          }}>
            {personality.description}
          </p>

          {/* Coffee recommendation */}
          <div style={{
            borderTop: '1px solid #000',
            borderBottom: '1px solid #000',
            padding: '24px 0',
            marginBottom: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <span style={{
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: '10px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#888',
            }}>
              Your coffee
            </span>
            <span style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '22px',
              fontWeight: 700,
              color: '#000',
            }}>
              {personality.coffee}
            </span>
          </div>

          {/* Retake */}
          <button
            onClick={onRetake}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              border: '1px solid #000',
              background: 'transparent',
              color: '#000',
              fontSize: '10px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = '#000';
              (e.currentTarget as HTMLButtonElement).style.color = '#fff';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
              (e.currentTarget as HTMLButtonElement).style.color = '#000';
            }}
          >
            <RefreshCw size={12} />
            Retake Quiz
          </button>
        </div>
      </main>
    </div>
  );
}
