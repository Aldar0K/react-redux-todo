import React from 'react';
import './styles.css';
import Title from '../../components/Title';
import Todo from '../../containers/Todo';

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
          <Title title={title} />
          <Todo />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default MainPageTemplate;