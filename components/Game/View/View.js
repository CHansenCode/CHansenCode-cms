import css from './View.module.scss';

import { Button } from 'chansencode-lib';

export const View = ({
  id,
  base,
  increment,
  buildings,
  setBuildings,
  resources,
  setResources,
}) => {
  return (
    <>
      <div id={id} className="game_view_wrapper">
        <div className="gatherer">
          <Button
            onClick={() =>
              setResources({ ...resources, food: resources.food + 1 })
            }
          >
            Gather some food
          </Button>
          <Button
            onClick={() =>
              setResources({ ...resources, food: resources.food + 1 })
            }
          >
            Go on an adventure!
          </Button>
        </div>

        <div>
          <div className="game_view_buildings">
            <p>Buildings:</p>
            <Button
              style={{ whiteSpace: 'nowrap' }}
              margin="0 0 0.5rem 0"
              onClick={() =>
                setBuildings({ ...buildings, hut: buildings.hut + 1 })
              }
            >
              Hut
            </Button>
          </div>
          <div className="game_view_buildings">
            <p>Buildings:</p>
          </div>
        </div>

        <h2>view</h2>
      </div>

      <style jsx>
        {`
          .game_view_wrapper {
            position: relative;
            height: 100%;
            width: 100%;
            border: thin dashed;
          }
          .game_view_buildings {
            postion: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 8rem;
            border-right: thin solid;
            padding: 0.25rem;
          }
          .gatherer {
            position: absolute;
            top: 80%;
            left: 30%;
            border: thin solid;
            width: 10rem;
          }
        `}
      </style>
    </>
  );
};
