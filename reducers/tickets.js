import {
  GET_TICKETS,
  CREATE_TICKET,
  UPDATE_TICKET,
  DELETE_TICKET,
} from 'actions';

const tickets = (tickets = initialProps, action) => {
  switch (action.type) {
    case GET_TICKETS:
      return action.payload;
    case CREATE_TICKET:
      return [...tickets, action.payload];
    case UPDATE_TICKET:
      return tickets.map(ticket =>
        ticket._id === action.payload._id ? action.payload : ticket,
      );
    case DELETE_TICKET:
      return tickets.filter(tickets => tickets._id === action.payload);
    default:
      return tickets;
  }
};

const initialProps = [];

export default tickets;
