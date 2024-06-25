import { InputMolly } from './InputMolly';
import { ContentApis } from './ContentApis';
import Search from '@/assets/search.svg'
import { ControlApiCountries } from './Countries';

export const DialogCreate = () => {

    return (
        <dialog className="flex w-full h-full items-center justify-center bg-black/80">
            <div className="bg-[#0D0F14] sm:w-3/5 md:w-5/6 rounded-lg shadow-md box-content sm:p-10 p-2 w-10/12">
                <div className="flex sm:h-28 h-48 w-full flex-col box-content sm:flex-row justify-center items-center">
                    <div className="flex flex-1 justify-start items-center p-10 box-content">
                        <input type="text" placeholder="INGRESE ULR" className="bg-transparent outline-none border-b border-b-[#6A6A6A] text-[#6A6A6A] sm:w-96 w-64" />
                    </div>
                    <div className="flex flex-1 sm:justify-end justify-center items-center sm:w-40 w-full  pr-20">
                        <div className="flex justify-center items-center flex-col w-full">
                            <div className="flex justify-center items-end">
                                <h2 className="text-[#16AB25] text-7xl font-black font-sans">100</h2><h6 className="text-white text-sm">%</h6>
                            </div>
                            <h3 className="text-[#6A6A6A]">TOTAL URL API</h3>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 w-full h-24 justify-evenly">
                    <InputMolly nameapi={"API-P100"} />
                    <InputMolly nameapi={"GETLINKED"} />
                    <InputMolly nameapi={"API-IREV"} />
                </div>
                <div className='flex flex-row flex-1 h-60 w-full'>
                    <div className='flex flex-1 flex-col items-center p-2 w-full'>
                        <h3 className='text-[#6A6A6A] font-bold font-sans'>API UBICACION GEOGRAFICA</h3>
                        <div className='overflow-y-scroll no-scrollbar max-h-60 w-full pl-6'>
                            <ContentApis nameapi={"API-P100"} />
                            <ContentApis nameapi={"GETLINKED"} />
                            <ContentApis nameapi={"API-IREV"} />
                            <ContentApis nameapi={"API-IREV"} />
                        </div>

                    </div>
                    <div className='flex flex-1 flex-col items-center p-2 w-full'>
                        <h3 className='text-[#6A6A6A] font-bold font-sans'>PAISES</h3>
                        <div className='overflow-y-scroll no-scrollbar max-h-60 w-full'>
                            <header className='flex w-full justify-center items-center p-2'>
                                <div className='flex w-9/12 flex-row relative'>
                                    <input type="text" placeholder='Filtro' className='border bg-transparent text-white w-full p-1 pl-3 rounded-xl' />
                                    <img src={Search} alt="searchicon" className='absolute right-2 top-2 h-4 w-4'  />
                                </div>
                            </header>
                            <section className='flex w-full justify-center items-center p-2'>
                                <div className='flex w-9/12 flex-col border border-[#6F7DA0] h-32 rounded-xl p-2 overflow-y-scroll no-scrollbar gap-2'>
                                   <ControlApiCountries name={"CO"} />
                                   <ControlApiCountries name={"CO"} />
                                   <ControlApiCountries name={"CO"} />
                                   <ControlApiCountries name={"CO"} />
                                   <ControlApiCountries name={"CO"} />
                                   <ControlApiCountries name={"CO"} />
                                   <ControlApiCountries name={"CO"} />
                                   <ControlApiCountries name={"CO"} />
                                   

                                </div>

                            </section>

                        </div>

                    </div>
                </div>
            </div>
        </dialog>
    )
}