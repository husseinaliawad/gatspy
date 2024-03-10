import React from 'react';
import Home from '../pages/Home';
import ProfilePage from '../pages/ProfilePage';
import ExplorePage from '../pages/ExplorePage';
import NotificationsPage from '../pages/NotificationsPage';

const App: React.FC = () => {
  const currentPath = window.location.pathname;

  const renderPage = () => {
    if (currentPath === '/') {
      return <Home />;
    } else if (currentPath === '/profile') {
      return <ProfilePage />;
    } else if (currentPath === '/explore') {
      return <ExplorePage />;
    } else if (currentPath === '/notifications') {
      return <NotificationsPage />;
    } else {
      // Handle unknown routes or 404 page
      return <div>Error: Page not found</div>;
    }
  };

  return <div>{renderPage()}</div>;
};

export default App;