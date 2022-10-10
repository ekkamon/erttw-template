import React from 'react';
import { WindowTitle } from './WindowTitle';
import { WindowButtons } from './WindowButtons';

export const WindowTitleBar: React.FC = () => {
  return (
    <div className="h-10 w-full flex flex-row draggable">
      <WindowTitle />
      <WindowButtons />
    </div>
  );
};
