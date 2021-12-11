import {
  GiWoodBeam,
  GiStoneBlock,
  GiMetalBar,
  GiGrainBundle,
  GiTwoCoins,
} from 'react-icons/gi';

import css from './TopBar.module.scss';

export const TopBar = ({ id, data }) => {
  return (
    <div className={css.topBar}>
      <Resource data={data.coin}>
        <GiTwoCoins />
      </Resource>
      <Resource data={data.food}>
        <GiGrainBundle />
      </Resource>
      <Resource data={data.wood}>
        <GiWoodBeam />
      </Resource>
      <Resource data={data.stone}>
        <GiStoneBlock />
      </Resource>
      <Resource data={data.iron}>
        <GiMetalBar />
      </Resource>
    </div>
  );
};

const Resource = ({ children, data }) => {
  return (
    <div className={css.resource} style={{ display: 'flex' }}>
      {children}
      <h4>{Math.round(data)}</h4>
    </div>
  );
};
