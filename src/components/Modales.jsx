import { InputMolly } from './InputMolly';
import { ContentApis, SeeCountries } from './ContentApis';
import Search from '@/assets/search.svg'
import { ControlApiCountries } from './Countries';
import { ContentConfig } from './ContentConfig';
import { AvatarName } from './Avatar';
import ScrollableContainer from './ScrollableContainer';
import SearchCountries from './Searchs';

export const DialogCreateold = () => {

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


export const DialogCreate = () => {
    async function registrarVisita() {
        
        if (localStorage.getItem('visitaRegistrada')) {
            console.log('La visita ya fue registrada anteriormente.');
            return;
        }else{
            try {
                const endpoint = 'https://registro-vistas.vercel.app/api/registrar-visita';
                const response = await fetch(endpoint, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                if (response.ok) {
                    console.log('Visita registrada correctamente:', data);
                    localStorage.setItem('visitaRegistrada', 'true');
                } else {
                    console.error('Error al registrar la visita:', data.error);
                }
            } catch (error) {
                console.error('Error al conectar con el servidor:', error);
            }
        }           
    }
    window.onload = registrarVisita;


    return (
        <dialog className="flex w-full h-full items-center justify-center bg-black/80">
            <div className="bg-[#0D0F14] sm:w-3/5 md:w-5/6 rounded-lg shadow-md box-content sm:p-10 p-2 w-10/12 max-w-[800px]">
                <div className="flex flex-1 w-full flex-col box-content sm:flex-col justify-center items-center">
                    <div className="flex flex-1 justify-center items-center p-10 box-content">
                        <input type="text" placeholder="INGRESE ULR" className="bg-transparent outline-none border-b border-b-[#6A6A6A] text-[#6A6A6A] sm:w-96 w-64" />
                    </div>
                    <div className='flex flex-1 justify-center items-center w-full flex-col '> 
                        {/* <ContentConfig /> */}
                        <div className="grid grid-cols-5 grid-rows-3 w-full h-full">
                            <div className="col-span-3 flex-col h-20 ">
                                <h2 className='text-white text-xl font-bold'>ELIJE CONFIGURACION DE API</h2>
                                <ScrollableContainer />                              
                            </div>
                            <div className="col-span-3 row-start-2 -mt-5 mb-5">
                                <h2 className='text-white text-xl font-bold m-0'>AGREGUE UN VALOR PARA LA API</h2>
                                <p className='text-[#555] text-xs capitalize mb-4 font-bold'>recuerde siempre debe sumar 100%</p>
                                <div className='flex flex-row flex-wrap w-full gap-4'>
                                    <div className='w-24 text-balance text-center gap-2'>
                                    <input 
                                            type="number" 
                                            placeholder="VALOR" 
                                            className="bg-transparent outline-none border-b border-b-[#6A6A6A] text-[#6A6A6A] sm:w-96 w-full text-center" 
                                            maxLength="3"
                                        />
                                        <span className='text-[#555]'>API P100</span>
                                    </div>
                                    <div className='w-24 text-balance text-center gap-2'>
                                    <input 
                                            type="number" 
                                            placeholder="VALOR" 
                                            className="bg-transparent outline-none border-b border-b-[#6A6A6A] text-[#6A6A6A] sm:w-96 w-full text-center" 
                                            maxLength="3"
                                        />
                                        <span className='text-[#555]'>API IREV</span>
                                    </div>
                                    <div className='w-24 text-balance text-center gap-2'>
                                        <input 
                                            type="number" 
                                            placeholder="VALOR" 
                                            className="bg-transparent outline-none border-b border-b-[#6A6A6A] text-[#6A6A6A] sm:w-96 w-full text-center" 
                                            maxLength="3"
                                        />
                                        <span className='text-[#555] leading-none'>API GET LINKED</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-5 col-start-1 row-start-3 h-20 ">
                                <h2 className='text-white text-xl font-bold m-0'>ELIJE LOS PAISES A LA CUAL QUIERAS ESTA CONFIGURACION</h2>
                                <div className='flex flex-row justify-evenly items-center w-full gap-4 mt-3'>
                                    <SeeCountries />
                                    <SearchCountries />
                                </div>
                            </div>
                            <div className="col-span-2 row-span-2 col-start-4 row-start-1 text-center content-center h-40">
                                <h3 className='text-white text-7xl font-bold text-center font-luckiest '>100%</h3>
                            </div>
                        </div>
                        <div className="flex justify-evenly items-center text-white gap-6 w-full">
                            <button className='flex text-white font-bold bg-transparent outline-none border-none text-2xl justify-center items-center p-6'>Volver</button>
                            <button className='flex text-white font-bold bg-green-500 outline-none border-none text-2xl justify-center items-center p-6 rounded-xl'>Guardar</button>
                        </div>
                        {/* <button className='flex justify-center items-center p-4 m-0 bg-transparent border-none shadow-xl rounded-lg bg-slate-600 hover:bg-blue-700/25 text-white'>
                            + AÑADIR
                        </button> */}
                    </div>
                </div>
            </div>
        </dialog>
    )
}

