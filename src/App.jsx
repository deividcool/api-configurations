import './App.css'
import { Slider } from "@/components/ui/slider"
import Header from './components/Header';
import { TooltipComponent } from './components/TooltipComponent';
import { useContext } from 'react';
import { contextProp } from './context/context';
import { DialogCreate } from './components/Modales';


const App = () => {
  const { listUrl } = useContext(contextProp)

  return (
    <main className='backdrop-opacity-50 h-full flex-col w-screen bg-[#0d0f14] justify-center items-center absolute top-0 flex flex-1 p-0 m-auto'>
      <Header />
      <section className='w-11/12 h-5/6 p-3 bg-[#141723] rounded-xl overflow-auto max-w-screen-xl mt-[6rem]'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>

        {Object.entries(listUrl).map(([key, value]) => ( 
          <TooltipComponent key={key} tittleUrl={key}/>
        ))}
         
        </div>
      </section>
      <DialogCreate/> 
    </main>
  );
};

export default App;

