import ReactCountryFlag from 'react-country-flag';

export const Countries = ({ country }) => {
    return (
        <div className='flex flex-row gap-1 justify-center items-center'>
            <div className='h-8 w-8 rounded-full overflow-hidden flex justify-center items-center'>
                <ReactCountryFlag
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%' // Asegura que la bandera se recorte como un círculo
                    }}
                    countryCode={country}
                    svg
                />
            </div>
            <span className='text-white font-semibold'>{country}</span>
        </div>
    )
}


export const ControlApiCountries = ({ name }) => {
    return (
        <div className='flex pl-2 h-8 w-full rounded-md bg-slate-200/45 flex-row pt-1 pb-1'>
            <div className='flex w-1/3 justify-start items-center flex-row gap-2'>
                <div className='h-4 w-4 rounded-full overflow-hidden flex justify-center items-center'>
                    <ReactCountryFlag
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '50%' // Asegura que la bandera se recorte como un círculo
                        }}
                        countryCode={name}
                        svg
                    />
                </div>
                <div className='flex w-16  text-ellipsis overflow-hidden'>
                    <span className='text-[0.5rem] text-white capitalize'>UNITED STATED</span>
                </div>
            </div>
            <div className='flex max-w-full pr-2 items-center gap-1 overflow-x-scroll no-scrollbar'>
               <ApiSelect nameapi="P-100"/>
               <ApiSelect nameapi="GETLINKED"/>
               <ApiSelect nameapi="I-REV"/>
               <ApiSelect nameapi="OTRA"/>
            </div>
        </div>
    )
}

export const ApiSelect = ({nameapi}) => {
    return(
        <button className='flex justify-center items-center whitespace-nowrap uppercase box-content h-[18px] pl-3 pr-3 text-white bg-[#271427] border-none outline-none hover:bg-slate-900'>
            <span className='text-[8px]'>{nameapi}</span>
        </button>
    )
}