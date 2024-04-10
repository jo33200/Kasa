import './Home.scss';
import Banner from '../../components/Banner/Banner';
import imgAccueil from '../../assets/Image-source1.png';
import CardContainer from '../../components/Card/Card';

function Home() {
 

  return (
    <div className='home'>
      <Banner imgSrc={imgAccueil} altText='vue de falaises' overlay>Chez vous, partout et ailleurs</Banner>
      <CardContainer />
    </div>
  );
}

export default Home;