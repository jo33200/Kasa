import  './Banner.scss';

function Banner({ imgSrc, altText, children, overlay }) {
  return (
    <div className={`banner ${overlay ? 'overlay' : ''}`}>
      <img src={imgSrc} alt={altText} />
      {children && <p>{children}</p>}
    </div>
  );
}

export default Banner;