import React from 'react';
import './styles.css';

const MainPageTemplate: React.FC = () => {
  return (
    <div className='wrapper'>
      {/* <Header /> */}
      <main className='main'>
        <div className='container main__container'>
          <h1>Hello</h1>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default MainPageTemplate;