import { Section, Game } from 'components';

export default function IncrementalGame() {
  return (
    <Section>
      <div
        style={{
          height: '90vh',
          width: '90vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Game />
      </div>
    </Section>
  );
}
