import { useRef } from "react";
import { Countries } from "./Countries"
import useStore from './useStore';
import './styles/Search.css';

export const ContentApis = ({nameapi}) => {
    return (
        <div className='w-full h-16 p-2'>
        <h4 className='text-[#6A6A6A] font-sans font-light mb-2'>{nameapi}</h4>
        <div className='flex max-w-[750px] md:max-w-96 flex-row gap-2 w-full flex-1 justify-start items-center overflow-x-scroll no-scrollbar'>
           <Countries country="CO" />
           <Countries country="US" />
           <Countries country="PA" />
           <Countries country="CA" />
           <Countries country="VE" />
           <Countries country="CO" />
           <Countries country="US" />
           <Countries country="PA" />
           <Countries country="CA" />
           <Countries country="VE" />
           <Countries country="PA" />
           <Countries country="CA" />
           <Countries country="VE" />
           <Countries country="PA" />
           <Countries country="CA" />
           <Countries country="VE" />
           <Countries country="PA" />
           <Countries country="CA" />
           <Countries country="VE" />
           <Countries country="PA" />
           <Countries country="CA" />
           <Countries country="VE" />
           <Countries country="PA" />
           <Countries country="CA" />
           <Countries country="VE" />
           <Countries country="PA" />
           <Countries country="CA" />
           <Countries country="VE" />
        </div>
    </div>
    )
}

export const SeeCountries = () => {
  const { selectedCountries, removeCountry } = useStore();
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full max-w-80 min-w-9">
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
        className="flex justify-start items-start gap-6 w-full overflow-y-hidden overflow-x-scroll p-2 whitespace-nowrap no-scrollbar"
        ref={containerRef}
      >
        {selectedCountries.map((country) => (
          <button
          onClick={() => removeCountry(country.cca3)}
          key={country.cca3}
          className="flex flex-row w-40 justify-center items-center bg-transparent hover:bg-transparent border-none outline-none active:outline-none focus-visible:outline-none rounded-none relative"
        >
          <div className="relative">
            <div style={{ width: '30px', height: '30px' }}>
              <img
                src={country.flags.svg}
                alt={`${country.name.common} flag`}
                className="country-flag hover:hidden" 
              />
            </div>

            <div className="deletemessage">
              <svg
                width="40"
                height="40"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-red-500/5"
              >
                <circle cx="10" cy="10" r="10" fill="red" />
                <path
                  d="M6 6 L14 14 M14 6 L6 14"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <span className="text-white text-[16px]">{country.cca3}</span>
        </button>
        ))}
      </div>
      <button
        className="absolute -right-5 top-1/2 transform -translate-y-1/2 p-2 bg-transparent hover:bg-transparent z-10 border-none outline-none active:outline-none focus-visible:outline-none"
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