import { Section } from 'components';
import { Users, Next } from 'components/Settings';

export default function Settings() {
  return (
    <>
      <Section title="Development" foldable folded>
        <Next />
      </Section>
      <Section title="Users" foldable folded>
        <Users />
      </Section>
    </>
  );
}
