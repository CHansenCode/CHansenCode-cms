import { useState, useEffect } from 'react';

import { TopBar } from './topBar';
import { SideMenu } from './SideMenu';
import { View } from './View';

import css from './style.module.scss';

export function Game() {
  const [base, setBase] = useState(0);

  //#region COUNTERS
  const [resources, setResources] = useState({
    coin: 0,
    wood: 0,
    stone: 0,
    iron: 0,
    food: 0,
  });
  const [increment, setIncrement] = useState({
    coin: 0,
    wood: 0,
    stone: 0,
    iron: 0,
    food: 0,
  });
  const [workers, setWorkers] = useState({
    merchant: 0,
    farmer: 0,
    lumberjack: 0,
    miner: 0,
    quarryWorker: 0,
  });
  const [costs, setCosts] = useState({
    farmer: 10,
    merchant: 20,
    lumberjack: 100,
    quarryWorker: 150,
    miner: 200,
  });
  const [buildings, setBuildings] = useState({
    hut: 0,
  });
  //#endregion

  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    let interval = 200;

    const ticker = setInterval(() => {
      setResources({
        ...resources,
        coin: resources.coin + increment.coin / (1000 / interval),
        food: resources.food + increment.food / (1000 / interval),
        wood: resources.wood + increment.wood / (1000 / interval),
        stone: resources.stone + increment.stone / (1000 / interval),
        iron: resources.iron + increment.iron / (1000 / interval),
      });
    }, interval);
    return () => {
      clearInterval(ticker);
    };
  }, [resources]);

  useEffect(() => {
    errorMsg.length > 1 &&
      setTimeout(() => {
        setErrorMsg('');
      }, 2000);
  }, [errorMsg]);

  return (
    <main className={css.main}>
      <SideMenu
        id={css.sideMenu}
        data={{ ...resources, ...increment, ...workers, ...costs }}
      />

      <TopBar id={css.topbar} data={resources} />

      <View
        id={css.view}
        base={base}
        increment={increment}
        buildings={buildings}
        setBuildings={setBuildings}
        resources={resources}
        setResources={setResources}
      />
    </main>
  );
}
