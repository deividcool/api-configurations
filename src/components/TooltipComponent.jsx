import { ConstructionIcon } from 'lucide-react';
import { useState } from 'react';

export function TooltipComponent({tittleUrl, handleEliminarId, handleEditarId }) {
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseMove = (event) => {
    setTooltipPosition({
      top: event.clientY ,
      left: event.clientX ,
    });
  };

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };


  return (
    <div className='relative flex h-16 w-full rounded-lg p-2 bg-[#20222f] justify-between'>
      <div
        className='w-[350px] group flex justify-start items-start overflow-hidden p-4 max-w-xs text-right'
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h3 className='text-sm text-[#c7b457] font-bold whitespace-nowrap overflow-hidden text-ellipsis'>
        {tittleUrl.url}
        </h3>
        {isTooltipVisible && (
          <span
          className='absolute border-white bg-slate-800 border text-white text-xs rounded p-2 z-10 top-[4.5rem] left-4'>
            {tittleUrl.url}
          </span>
        )}
      </div>
      <div className="flex flex-row justify-start items-center w-[100px] overflow-x-auto scrollbar-track-transparent scrollbar-thumb-gray-400  [&::-webkit-scrollbar]:w-0.5 [&::-webkit-scrollbar]:h-0.5 [&::-webkit-scrollbar-track]:bg-gray-700 [&::-webkit-scrollbar-thumb]:bg-blue-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-blue-800">
        {Object.entries(tittleUrl.country_data).map(([country, data]) => (
          data && Object.keys(data).length > 0 ? (
            <div key={country} className="flex flex-col items-center group cursor-pointer">
              <h3 className="text-sm text-[#c7b457] font-bold whitespace-nowrap overflow-hidden text-ellipsis mx-0.5">
                {country}
              </h3>
              <div className="absolute bottom-[50px] left-[70%] transform -translate-x-1/2 hidden group-hover:flex flex-col bg-black text-white text-xs p-2 rounded-md shadow-md z-[10] min-w-[100px] text-center">
                <strong>{country}</strong>
                {Object.entries(data).map(([key, value]) => (
                  <p key={key}>{`${key}: ${value}%`}</p>
                ))}
              </div>
            </div>
          ) : null
        ))}
      </div>
      <div className='flex justify-center items-center gap-2'>
        <button onClick={() => handleEditarId(tittleUrl.url)} className='flex justify-center items-center h-8 w-8 p-0 m-0 bg-transparent border border-gray-400 shadow-xl rounded-lg bg-slate-600 hover:bg-blue-700/25'>
        <svg
          width='20px'
          height='20px'
          viewBox='0 -0.5 25 25'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M17.7 5.12758L19.266 6.37458C19.4172 6.51691 19.5025 6.71571 19.5013 6.92339C19.5002 7.13106 19.4128 7.32892 19.26 7.46958L18.07 8.89358L14.021 13.7226C13.9501 13.8037 13.8558 13.8607 13.751 13.8856L11.651 14.3616C11.3755 14.3754 11.1356 14.1751 11.1 13.9016V11.7436C11.1071 11.6395 11.149 11.5409 11.219 11.4636L15.193 6.97058L16.557 5.34158C16.8268 4.98786 17.3204 4.89545 17.7 5.12758Z'
              stroke='#dedede'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M12.033 7.61865C12.4472 7.61865 12.783 7.28287 12.783 6.86865C12.783 6.45444 12.4472 6.11865 12.033 6.11865V7.61865ZM9.23301 6.86865V6.11865L9.23121 6.11865L9.23301 6.86865ZM5.50001 10.6187H6.25001L6.25001 10.617L5.50001 10.6187ZM5.50001 16.2437L6.25001 16.2453V16.2437H5.50001ZM9.23301 19.9937L9.23121 20.7437H9.23301V19.9937ZM14.833 19.9937V20.7437L14.8348 20.7437L14.833 19.9937ZM18.566 16.2437H17.816L17.816 16.2453L18.566 16.2437ZM19.316 12.4937C19.316 12.0794 18.9802 11.7437 18.566 11.7437C18.1518 11.7437 17.816 12.0794 17.816 12.4937H19.316ZM15.8863 6.68446C15.7282 6.30159 15.2897 6.11934 14.9068 6.2774C14.5239 6.43546 14.3417 6.87397 14.4998 7.25684L15.8863 6.68446ZM18.2319 9.62197C18.6363 9.53257 18.8917 9.13222 18.8023 8.72777C18.7129 8.32332 18.3126 8.06792 17.9081 8.15733L18.2319 9.62197ZM8.30001 16.4317C7.8858 16.4317 7.55001 16.7674 7.55001 17.1817C7.55001 17.5959 7.8858 17.9317 8.30001 17.9317V16.4317ZM15.767 17.9317C16.1812 17.9317 16.517 17.5959 16.517 17.1817C16.517 16.7674 16.1812 16.4317 15.767 16.4317V17.9317ZM12.033 6.11865H9.23301V7.61865H12.033V6.11865ZM9.23121 6.11865C6.75081 6.12461 4.7447 8.13986 4.75001 10.6203L6.25001 10.617C6.24647 8.96492 7.58269 7.62262 9.23481 7.61865L9.23121 6.11865ZM4.75001 10.6187V16.2437H6.25001V10.6187H4.75001ZM4.75001 16.242C4.7447 18.7224 6.75081 20.7377 9.23121 20.7437L9.23481 19.2437C7.58269 19.2397 6.24647 17.8974 6.25001 16.2453L4.75001 16.242ZM9.23301 20.7437H14.833V19.2437H9.23301V20.7437ZM14.8348 20.7437C17.3152 20.7377 19.3213 18.7224 19.316 16.242L17.816 16.2453C17.8195 17.8974 16.4833 19.2397 14.8312 19.2437L14.8348 20.7437ZM19.316 16.2437V12.4937H17.816V16.2437H19.316ZM14.4998 7.25684C14.6947 7.72897 15.0923 8.39815 15.6866 8.91521C16.2944 9.44412 17.1679 9.85718 18.2319 9.62197L17.9081 8.15733C17.4431 8.26012 17.0391 8.10369 16.6712 7.7836C16.2897 7.45165 16.0134 6.99233 15.8863 6.68446L14.4998 7.25684ZM8.30001 17.9317H15.767V16.4317H8.30001V17.9317Z'
              fill='#dedede'
            ></path>
          </g>
        </svg>
        </button>
        <button onClick={ () => handleEliminarId(tittleUrl.id)} className='flex justify-center items-center h-8 w-8 p-0 m-0 bg-transparent border border-red-700 shadow-xl bg-slate-600 rounded-lg hover:bg-red-700/25'>
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke="#bf3b3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </button>
      </div>
    </div>
  );
}
