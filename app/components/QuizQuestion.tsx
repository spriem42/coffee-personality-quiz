'use client';

import { LucideIcon } from 'lucide-react';
import ProgressDots from './ProgressDots';

interface Answer {
  text: string;
  emoji: string;
  Icon: LucideIcon;
  personality: string;
}

interface Question {
  text: string;
  answers: Answer[];
}

interface QuizQuestionProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (personality: string) => void;
}

export default function QuizQuestion({
  question,
  questionIndex,
  totalQuestions,
  onAnswer,
}: QuizQuestionProps) {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Vogue-style masthead */}
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

      {/* Main content */}
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
            What&apos;s Your Coffee Personality?
          </p>

          {/* Question */}
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '36px',
            fontWeight: 700,
            color: '#000',
            lineHeight: 1.25,
            marginBottom: '40px',
            borderTop: '3px solid #000',
            paddingTop: '20px',
          }}>
            {question.text}
          </h1>

          {/* Answer options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {question.answers.map((answer, i) => {
              const { Icon } = answer;
              return (
                <button
                  key={i}
                  onClick={() => onAnswer(answer.personality)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '18px 0',
                    borderTop: i === 0 ? 'none' : '1px solid #e0e0e0',
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderBottom: i === question.answers.length - 1 ? '1px solid #e0e0e0' : 'none',
                    cursor: 'pointer',
                    fontSize: '14px',
                    letterSpacing: '0.5px',
                    color: '#000',
                    background: 'transparent',
                    textAlign: 'left',
                    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                    width: '100%',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.color = '#666';
                    (e.currentTarget as HTMLButtonElement).style.paddingLeft = '8px';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.color = '#000';
                    (e.currentTarget as HTMLButtonElement).style.paddingLeft = '0px';
                  }}
                >
                  <Icon size={16} color="#000" style={{ flexShrink: 0, opacity: 0.5 }} />
                  <span>{answer.text}</span>
                </button>
              );
            })}
          </div>

          {/* Progress */}
          <ProgressDots total={totalQuestions} current={questionIndex} />
        </div>
      </main>
    </div>
  );
}
