'use client';

interface ProgressDotsProps {
  total: number;
  current: number;
}

export default function ProgressDots({ total, current }: ProgressDotsProps) {
  return (
    <div style={{ display: 'flex', gap: '4px', marginTop: '32px' }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: '2px',
            background: i < current ? '#000' : '#e0e0e0',
            transition: 'background 0.3s',
          }}
        />
      ))}
    </div>
  );
}
