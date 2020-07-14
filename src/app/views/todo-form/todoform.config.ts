//import { Validators } from '@angular/forms';

import { Todo } from '../../models/Todo';

export const defaultValues = {
  id: null,
  userId: null,
  title: '',
  completed: false,
};

export const setData = (data: Todo) => {
  console.log(data);
  return {
    id: [data.id],
    userId: [data.userId],
    title: [data.title],
    completed: [data.completed],
  };
};

export const props = {
  ngCols: ['col-6', 'col-6', 'col-6'],

  properties: [
    {
      name: 'userId',
      type: 'text',
      label: 'User ID',
      placeholder: 'Insert User Id',
      inputType: 'field',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      placeholder: 'Insert Title',
      inputType: 'field',
    },
    {
      name: 'completed',
      type: 'checkbox',
      msg: 'Is it completed?',
      label: 'Completed?',
      inputType: 'checkbox',
    },
  ],
};
