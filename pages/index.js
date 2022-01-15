import { Image } from 'components';

export default function Home() {
  return (
    <div
      style={{
        height: 'calc(100vh - 6rem)',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ height: '20rem', width: '20rem' }}>
        <Image
          modal
          data={{
            tite: 'cow',
            subtitle: 'cows r us',
            src: 'https://media.chansen.design/architecture/ishallen/a101.jpg',
          }}
        />
      </div>
    </div>
  );
}
