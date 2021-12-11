import { Iframe, Section } from 'components';

export default function ComponentLibrary() {
  return (
    <Section>
      <div style={{ height: '90vh' }}>
        <Iframe src="https://lib.chansen.design" />
      </div>
    </Section>
  );
}
