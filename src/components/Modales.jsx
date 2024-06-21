
import { InputMolly } from './InputMolly';

export const DialogCreate = () => {

    return(
        <dialog className="flex w-full h-full items-center justify-center bg-black/30">
            <div className="bg-[#0D0F14] h-60 w-3/5 md:w-5/6 rounded-lg shadow-md box-content">
                <div className="flex flex-row h-28 w-full box-content">
                    <div className="flex flex-1 justify-start items-center p-10 box-content">
                        <input type="text" placeholder="INGRESE ULR" className="bg-transparent outline-none border-b border-b-[#6A6A6A] text-[#6A6A6A] w-96" />
                    </div>
                    <div className="flex flex-1 justify-end items-center w-40 pr-20">
                        <div className="flex justify-center items-center flex-col">
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
            </div>
            <div>

            </div>
        </dialog>
    )
}