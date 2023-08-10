import type { Metadata } from 'next';

import { Hello } from '@/components/Hello';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'User dashboard',
};

const Dashboard = () => (
  <div className="content">
    <Hello />
  </div>
);

export default Dashboard;
