import React from 'react';
import './styles.css';
import TodosTitle from '../../components/Title';

interface MainPageTemplateProps {
  title: string
}

const MainPageTemplate: React.FC<MainPageTemplateProps> = ({
  title
}) => {
  return (
    <div className='wrapper'>
      {/* <Header /> */}
      <main className='main'>
        <div className='container main__container'>
          <TodosTitle title={title} />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default MainPageTemplate;