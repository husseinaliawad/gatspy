import React from 'react';
import Header from '../components/Header';
import Feed from '../components/Feed';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <Feed />
      <Footer />
    </div>
  );
};

export default Home;