import React from 'react';
import { render } from 'react-dom';
import KanbanBoard from './kanbanBoard'

let cardsList = [
  {
    id: 1,
    title: "Read the book",
    description: "Read the whole book",
    status: "in-progress",
    tasks: [
      { id: 1, name: 'Prologue', done: true },
      { id: 2, name: 'Contents', done: false }
    ]
  }
];

render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
