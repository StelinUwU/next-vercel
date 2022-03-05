import { FC } from 'react';

export const DarkLayout: FC = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: '#1a1a1a',
        borderRadius: '5px',
        padding: '10px',
      }}
    >
      <h3>Dark Layout</h3>
      <div>{children}</div>
    </div>
  );
};
