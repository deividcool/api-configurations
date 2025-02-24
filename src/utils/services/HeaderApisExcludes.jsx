import { useEffect, useState } from "react";

const ArrayApis = [
    { id: 1, name: 'P100', value: '/api-p100' },
    { id: 2, name: 'GETLINKED', value: '/api-getlinked' },
    { id: 3, name: 'ROI', value: '/api-roi' },
    { id: 4, name: 'AFFCLUB', value: '/api-affclub' },
    { id: 5, name: 'SPLASH', value: '/api-splash' },
    { id: 6, name: 'SUPREME', value: '/api-supreme' }
];

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
    { Country: 'Todos los Países', CountryCode: 'ALL' }
];

export const HeaderApisExcludes = ({ onDataChange }) => {
    const [selectedCountries, setSelectedCountries] = useState([]);

    const addCountry = () => {
        setSelectedCountries([
            ...selectedCountries, 
            { countryCode: "", values: ArrayApis.map(() => false) } // Inicializar con valores false
        ]);
    };

    const handleCountryChange = (index, newCountryCode) => {
        const newCountries = [...selectedCountries];
        newCountries[index].countryCode = newCountryCode;
        setSelectedCountries(newCountries);
    };

    const handleCheckboxChange = (countryIndex, apiIndex) => {
        const newCountries = [...selectedCountries];
        newCountries[countryIndex].values[apiIndex] = !newCountries[countryIndex].values[apiIndex];
        setSelectedCountries(newCountries);
    };

    useEffect(() => {
        const data = selectedCountries.map(country => {
            if (country.countryCode) {
                const values = country.values
                    .map((checked, idx) => (checked ? ArrayApis[idx].value : null))
                    .filter(Boolean); // Filtra los valores no seleccionados
    
                return {
                    country: country.countryCode,
                    values
                };
            }
            return null;
        }).filter(Boolean); // Filtra entradas nulas

        console.log(data);
        onDataChange(data);
    }, [selectedCountries]);

    return (
        <div className='flex flex-col w-full h-full'>
            <div className="flex w-full h-full flex-row">
                <div className='flex flex-col w-[120px] h-[40px] border-b-2 border-white justify-center items-center px-4'>
                    <h1 className="text-white text-sm">Country</h1>
                </div>
                <div className='flex flex-row w-full h-full'>
                    {ArrayApis.map((item, index) => (
                        <div key={index} className='flex flex-row w-[90px] h-[40px] border-l-2 border-b-2 border-white justify-center items-center'>
                            <h1 className="text-gray-400 text-sm">{item.name}</h1>
                        </div>
                    ))}
                </div>
            </div>

            {selectedCountries.map((entry, countryIndex) => (
                <div key={countryIndex} className="flex w-full h-full flex-row">
                    <div className='w-[120px] bg-transparent text-gray-400'>
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
                                type="checkbox" 
                                className="w-4 h-4"
                                checked={entry.values[apiIndex]}
                                onChange={() => handleCheckboxChange(countryIndex, apiIndex)}
                                disabled={!entry.countryCode} 
                            />
                        </div>
                    ))}
                </div>
            ))}
            
            <div>
                <button 
                    className="bg-red-400 text-white border-none rounded mb-4 mt-4"
                    onClick={addCountry}
                >
                    + Agregar Configuracion Exclusion
                </button>
            </div>
        </div>
    );
};