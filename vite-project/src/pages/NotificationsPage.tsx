import React from 'react';
import Header from '../components/Header';
import Notifications from '../components/Notifications';
import Footer from '../components/Footer';

const NotificationsPage: React.FC = () => {
  return (
    <div className="notifications-page">
      <Header />
      <Notifications />
      <Footer />
    </div>
  );
};

export default NotificationsPage;