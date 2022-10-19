import BaseLayout from '@layouts/BaseLayout';
import React from 'react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <BaseLayout>
      {children}
    </BaseLayout>
  );
};

export default AdminLayout;
