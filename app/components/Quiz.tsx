'use client';

import { useState } from 'react';
import {
  Mountain, Coffee, Users, Palette, ClipboardList,
  Utensils, Heart, Globe, Backpack, PartyPopper,
  MapPin, Compass, Home, Briefcase, Pizza,
} from 'lucide-react';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';

const PERSONALITIES = {
  bold: {
    key: 'bold',
    name: 'Bold Adventurer',
    coffee: 'Double Espresso',
    tagline: '"You live for intensity"',
    emoji: '⚡',
    sign: 'Aries',
    signSymbol: '♈',
    description: 'You were born to go first. You don\'t wait for the universe to hand you opportunities — you sprint toward them before anyone else has laced up their shoes. Your energy is magnetic and slightly terrifying, in the best way. People follow you not because you asked them to, but because standing still around you feels physically impossible. You feel things at full volume. You love hard, move fast, and rarely look back. The espresso isn\'t just your drink — it\'s your spiritual animal.',
  },
  sweet: {
    key: 'sweet',
    name: 'Sweet Enthusiast',
    coffee: 'Caramel Latte',
    tagline: '"Life\'s too short for bitter"',
    emoji: '🍰',
    sign: 'Taurus',
    signSymbol: '♉',
    description: 'You understand something most people don\'t: pleasure is not a reward, it\'s a practice. You have an almost supernatural ability to find the softest blanket, the best table, the perfect lighting. You are deeply loyal — perhaps the most loyal person in any room — and you expect the same in return. You don\'t do things halfway. When you love something, you love it completely, obsessively, forever. The caramel latte is not an indulgence for you. It\'s a standard.',
  },
  social: {
    key: 'social',
    name: 'Social Butterfly',
    coffee: 'Cappuccino',
    tagline: '"Coffee is better with company"',
    emoji: '🥐',
    sign: 'Gemini',
    signSymbol: '♊',
    description: 'You contain multitudes and you\'re not apologising for it. You can be the life of the party and the most thoughtful person in the room — sometimes within the same hour. People find you endlessly fascinating, which you find both flattering and slightly exhausting. You process the world through conversation. You\'ve never had a thought you didn\'t want to share, a feeling you didn\'t want to dissect, or a room you couldn\'t light up. The cappuccino suits you: balanced, social, a little bit frothy.',
  },
  artisan: {
    key: 'artisan',
    name: 'Artisan Snob',
    coffee: 'Pour-Over, Single Origin',
    tagline: '"You know what you like"',
    emoji: '🎨',
    sign: 'Virgo',
    signSymbol: '♍',
    description: 'You notice everything. The thread count of the sheets, the kerning on the menu, the way someone\'s story doesn\'t quite add up. You are not being difficult — you simply have standards, and you\'ve done the work to develop them. You research before you commit. You curate before you share. People sometimes mistake your precision for coldness, but those who know you understand it\'s the opposite: you care so much that you refuse to be careless. The pour-over is not a coffee. It\'s a ritual.',
  },
  pragmatist: {
    key: 'pragmatist',
    name: 'Practical Pragmatist',
    coffee: 'Large Drip, Whatever\'s Fresh',
    tagline: '"Just make it work"',
    emoji: '📋',
    sign: 'Capricorn',
    signSymbol: '♑',
    description: 'You are quietly, devastatingly competent. While others are still making mood boards, you\'ve already shipped the thing, filed the paperwork, and started on the next one. You don\'t need applause — results are their own reward. People underestimate you exactly once. You\'re not cynical, you\'re just calibrated: you\'ve learned that most problems dissolve under a clear head and a good plan. The drip coffee isn\'t a compromise. It\'s a choice made by someone who knows exactly what they\'re doing.',
  },
};

