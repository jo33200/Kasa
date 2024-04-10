import './Banner.scss';
import imgAccueil from '../../assets/Image-source1.png';

function HomeBanniere() {
  return (
    <div className='accueil-banniere'>
      <img src={imgAccueil} alt='vue de falaises' />
      <p>Chez vous, partout et ailleurs</p>
    </div>
    );
}

export default HomeBanniere;