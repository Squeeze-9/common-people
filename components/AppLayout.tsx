import React from 'react';

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <div>공통 메뉴</div>
      {children}
    </div>
  );
};

export default AppLayout;
