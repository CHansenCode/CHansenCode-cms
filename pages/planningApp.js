import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Section } from 'components';
import { Project, NewProject } from 'components/Planner';

import { getPlans, createPlan, deletePlan } from 'pages/api';

export default function PlanningApp() {
  const dispatch = useDispatch();

  //#region init & listener
  useEffect(() => {
    dispatch(getPlans());
  }, [dispatch]);

  let data = useSelector(state => state.planning);

  async function addNewPlan() {
    dispatch(createPlan());
  }
  async function onClickDelete(id) {
    dispatch(deletePlan(id));
  }

  return (
    <Section>
      {data &&
        data.map(project => (
          <Project
            key={project._id}
            id={project._id}
            onClickDelete={() => onClickDelete(project._id)}
          />
        ))}

      <NewProject onClick={addNewPlan} />
    </Section>
  );
}
