const Header = () => {
    return (
        <header className="absolute top-3 mb-30 max-w-screen-xl w-11/12">
            <div className="relative h-12 w-full text-center">
                <h1 className="capitalize md:text-5xl text-2xl lg:text-3xl font-bold text-center text-white relative z-20">
                    api controller
                </h1>
                <div className="flex flex-1 justify-center items-center -z-30">
                    <div className="w-[40rem] h-40 relative">
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                    </div>
                </div>
            </div>
            <div className="w-11/12 relative flex-row flex gap-3 justify-start items-center">
                <div
                    className="p-4 overflow-hidden w-[50px] h-[50px] hover:w-[270px] bg-[#4070f4] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300"
                >
                    <div className="flex items-center justify-center fill-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Isolation_Mode"
                        data-name="Isolation Mode"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                    >
                        <path
                        d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"
                        ></path>
                    </svg>
                    </div>
                    <input
                    type="text"
                    className="outline-none text-[20px] bg-transparent w-full text-white font-normal px-4"
                    />
                </div>

                <button>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Create
                    </span>
                </button>
                
                <button class="open-file">
                    <span class="file-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 71 67">
                        <path
                            stroke-width="5"
                            stroke="black"
                            d="M41.7322 11.7678L42.4645 12.5H43.5H68.5V64.5H2.5V2.5H32.4645L41.7322 11.7678Z"
                        ></path>
                        </svg>
                        <span class="file-front"></span>
                    </span>
                    Open file
                </button>
            </div>


            
        </header>
    );
};

export default Header;
