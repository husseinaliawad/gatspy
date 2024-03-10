import React from 'react';
import Header from '../components/Header';
import Explore from '../components/Explore';
import Footer from '../components/Footer';

const ExplorePage: React.FC = () => {
  return (
    <div className="explore-page">
      <Header />
      <Explore />
      <Footer />
    </div>
  );
};

export default ExplorePage;