import './Home.scss';
import Banner from '../../components/Banner/Banner';
import imgAccueil from '../../assets/Image-source1.png';
import CardContainer from '../../components/Card/Card';

function Home() {
 

  return (
    <div className='home'>
      <Banner imgSrc={imgAccueil} altText='vue de falaises' overlay>
            <span className="desktop-text">Chez vous, partout et ailleurs</span>
            <span className="mobile-text">Chez vous,</span>
            <span className="mobile-text">partout et ailleurs</span>
        </Banner>
      <CardContainer />
    </div>
  );
}

export default Home;