import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Section, Ticket, FormAside, ObjectViewer } from 'components';
import { InputField, Button } from 'chansencode-lib';

import {
  getTickets,
  createTicket,
  updateTicket,
  deleteTicket,
} from 'pages/api';

import { ticketForm } from 'config';

export default function Tickets() {
  const dispatch = useDispatch();

  const [activeId, setActiveId] = useState(null);
  const [controller, setController] = useState({
    creatingNew: false,
    view: 'tickets',
    openForm: false,
  });
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    status: 'pending',
    category: '',
    resolved: false,
    whatHappened: '',
    whatSupposed: '',
    comments: [],
    createdAt: '',
    createdBy: '',
  });

  //#region  init & listeners
  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  const data = useSelector(state => state.tickets);
  const myData = data.filter((ticket, i) => ticket.users);

  const selectedTicket = useSelector(
    state => activeId && state.tickets.find(ticket => ticket._id === activeId),
  );
  useEffect(() => {
    selectedTicket && setFormData({ ...selectedTicket });
  }, [selectedTicket]);
  //#endregion

  const user = {
    role: 'admin',
    username: 'cadmin',
  };

  async function handleSubmit() {
    activeId
      ? dispatch(updateTicket(formData, activeId))
      : dispatch(createTicket(formData));
  }
  async function clear() {
    setActiveId(null);
    setFormData({});
  }
  async function onClickClear() {
    setActiveId(null);
    setFormData({});
  }

  return (
    <Section title="TICKET SYSTEM">
      <div style={{ minHeight: '86vh' }}>
        {activeId}
        <div style={{ display: 'flex' }}>
          <Button
            onClick={() =>
              setController({ ...controller, openForm: !controller.openForm })
            }
          >
            open form
          </Button>
          <Button
            onClick={() => setController({ ...controller, view: 'newTicket' })}
          >
            WRITE NEW TICKET
          </Button>
          <Button
            onClick={() => setController({ ...controller, view: 'oldTicket' })}
          >
            OPEN TICKETS
          </Button>
        </div>

        <NewTicket />

        <div>
          <>
            <h4>ACTIVE TICKETS:</h4>
            {data &&
              data.map((ticket, i) => (
                <Ticket
                  key={ticket._id}
                  data={ticket}
                  onClick={() =>
                    activeId ? setActiveId(null) : setActiveId(ticket._id)
                  }
                />
              ))}
          </>
        </div>

        <FormAside toggle={controller.openForm}>
          {ticketForm.map((input, i) => (
            <InputField
              key={`inputField${i}`}
              label={input.label}
              objKey={input.objKey}
              type={input.type}
              options={input.options}
              value={formData[input.objKey]}
              data={formData}
              setData={setFormData}
            />
          ))}

          <div style={{ display: 'flex' }}>
            <Button onClick={handleSubmit}>
              {activeId ? 'Update ticket' : 'Create new ticket'}
            </Button>
            <Button onClick={clear}>Clear form</Button>
          </div>
        </FormAside>

        <ObjectViewer data={formData} />

        <div>Ticket history</div>
      </div>
    </Section>
  );
}

const NewTicket = () => {
  return <div>title</div>;
};
