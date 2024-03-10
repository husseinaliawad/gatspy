import React from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Footer from '../components/Footer';

const ProfilePage: React.FC = () => {
  return (
    <div className="profile-page">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
};

export default ProfilePage;