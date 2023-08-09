import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'User dashboard',
};

const Dashboard = async () => {
  return (
    <div className="content">
      <p>Hello</p>
    </div>
  );
};

export default Dashboard;
