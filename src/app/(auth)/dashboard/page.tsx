import type { Metadata } from 'next';

import { Main } from '@/templates/Main';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'User dashboard',
};

const Dashboard = async () => {
  return (
    <Main>
      <p>Hello</p>
    </Main>
  );
};

export default Dashboard;
