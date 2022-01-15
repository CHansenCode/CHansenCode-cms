import React from 'react';

import { Button, Icon } from 'chansencode-lib';

import { Settings } from '../Settings/Settings';

import css from './Menu.module.scss';

export const Menu = ({ ...props }) => {
  return (
    <>
      <div className={css.wrapper}>
        <div className={css.left}>
          <MonthView {...props} />
          <WeekView {...props} />
          <DayView {...props} />

          <Previous {...props} />
          <Next {...props} />
        </div>

        <div className={css.right}>
          <Suggest disabled />
          <Settings {...props} />
        </div>
      </div>
    </>
  );
};

const Suggest = () => {
  async function suggestPlan() {
    alert('Not implemented yet');
  }

  return <Button onClick={suggestPlan}>Suggest plan</Button>;
};
const MonthView = ({ setView, ...props }) => {
  async function changeView() {
    setView('month');
  }

  return (
    <Button className="pc3b" onClick={changeView}>
      <Icon size="2rem" type="month" />
    </Button>
  );
};
const WeekView = ({ setView, ...props }) => {
  async function changeView() {
    setView('week');
  }

  return (
    <Button className="pc3b" onClick={changeView}>
      <Icon size="2rem" type="week" />
    </Button>
  );
};
const DayView = ({ setView, ...props }) => {
  async function changeView() {
    setView('day');
  }

  return (
    <Button className="pc3b" onClick={changeView}>
      <Icon size="2rem" type="day" />
    </Button>
  );
};
const Previous = ({ ...props }) => {
  return (
    <Button className="pc3b" onClick={e => e.preventDefault()}>
      <h3>{`<`}</h3>
    </Button>
  );
};
const Next = ({ ...props }) => {
  return (
    <Button className="pc3b" onClick={e => e.preventDefault()}>
      <h3>{`>`}</h3>
    </Button>
  );
};
