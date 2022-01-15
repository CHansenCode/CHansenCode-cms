import { useEffect, useState } from 'react';

import {
  AiOutlineClockCircle,
  AiOutlineDeliveredProcedure,
  AiOutlineUnorderedList,
} from 'react-icons/ai';

import { Diagram } from 'chansencode-lib';

import css from './Progress.module.scss';

export const ProgressCard = ({ data }) => {
  const [stageData, setStageData] = useState([...data.stages]);

  // useEffect(() => {
  //   data.stages && setStageData([...data.stages]);
  // }, [data]);

  return (
    <div className={css.wrapper}>
      <div className={css.bar}>
        <div style={{ position: 'relative' }}>
          <div
            style={{
              height: '1rem',
              width: '10rem',
              background: 'rgba(0,0,0,0.3)',
            }}
          >
            bar
          </div>
        </div>
      </div>
      {stageData &&
        stageData.map((s, i) =>
          s._id ? <Stage key={`pro${s.id}`} nr={i + 1} data={s} /> : 'filler',
        )}
    </div>
  );
};

const Stage = ({ nr, data }) => {
  const [stageCompletion, setStageCompletion] = useState(0);
  const [resolved, setResolved] = useState(0);
  const [total, setTotal] = useState(0);
  const [unResolved, setUnResolved] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  async function mapTasks() {
    let reso = 0;
    let unreso = 0;
    let total = 0;
    let timeRemaining = 0;

    (await data) &&
      data.tasks.length > 0 &&
      data.tasks.map((task, i) =>
        task.subtasks.map((subtask, i) =>
          subtask.resolved
            ? ((reso = reso + 1), (total = total + 1))
            : ((unreso = unreso + 1), (total = total + 1)),
        ),
      );

    (await data) &&
      data.tasks.length > 0 &&
      data.tasks.map((task, i) =>
        task.subtasks.map(
          (subtask, i) =>
            (timeRemaining = timeRemaining + subtask.timeRemaining),
        ),
      );

    let percentage = (reso * 100) / (reso + unreso);

    setTimeLeft(timeRemaining);
    setTotal(reso + unreso);
    setResolved(reso);
    setUnResolved(unreso);
    setStageCompletion(Math.round(percentage));
  }

  mapTasks();

  return (
    <div className={css.stage}>
      <>
        <div className={css.labeled}>
          <div style={{ display: 'flex' }}>
            <AiOutlineClockCircle size="1rem" />
            <h5>:</h5>
          </div>

          <h5>
            {timeLeft ? timeLeft : '-'}
            <span>min</span>
          </h5>
          <h6 className="bg pc3b">Projected time left:</h6>
        </div>

        <div className={css.labeled}>
          <AiOutlineDeliveredProcedure size="1rem" />
          <h5>:</h5>
          <h5>{data && data.deadline}</h5>

          <h6 className="bg pc3b">deadline:</h6>
        </div>

        <div className={css.labeled}>
          <AiOutlineUnorderedList size="1rem" />
          <h5>:</h5>
          <h5 style={{ color: 'green' }}>{resolved ? resolved : '-'}</h5>
          <h5>/{total === 0 ? '-' : total}</h5>

          <h6 className="bg pc3b">Task completion status</h6>
        </div>

        <CircleDiagram completion={stageCompletion} />
      </>
    </div>
  );
};

const CircleDiagram = ({ completion }) => {
  return completion === 100 ? (
    //COMPLETE
    <div className={css.circleDiagram}>
      <h6>{completion}%</h6>

      <Diagram
        size="100%"
        factor={`${1 - completion / 100}`}
        strokeWidth={20}
      />
    </div>
  ) : completion === 0 ? (
    //NOT STARTED
    <div className={css.circleDiagram}>
      <h6>-</h6>

      <div className={css.pseudoCircle}>
        <Diagram size="100%" factor={`${0}`} strokeWidth={20} />
      </div>

      <Diagram
        size="100%"
        factor={`${1 - completion / 100}`}
        strokeWidth={20}
      />
    </div>
  ) : (
    <div className={css.circleDiagram}>
      <h6>{completion}%</h6>

      <Diagram
        size="100%"
        factor={`${1 - completion / 100}`}
        strokeWidth={20}
      />
    </div>
  );
};
