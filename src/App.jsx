import './App.css'
import { Slider } from "@/components/ui/slider"
import Header from './components/Header';
import { TooltipComponent } from './components/TooltipComponent';


const App = () => {
  return (
    <main className='backdrop-opacity-50 h-full flex-col w-screen bg-[#0d0f14] justify-center items-center absolute top-0 flex flex-1 p-0 m-auto'>
      <Header />
      <section className='w-11/12 h-5/6 p-3 bg-slate-800 rounded-xl overflow-auto max-w-screen-xl mt-[6rem]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
         
          <TooltipComponent tittleUrl={'https://portafoliodeividveloza.pages.dev/'}/>
          <TooltipComponent tittleUrl={'https://saddddddddddddddddddddaadasdasd.pages.dev/'}/>
          <TooltipComponent tittleUrl={'https://portafoliodeividveloza.pages.dev/'}/>
          <TooltipComponent tittleUrl={'https://portafoliodeiasdsadsadsavidveloza.pages.dev/'}/>
          <TooltipComponent tittleUrl={'https://portafoliodeasdsadsadasdividveloza.pages.dev/'}/>
        </div>
      </section>
    </main>
  );
};

export default App;