const QUESTIONS = [
  {
    text: 'What does your ideal weekend morning look like?',
    answers: [
      { text: 'Sunrise hike or outdoor adventure', emoji: '🏔️', Icon: Mountain, personality: 'bold' },
      { text: 'Slow coffee and a good book at home', emoji: '☕', Icon: Coffee, personality: 'sweet' },
      { text: 'Brunch with a big group of friends', emoji: '🥐', Icon: Users, personality: 'social' },
      { text: 'A market, gallery, or new café to explore', emoji: '🎨', Icon: Palette, personality: 'artisan' },
      { text: 'Catching up on errands and to-do lists', emoji: '📋', Icon: ClipboardList, personality: 'pragmatist' },
    ],
  },
  {
    text: 'How do you pick a restaurant?',
    answers: [
      { text: 'Wherever has the boldest, most adventurous menu', emoji: '🔥', Icon: Mountain, personality: 'bold' },
      { text: 'Somewhere with great desserts and cozy vibes', emoji: '🍰', Icon: Heart, personality: 'sweet' },
      { text: 'Wherever my friends want to go', emoji: '👥', Icon: Users, personality: 'social' },
      { text: 'Weeks of research — Yelp, reviews, chef\'s background', emoji: '🔍', Icon: Palette, personality: 'artisan' },
      { text: 'Closest place with solid reviews', emoji: '📍', Icon: MapPin, personality: 'pragmatist' },
    ],
  },
  {
    text: "What's your travel style?",
    answers: [
      { text: 'Off the beaten path — hiking, hostels, no plans', emoji: '🧗', Icon: Compass, personality: 'bold' },
      { text: 'Boutique hotel, local pastries, slow mornings', emoji: '🛁', Icon: Home, personality: 'sweet' },
      { text: 'Wherever my friends are going', emoji: '🎉', Icon: Users, personality: 'social' },
      { text: 'Carefully curated itinerary, hidden gems only', emoji: '🗺️', Icon: Globe, personality: 'artisan' },
      { text: 'Flights and hotel sorted — figure the rest out there', emoji: '✈️', Icon: Briefcase, personality: 'pragmatist' },
    ],
  },
  {
    text: 'Your work bag contains…',
    answers: [
      { text: 'Just my phone — I travel light', emoji: '💪', Icon: Mountain, personality: 'bold' },
      { text: 'Snacks, a candle, my favourite pen', emoji: '🧸', Icon: Heart, personality: 'sweet' },
      { text: 'My laptop — I\'m always connected', emoji: '📱', Icon: Users, personality: 'social' },
      { text: 'A book, notebook, and very specific headphones', emoji: '📚', Icon: Palette, personality: 'artisan' },
      { text: 'Everything I might possibly need', emoji: '🎒', Icon: Backpack, personality: 'pragmatist' },
    ],
  },
  {
    text: 'What kind of party do you throw?',
    answers: [
      { text: 'Spontaneous outdoor hangout', emoji: '🏕️', Icon: Mountain, personality: 'bold' },
      { text: 'Intimate dinner party, homemade food', emoji: '🕯️', Icon: Utensils, personality: 'sweet' },
      { text: 'Big group, the more the merrier', emoji: '🎊', Icon: PartyPopper, personality: 'social' },
      { text: 'Small gathering, curated playlist, specific wine', emoji: '🍷', Icon: Palette, personality: 'artisan' },
      { text: 'Pizza and whatever works for everyone', emoji: '🍕', Icon: Pizza, personality: 'pragmatist' },
    ],
  },
];

function calculateResult(answers: string[]): typeof PERSONALITIES[keyof typeof PERSONALITIES] {
  const tally: Record<string, number> = {};
  for (const a of answers) {
    tally[a] = (tally[a] || 0) + 1;
  }
  const top = Object.entries(tally).sort((a, b) => b[1] - a[1])[0][0];
  return PERSONALITIES[top as keyof typeof PERSONALITIES];
}

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<typeof PERSONALITIES[keyof typeof PERSONALITIES] | null>(null);

  function handleAnswer(personality: string) {
    const newAnswers = [...answers, personality];
    if (currentQuestion + 1 >= QUESTIONS.length) {
      setAnswers(newAnswers);
      setResult(calculateResult(newAnswers));
    } else {
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function handleRetake() {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  }

  if (result) {
    return <QuizResult personality={result} onRetake={handleRetake} />;
  }

  return (
    <QuizQuestion
      question={QUESTIONS[currentQuestion]}
      questionIndex={currentQuestion}
      totalQuestions={QUESTIONS.length}
      onAnswer={handleAnswer}
    />
  );
}
