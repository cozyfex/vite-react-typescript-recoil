import React from 'react';

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="content">
      {children}
    </div>
  );
};

export default BaseLayout;
