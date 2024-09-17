import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState('dashboard');

  // Sample data for charts
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'User Growth',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const barChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Number of Orders',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <Box>
            <Typography variant="h4" gutterBottom>
              Dashboard Content
            </Typography>
            {/* Line Chart */}
            <Box sx={{ marginBottom: 4, width: '400px', height: '300px' }}>
              <Line data={lineChartData} />
            </Box>
            {/* Bar Chart */}
            <Box sx={{ width: '400px', height: '300px' }}>
              <Bar data={barChartData} />
            </Box>
          </Box>
        );
      case 'users':
        return <Typography variant="h4">User Management</Typography>;
      case 'settings':
        return <Typography variant="h4">Settings</Typography>;
      default:
        return <Typography variant="h4">Welcome to Admin Panel</Typography>;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar Menu */}
      <Drawer variant="permanent" anchor="left">
        <List>
          <ListItem button onClick={() => setActivePage('dashboard')}>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={() => setActivePage('users')}>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button onClick={() => setActivePage('settings')}>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: '240px' }}>
        {renderContent()}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
