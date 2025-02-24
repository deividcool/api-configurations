import { use } from "react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const ArrayApis = [
    {
        id: 1,
        name: 'P100',
        value: '/api-p100',        
    },
    {
        id: 2,
        name: 'GETLINKED',
        value: '/api-getlinked',
    },
    {
        id: 3,
        name: 'ROI',
        value: '/api-roi',
    },
    {
        id: 4,
        name: 'AFFCLUB',
        value: '/api-affclub',
    },
    {
        id: 5,
        name: 'SPLASH',
        value: '/api-splash',
    },
    {
        id: 6,
        name: 'SUPREME',
        value: '/api-supreme',
    }
]

const ArrayCountries = [
    { Country: 'Colombia', CountryCode: 'CO' },
    { Country: 'Argentina', CountryCode: 'AR' },
    { Country: 'Brasil', CountryCode: 'BR' },
    { Country: 'Chile', CountryCode: 'CL' },
    { Country: 'Ecuador', CountryCode: 'EC' },
    { Country: 'Peru', CountryCode: 'PE' },
    { Country: 'Canada', CountryCode: 'CA' },
    { Country: 'United Kingdom', CountryCode: 'GB' },
    { Country: 'Spain', CountryCode: 'ES' },
    { Country: 'Italy', CountryCode: 'IT' },
    { Country: 'France', CountryCode: 'FR' },
    { Country: 'Germany', CountryCode: 'DE' },
    { Country: 'Mexico', CountryCode: 'MX' },
    { Country: 'United States', CountryCode: 'US' },
    { Country: 'Japan', CountryCode: 'JP' },
    { Country: 'China', CountryCode: 'CN' },
    { Country: 'Australia', CountryCode: 'AU' },
    { Country: 'Todos los Países', CountryCode: 'ALL' },
    { Country: 'United Arab Emirates', CountryCode: 'AE' },
    { Country: 'Austria', CountryCode: 'AT' },
    { Country: 'Belgium', CountryCode: 'BE' },
    { Country: 'Bolivia', CountryCode: 'BO' },
    { Country: 'Switzerland', CountryCode: 'CH' },
    { Country: 'Costa Rica', CountryCode: 'CR' },
    { Country: 'Denmark', CountryCode: 'DK' },
    { Country: 'Finland', CountryCode: 'FI' },
    { Country: 'Guatemala', CountryCode: 'GT' },
    { Country: 'Hong Kong', CountryCode: 'HK' },
    { Country: 'Honduras', CountryCode: 'HO' },
    { Country: 'Ireland', CountryCode: 'IE' },
    { Country: 'Netherlands', CountryCode: 'NL' },
    { Country: 'Norway', CountryCode: 'NO' },
    { Country: 'New Zealand', CountryCode: 'NZ' },
    { Country: 'Panama', CountryCode: 'PA' },
    { Country: 'Poland', CountryCode: 'PL' },
    { Country: 'Portugal', CountryCode: 'PT' },
    { Country: 'Paraguay', CountryCode: 'PY' },
    { Country: 'Sweden', CountryCode: 'SE' },
    { Country: 'Singapore', CountryCode: 'SG' },
    { Country: 'El Salvador', CountryCode: 'SV' },
    { Country: 'Uruguay', CountryCode: 'UY' }
];

