import { useEffect, useState } from "react";

export const AvatarName = ({name}) => {
    const [color, setColor] = useState('');
  
    // Función para obtener las iniciales
    const getInitials = (name) => {
      const parts = name.split(' ');
      const initials = parts.map(part => part[0]).join('');
      return initials.toUpperCase();
    };
  
    // Función para obtener un color aleatorio
    const getRandomColor = () => {
      const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    };
  
    // Usar useEffect para establecer un color aleatorio al cargar el componente
    useEffect(() => {
      setColor(getRandomColor());
    }, [name]); // Se ejecuta cada vez que cambie el nombre
  
    const initials = getInitials(name);
  
    return (
        <button className="flex flex-row hover:bg-transparent bg-transparent border-none w-40 gap-2">
            <div
                className={`flex flex-row-reverse p-2 justify-center items-center h-8 w-8 hover:${color} ${color} text-white outline-none border-none rounded-full`}
            >
                {initials}
            </div>
            <div className="flex flex-col">
                <span className='text-white text-left text-[12px] font-bold'>{name}</span>
            </div>
        </button>
     
    );
  };