import React from 'react';
import { WindowTitleBar } from 'renderer/components/WindowTitleBar';
import { useAppDispatch, useAppSelector } from 'renderer/redux/store';
import { increase, decrease } from 'renderer/redux/features/counter';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);

  return (
    <>
      <WindowTitleBar />
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increase())}>increase</button>
      <button onClick={() => dispatch(decrease())}>decrease</button>
    </>
  );
};

export default App;
