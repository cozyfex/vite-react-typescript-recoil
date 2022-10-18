import BaseLayout from '@layouts/BaseLayout';
import React from 'react';

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <BaseLayout>
      {children}
    </BaseLayout>
  );
};

export default LoginLayout;
