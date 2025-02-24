import { InputMolly } from './InputMolly';
import { ContentApis, SeeCountries } from './ContentApis';
import Search from '@/assets/search.svg'
import { ControlApiCountries } from './Countries';
import { ContentConfig } from './ContentConfig';
import { AvatarName } from './Avatar';
import ScrollableContainer from './ScrollableContainer';
import SearchCountries from './Searchs';
import { HeaderApis } from '@/utils/services/HeaderApis';
import { useContext, useEffect, useState } from 'react';
import { HeaderApisExcludes } from '@/utils/services/HeaderApisExcludes';
import toast from 'react-hot-toast';
import { contextProp } from '@/context/context';
import { api_url } from '@/utils/api';

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


export const DialogCreate = ({ editData }) => {
    const { modalCreate, setModalCreate } = useContext(contextProp);
    const [countryData, setCountryData] = useState({});
    const [url, setUrl] = useState('');

    useEffect(() => {
        if (editData && Object.keys(editData).length > 0) {
            // Si editData existe, estamos en modo "editar"
            setCountryData(editData.country_data || {});
            setUrl(editData.url ? editData.url.replace("https://", "") : '');
        } else {
            // Si editData es vacío, estamos en modo "crear", se limpia el estado
            setCountryData({});
            setUrl('');
        }
    }, [editData, modalCreate]); // Se ejecuta cuando editData cambia o se abre/cierra el modal

    const handleOpenModalCreate = () => {
        setModalCreate(!modalCreate);
        setCountryData({});
        setUrl('');
    };

    const handleSave = async () => {
        const payload = {
            url: "https://"+url,
            country_data: countryData,
        }

        if (url.length == '' && Object.keys(countryData).length == 0) {
            toast.error('Porfavor Agrega una URL');
        }

        try {
            const endpoint = api_url+'api/store-data';
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            handleOpenModalCreate();
        } catch (error) {
            console.error('Error al conectar con el servidor:', error);
        }   
    };

    console.log(countryData)
    return (
        <dialog className="flex w-full h-full items-center justify-center bg-black/80">
            <div className="bg-[#0D0F14] sm:w-3/5 md:w-5/6 rounded-lg shadow-md box-content sm:p-10 p-2 w-10/12 max-w-[800px]">
                <div className="flex flex-1 w-full flex-col box-content sm:flex-col justify-center items-center">
                    <div className="flex flex-1 justify-center items-center p-10 box-content">
                        <input 
                            type="text" 
                            placeholder="INGRESE ULR" 
                            className="bg-transparent outline-none border-b border-b-[#6A6A6A] text-[#6A6A6A] sm:w-96 w-64" 
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-1 justify-center items-center w-full flex-col '> 
                        {/* <ContentConfig />  */}

                        <HeaderApis editData={countryData} onDataChange={setCountryData} />
                       {/*  <HeaderApisExcludes onDataChange={handleDataChange} /> */}
                        <div className="flex justify-evenly items-center text-white gap-6 w-full">
                            <button onClick={handleOpenModalCreate} className='flex text-white font-bold bg-transparent outline-none border-none text-2xl justify-center items-center p-6 hover:bg-transparent'>Volver</button>
                            <button onClick={handleSave} className='flex text-white font-bold bg-green-500 outline-none border-none text-2xl justify-center items-center p-6 rounded-xl hover:bg-green-800'>Guardar</button>
                        </div>               
                    </div>
                </div>
            </div>
        </dialog>
    )
}

