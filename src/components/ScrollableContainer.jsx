import React, { useRef } from 'react';
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
    <div className="relative w-full">
      <button
        className="absolute -left-5 top-1/2 transform -translate-y-1/2 p-2 bg-transparent hover:bg-transparent z-10 border-none"
        onClick={scrollLeft}
      >
        ◀
      </button>
      <div
        className="flex justify-start items-start gap-2 w-full overflow-y-hidden overflow-x-hidden p-2"
        ref={containerRef}
      >
        <AvatarName name="API P100" />
        <AvatarName name="API IREV" />
        <AvatarName name="API GETLINKED" />
        <AvatarName name="API MANTILLA+SPLASH" />
        <AvatarName name="API HADES" />
      </div>
      <button
        className="absolute -right-5 top-1/2 transform -translate-y-1/2 p-2 *:bg-transparent hover:bg-transparent z-10 border-none"
        onClick={scrollRight}
      >
        ▶
      </button>
    </div>
  );
};

export default ScrollableContainer;