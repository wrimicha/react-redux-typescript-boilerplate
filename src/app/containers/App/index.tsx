import React, { KeyboardEvent, useState } from 'react';
import style from './style.css';
import { RouteComponentProps } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useTodoActions } from 'app/actions';
import { RootState } from 'app/reducers';
import { TodoModel } from 'app/models';
import { Header, Footer } from 'app/components';

const FILTER_VALUES = (Object.keys(TodoModel.Filter) as (keyof typeof TodoModel.Filter)[]).map(
  (key) => TodoModel.Filter[key]
);

const FILTER_FUNCTIONS: Record<TodoModel.Filter, (todo: TodoModel) => boolean> = {
  [TodoModel.Filter.SHOW_ALL]: () => true,
  [TodoModel.Filter.SHOW_ACTIVE]: (todo) => !todo.completed,
  [TodoModel.Filter.SHOW_COMPLETED]: (todo) => todo.completed
};

type NoteType = {
  text: string;
  bgColor: string;
}

export namespace App {
  export interface Props extends RouteComponentProps<void> {}
}

export const App = ({ history, location }: App.Props) => {

  //const dispatch = useDispatch();
  // const todoActions = useTodoActions(dispatch);
  // const { todos, filter } = useSelector((state: RootState) => {
  //   const hash = location?.hash?.replace('#', '');
  //   return {
  //     todos: state.todos,
  //     filter: FILTER_VALUES.find((value) => value === hash) ?? TodoModel.Filter.SHOW_ALL
  //   };
  // });

  // const handleClearCompleted = React.useCallback((): void => {
  //   todoActions.clearCompleted();
  // }, [todoActions]);

  // const handleFilterChange = React.useCallback(
  //   (filter: TodoModel.Filter): void => {
  //     history.push(`#${filter}`);
  //   },
  //   [history]
  // );

  // const filteredTodos = React.useMemo(() => (filter ? todos.filter(FILTER_FUNCTIONS[filter]) : todos), [todos, filter]);
  // const activeCount = React.useMemo(() => todos.filter((todo) => !todo.completed).length, [todos]);
  // const completedCount = React.useMemo(() => todos.filter((todo) => todo.completed).length, [todos]);


  //////

  const [selectedColor, setSelectedColor] = useState('blue');
  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState<NoteType[]>([{
    text: 'This is my note',
    bgColor: 'blue'
  }]);

  const handleTextInputChange = (text: string) => {
    setNoteText(text);
  };

  const handleColorSelect = (text: string) => {
    setSelectedColor(text);
  };

  const handleDeleteNote = (index: number) => {
    let updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  }

  const submitNote = () => {
    const newNote: NoteType = {
      text: noteText,
      bgColor: selectedColor
    }
    setNotes([...notes, newNote])
    setNoteText('');
  }

  // const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
  //   if (event.key === 'Enter') { // 13 is the keycode for the Enter key
  //     event.preventDefault(); // prevent the default behavior of the Enter key
  //     const submitBtn = document.getElementById('submitBtn');
  //     if (submitBtn) {
  //       submitBtn.click();
  //     }
  //   }
  // }

  return (
    <div>
      <p>Hello</p>
    </div>
  );
};
