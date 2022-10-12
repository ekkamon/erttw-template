import React, { FC } from 'react';
import { WindowTitleBar } from 'renderer/components/WindowTitleBar';
import { useAppDispatch, useAppSelector } from 'renderer/redux/store';
import { increase, decrease } from 'renderer/redux/features/counter';

type ButtonProps = {
  className: string;
  children?: React.ReactNode;
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button
      className={`pt-1 pb-1 pl-4 pr-4 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);

  return (
    <>
      <WindowTitleBar />
      <div className="text-center">
        <h1 className="mb-3">Counter: {counter}</h1>
        <div className="justify-center flex flex-row gap-3">
          <Button className="bg-blue-700" onClick={() => dispatch(increase())}>
            increase
          </Button>
          <Button className="bg-red-700" onClick={() => dispatch(decrease())}>
            decrease
          </Button>
        </div>
      </div>
    </>
  );
};

export default App;
