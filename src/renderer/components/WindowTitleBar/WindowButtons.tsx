import React, { useState } from 'react';
import { ipcRenderer } from 'electron';
import { WindowsControl } from 'react-windows-controls';
import channels from 'common/channels';

export const WindowButtons: React.FC = () => {
  const handleMinimize = () => {
    ipcRenderer.send(channels.window.minimize);
  };

  const handleMaximize = () => {
    ipcRenderer.send(channels.window.maximize);
  };
  const handleClose = () => {
    ipcRenderer.send(channels.window.close);
  };

  return (
    <div className="flex flex-row ml-auto not-draggable">
      <WindowsControl minimize whiteIcon onClick={handleMinimize} />
      <WindowsControl maximize whiteIcon onClick={handleMaximize} />
      <WindowsControl close whiteIcon onClick={handleClose} />
    </div>
  );
};
