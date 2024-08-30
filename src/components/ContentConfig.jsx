
export const ContentConfig = () => {
    return (
        <div className="flex flex-1 sm:justify-end justify-center items-center sm:w-full w-full pr-20 border border-[#6A6A6A] rounded-lg p-3">
        <h2 className='text-white flex-1 w-full text-lg font-bold'>Regla solo para colombia</h2>
        <div className='flex justify-end items-end flex-col gap-2 '>
            <button className='flex flex-row-reverse p-2 w-20 justify-between items-center hover:bg-blue-700 bg-blue-700'>
                <svg width="14px" height="14px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29289 3.70711L1 11V15H5L12.2929 7.70711L8.29289 3.70711Z" fill="#ffffff"/>
                    <path d="M9.70711 2.29289L13.7071 6.29289L15.1716 4.82843C15.702 4.29799 16 3.57857 16 2.82843C16 1.26633 14.7337 0 13.1716 0C12.4214 0 11.702 0.297995 11.1716 0.828428L9.70711 2.29289Z" fill="#ffffff"/>
                </svg>
                <span>Editar</span> 
            </button>
            <button className='flex flex-row-reverse p-2 w-20 justify-between items-center border border-red-500 bg-transparent hover:bg-transparent text-red-500'>                               
                <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4096 5.50506C13.0796 3.83502 13.9146 3 14.9522 3C15.9899 3 16.8249 3.83502 18.4949 5.50506C20.165 7.1751 21 8.01013 21 9.04776C21 10.0854 20.165 10.9204 18.4949 12.5904L14.3017 16.7837L7.21634 9.69828L11.4096 5.50506Z" fill="#ef4444"/>
                    <path d="M6.1557 10.759L13.2411 17.8443L12.5904 18.4949C12.2127 18.8727 11.8777 19.2077 11.5734 19.5H21C21.4142 19.5 21.75 19.8358 21.75 20.25C21.75 20.6642 21.4142 21 21 21H9C7.98423 20.9747 7.1494 20.1393 5.50506 18.4949C3.83502 16.8249 3 15.9899 3 14.9522C3 13.9146 3.83502 13.0796 5.50506 11.4096L6.1557 10.759Z" fill="#ef4444"/>
                </svg>
                <span className='text-red-500'>Eliminar</span>
            </button>
        </div>
    </div>
    );
};

