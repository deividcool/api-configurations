import React, { useState } from 'react';

export const InputMolly = ({nameapi,}) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
      const inputValue = e.target.value;
      // Permitir solo valores numéricos y limitar a 2 dígitos
      if (/^\d{0,2}$/.test(inputValue)) {
        setValue(inputValue);
      }
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-end items-end'>
                <input type="text" value={value} onChange={handleChange} placeholder="##" className="border-b-2 border-b-[#6A6A6A] text-white bg-transparent outline-none h-8 w-10 text-3xl overflow-hidden text-center"/>
            <h6 className='text-[#6A6A6A] font-bold'>%</h6>
            </div>
            <h4 className='text-[#6A6A6A] font-bold'>{nameapi}</h4>
        </div>
    )
}