export const HeaderApis = ({ editData = {}, onDataChange }) => {
    const [selectedCountries, setSelectedCountries] = useState([]);


    useEffect(() => {
        if (editData && Object.keys(editData).length > 0) {
            const preloadedCountries = Object.entries(editData).map(([countryCode, apis]) => ({
                countryCode,
                values: ArrayApis.map(api => apis[api.value] || 0), // Si existe en editData, lo asigna; si no, 0
                total: Object.values(apis).reduce((acc, val) => acc + val, 0),
            }));
            
            // Solo carga la data visualmente sin activar onDataChange
            setSelectedCountries(preloadedCountries);
        } else {
            setSelectedCountries([]);
        }
    }, [editData]);

    useEffect(() => {
        if (selectedCountries.length > 0) {
            const formattedData = selectedCountries.reduce((acc, { countryCode, values }) => {
                if (!countryCode) return acc;
    
                const countryApis = ArrayApis.reduce((apisAcc, api, index) => {
                    if (values[index] > 0) {
                        apisAcc[api.value] = values[index]; // Agregar solo APIs con valores mayores a 0
                    }
                    return apisAcc;
                }, {});
    
                if (Object.keys(countryApis).length > 0) {
                    acc[countryCode] = countryApis;
                }
    
                return acc;
            }, {});
    
            // Evita que `onDataChange` se dispare en la carga inicial
            if (JSON.stringify(formattedData) !== JSON.stringify(editData)) {
                onDataChange(formattedData);
            }
        }
    }, [selectedCountries]);

    /** 🔹 Agregar un nuevo país */
    const addCountry = () => {
        setSelectedCountries(prev => [
            ...prev,
            { countryCode: "", values: ArrayApis.map(() => 0), total: 0 }
        ]);
    };

    /** 🔹 Cambiar el país seleccionado */
    const handleCountryChange = (index, newCountryCode) => {
        setSelectedCountries(prevCountries => {
            const newCountries = [...prevCountries];
            newCountries[index].countryCode = newCountryCode;
            return newCountries;
        });
    };

    /** 🔹 Cambiar el valor de una API */
    const handleValueChange = (countryIndex, apiIndex, newValue) => {
        if (!selectedCountries[countryIndex].countryCode) return;

        setSelectedCountries(prevCountries => {
            return prevCountries.map((country, index) => {
                if (index !== countryIndex) return country;

                const updatedValues = [...country.values];
                updatedValues[apiIndex] = parseInt(newValue, 10) || 0;

                const newTotal = updatedValues.reduce((acc, val) => acc + val, 0);
                if (newTotal > 100) {
                    toast.error("La suma total no puede superar el 100%");
                    return country;
                }

                return { ...country, values: updatedValues, total: newTotal };
            });
        });
    };

    return (
        <div className='flex flex-col w-full h-full max-h-[500px] overflow-auto mb-4 overflow-x-hidden [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-gray-700 [&::-webkit-scrollbar-thumb]:bg-blue-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-blue-800'>            
            <div className="flex w-full h-full flex-row mb-4" style={selectedCountries.length > 0 ? {marginBottom: '0px'} : { marginBottom: '20px' }}>
                <div className='flex flex-col w-[120px] h-[40px] border-b-2 border-white justify-center items-center px-4'>
                    <h1 className="text-white text-sm">Country</h1>
                </div>
                <div className='flex flex-row w-full h-full'>
                    {ArrayApis.map((item, index) => (
                        <div key={index} className='flex flex-row w-[90px] h-[40px] border-l-2 border-b-2 border-white justify-center items-center'>
                            <h1 className="text-gray-400 text-sm">{item.name}</h1>
                        </div>
                    ))}
                    <div className='flex flex-row w-[90px] h-[40px] border-l-2 border-b-2 border-r-2 border-white justify-center items-center'>
                        <h1 className="text-gray-400 text-sm">Total</h1>
                    </div>
                </div>
            </div>
            {selectedCountries.map((entry, countryIndex) => (
                <>
                <div key={countryIndex} className="flex w-full h-full flex-row">
                    <div className='w-[108px] bg-transparent text-gray-400'>
                        <select 
                            className='w-full h-[40px] border-b-2 text-gray-400 bg-transparent'
                            value={entry.countryCode}
                            onChange={(e) => handleCountryChange(countryIndex, e.target.value)}
                        >
                            <option value="" disabled className="bg-transparent text-gray-400">
                                Seleccionar País
                            </option>
                            {ArrayCountries.sort((a, b) => a.Country.localeCompare(b.Country)).map((item, index) => (
                                <option className="bg-transparent text-gray-400" key={index} value={item.CountryCode}>
                                    {item.Country}
                                </option>
                            ))}
                        </select>
                    </div>
                    {ArrayApis.map((item, apiIndex) => (
                        <div key={apiIndex} className='flex flex-row w-[90px] h-[40px] border-l-2 border-b-2 border-white justify-center items-center bg-transparent'>                        
                            <input 
                                type="number" 
                                className="w-full h-[40px] text-gray-400 bg-transparent text-center appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                placeholder="%" 
                                value={entry.values[apiIndex] === 0 ? "" : entry.values[apiIndex]}
                                onChange={(e) => handleValueChange(countryIndex, apiIndex, e.target.value)}
                                min="0"
                                max="100"
                                disabled={!entry.countryCode} 
                            />                        
                        </div>
                    ))}
                    <div className='flex flex-row w-[90px] h-[40px] border-l-2 border-b-2 border-white justify-center items-center'>
                        <h1 className="text-gray-400 text-sm">{selectedCountries[countryIndex]?.total ?? 0}</h1> 
                    </div>
                </div>
                {selectedCountries[countryIndex]?.total < 100 && <h1 className="text-yellow-200">El porcentaje de uso de cada API por país no debe ser inferior al 100%.</h1>}
                </>
            ))}

            <button 
                className="bg-blue-500 text-white border-none rounded mb-4 mt-4"
                onClick={addCountry}
            >
                + Agregar Nueva Configuración
            </button>
        </div>
    );
};