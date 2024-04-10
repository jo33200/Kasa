import  './Banner.scss';

function Banner({ imgSrc, altText, children }) {
  return (
    <div className='banner'>
      <img src={imgSrc} alt={altText} />
      {children && <p>{children}</p>}
    </div>
  );
}

export default Banner;