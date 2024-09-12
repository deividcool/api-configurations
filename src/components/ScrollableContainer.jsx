import { useRef } from 'react';
import { AvatarName } from './Avatar';

const ScrollableContainer = () => {
  // Referencia al contenedor deslizante
  const containerRef = useRef(null);

  // Función para desplazar el contenedor a la izquierda
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -100, behavior: 'smooth' }); // Ajusta el valor para la cantidad de desplazamiento
    }
  };

  // Función para desplazar el contenedor a la derecha
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 100, behavior: 'smooth' }); // Ajusta el valor para la cantidad de desplazamiento
    }
  };

  return (
    <div className="relative w-full ">
      <button
        className="absolute -left-5 top-1/2 transform -translate-y-1/2 p-2 bg-transparent hover:bg-transparent z-10 border-none outline-none active:outline-none focus-visible:outline-none "
        onClick={scrollLeft}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <g clipPath="url(#clip0_60_2)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.475 19.7188L15.2402 17.9537L7.28523 9.99872L15.2402 2.04377L13.4724 0.276001L3.74969 9.99872L13.475 19.7188Z"
              fill="#373737"
            />
          </g>
          <defs>
            <clipPath id="clip0_60_2">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div
        className="flex justify-start items-start gap-2 w-full overflow-y-hidden overflow-x-hidden p-2 "
        ref={containerRef}
      >
        <AvatarName name="API P100" />
        <AvatarName name="API IREV" />
        <AvatarName name="API GETLINKED" />
        <AvatarName name="API MANTILLA+SPLASH" />
        <AvatarName name="API HADES" />
      </div>
      <button
        className="absolute -right-5 top-1/2 transform -translate-y-1/2 p-2 *:bg-transparent hover:bg-transparent z-10 border-none bg-transparent outline-none active:outline-none focus-visible:outline-none"
        onClick={scrollRight}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.99741 0.557153L8.23223 2.32233L16.1872 10.2773L8.23223 18.2322L10 20L19.7227 10.2773L9.99741 0.557153Z"
            fill="#373737"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollableContainer;