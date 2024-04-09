import './Home.scss';
import HomeBanniere from './HomeBanniere';
import CardContainer from '../../components/Card/Card';

function Home() {
 

  return (
    <div className='home'>
      <HomeBanniere />
      <CardContainer />
    </div>
  );
}

export default Home;