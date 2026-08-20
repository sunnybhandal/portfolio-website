import { ImageResponse } from 'next/og';

export const alt = 'Sunny Bhandal, custom websites for businesses';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#020617',
          color: '#f8fafc',
          padding: '72px 80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#22d3ee',
          }}
        >
          Sunny Bhandal
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 64,
              lineHeight: 1.12,
              maxWidth: 920,
            }}
          >
            Custom websites designed to impress.
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 24,
              fontSize: 28,
              color: '#94a3b8',
              maxWidth: 760,
            }}
          >
            Built for desktop and mobile. Starting at $500.
          </div>
        </div>
      </div>
    ),
    size
  );
}
