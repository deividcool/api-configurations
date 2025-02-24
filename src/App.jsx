import './App.css'
import { Slider } from "@/components/ui/slider"
import Header from './components/Header';
import { TooltipComponent } from './components/TooltipComponent';
import { useContext, useState } from 'react';
import { contextProp } from './context/context';
import { DialogCreate } from './components/Modales';
import { Toaster } from 'react-hot-toast';


const App = () => {
  const { listUrl, modalCreate, setListUrl, setModalCreate, setEditData, editData } = useContext(contextProp)
  const [searchTerm, setSearchTerm] = useState("");


  const handleEliminarId = async (id) => {
    console.log(id);

    const updatedList = listUrl.filter(item => item.id !== id);
    setListUrl(updatedList); 

    try {
      const response = await fetch("https://winnermasterapi.vercel.app/api/delete-data", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ids: [id] })
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el elemento");
      }

      console.log("Elemento eliminado exitosamente");
    } catch (error) {
      console.error("Error en la solicitud DELETE:", error);
    }
  };

  const handleEditarId = (url) => {
    const selectedData = listUrl.find(item => item.url === url);
    if (selectedData) {
      setEditData(selectedData);
      setModalCreate(true);
    }
  };

  const filteredList = Object.entries(listUrl).filter(([key, value]) => 
    value?.url?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(modalCreate);
  return (
    <main className='backdrop-opacity-50 h-full flex-col w-screen bg-[#0d0f14] justify-center items-center absolute top-0 flex flex-1 p-0 m-auto'>
      <Header setSearchTerm={setSearchTerm} />
      <section className='w-11/12 h-5/6 p-3 bg-[#141723] rounded-xl overflow-auto max-w-screen-xl mt-[8rem] sm:mt-[6rem] overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-gray-700 [&::-webkit-scrollbar-thumb]:bg-blue-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-blue-800'>
        <div className='grid grid-cols-1 md:grid-cols-1 gap-3'>
        {[...filteredList]
          .sort((a, b) => b[0] - a[0])
          .map(([id, value]) => ( 
          <TooltipComponent key={id} tittleUrl={value} handleEliminarId={handleEliminarId} handleEditarId={handleEditarId}/>  
        ))}         
        </div>
      </section>
      {modalCreate && <DialogCreate editData={editData} />}
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </main>
  );
};

export default App;

