import { useState, useEffect } from 'react';

import { Section, Calendar } from 'components';
import { Menu } from 'components/Calendar/Menu';
import { daysInMonth, arrayFromInteger } from 'lib';

import { useDates } from 'lib';

export default function CalendarPage() {
  const { y, m, d, dow, weekday, mStr } = useDates();

  const [view, setView] = useState('month');
  const [active, setActive] = useState({
    day: d,
    month: m,
    year: y,
    dow: dow,
  });

  const [settings, setSettings] = useState({
    lunchStart: '12-00',
    lunchDuration: '30',
    lunchInclusive: false,
    workStart: '07-00',
    workDuration: '8',
  });

  const [daysArray, setDaysArray] = useState([]);

  useEffect(() => {
    setDaysArray(arrayFromInteger(daysInMonth(m, y)));
  }, [active]);

  const props = {
    settings,
    setSettings,
    view,
    setView,
    daysArray,
    setDaysArray,
    view,
    active,
    setActive,
  };

  return (
    <Section hasMenu title="Calendar" subtitle={`${weekday}, ${d}-${m}-${y}`}>
      <Menu {...props} />
      <Calendar {...props} />
    </Section>
  );
}
