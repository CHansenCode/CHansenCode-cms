import { useState } from 'react';

import css from './Ticket.module.scss';

import { Button, InputField } from 'chansencode-lib';
import {
  AiOutlineHourglass,
  AiOutlineComment,
  AiOutlineBook,
} from 'react-icons/ai';
import { RiQuestionAnswerLine } from 'react-icons/ri';

export function Ticket({ data, onClick }) {
  return (
    <div className={`sc1bg sc05b ${css.ticket}`}>
      <div className={`bg pc3b ${css.staticInfo}`} onClick={onClick}>
        {data ? (
          <>
            <div className={css.info}>
              <div>
                <h6>title: </h6>
                <p>{data.title}</p>
              </div>
              <div>
                <h6>created by: </h6>
                <p>{data.createdBy}</p>
              </div>
              <div>
                <h6>title: </h6>
                <p>name</p>
              </div>
            </div>

            <div className={css.filler}>
              <div>
                <h6>excerpt: </h6>
                <p>{data.whatHappened}</p>
              </div>
            </div>

            <div className={css.time}>
              <div>
                <h6>created by:</h6>
                <p>{data.createdBy}</p>
              </div>
              <div>
                <h6>created At:</h6>
                <p>{data.createdAt && data.createdAt.substring(0, 10)}</p>
              </div>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>

      <div className={`${css.interactiveButtons}`}>
        <div className={`bg pc3b ${css.status}`}>
          <Status status={data.status} />
          <span className="bg pc3b">
            <h5>status:</h5>
            {data.status}
          </span>
        </div>
        <div className={`bg pc3b ${css.status}`}>
          <AiOutlineComment size="2rem" />
          <span className="bg pc3b">View comments for this ticket</span>
        </div>
        <div className={`bg pc3b ${css.status}`}>
          <AiOutlineBook size="2rem" />
          <span className="bg pc3b">Log</span>
        </div>
        <div className={`bg pc3b ${css.status}`}>
          <Status status={data.status} />
          <span className="bg pc3b">More Info</span>
        </div>
      </div>
    </div>
  );
}

const Status = ({ status }) => {
  const [open, setOpen] = useState(false);
  const user = {
    role: 'admin',
    username: 'cadmin',
  };
  switch (status) {
    case 'resolved':
      return <div className="sc">resolved!</div>;
    case 'in progress':
      return <div className="sc">resolved!</div>;
    case 'on hold':
      return <div className="sc">resolved!</div>;
    case 'pending':
      return <AiOutlineHourglass size="2rem" />;
    case 'unhandled':
      return <RiQuestionAnswerLine size="2rem" />;
    default:
      return 'Unregcognized status';
  }
};
