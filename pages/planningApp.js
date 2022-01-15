import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Section } from 'components';
import { Init } from 'components/Planner';

import { getPlans } from './api';

export default function PlanningApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlans());
  }, [dispatch]);

  let data = useSelector(state => state.planning);

  return (
    <Section title="Projects planner">
      {data ? (
        data.map(p => <Init key={p._id} data={p} />)
      ) : (
        <>'Loading planning data...'</>
      )}

      <div>Create new project</div>
    </Section>
  );
}
