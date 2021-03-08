import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MainContent from '../../components/MainContent';
import TopContent from '../../components/TopContent';

const Dashboard: React.FC = () => {
  return (
    // <div style={{ display: 'flex', flexDirection: 'column' }}>
    //   <h5>Teste DashBoard</h5>
    //   <h1>Teste DashBoard</h1>
    // </div>
    <MainContent>
      <TopContent
        description="Dashboard"
        breadcrumb={['']}
        icon={DashboardIcon}
      />
    </MainContent>
  );
};

export default Dashboard;
