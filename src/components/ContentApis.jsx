import { Countries } from "./Countries"

export const ContentApis = ({nameapi}) => {
    return (
        <div className='w-full h-16 p-2'>
        <h4 className='text-[#6A6A6A] font-sans font-light mb-2'>{nameapi}</h4>
        <div className='flex max-w-[750px] md:max-w-96 flex-row gap-2 w-full flex-1 justify-start items-center overflow-x-scroll no-scrollbar'>
           <Countries country="CO" />
           <Countries country="US" />
           <Countries country="PA" />
           <Countries country="CA" />
           <Countries country="VE" />
           <Countries country="CO" />
           <Countries country="US" />
           <Countries country="PA" />
           <Countries country="CA" />
           <Countries country="VE" />
           <Countries country="PA" />
           <Countries country="CA" />
           <Countries country="VE" />
           <Countries country="PA" />
           <Countries country="CA" />
           <Countries country="VE" />
           <Countries country="PA" />
           <Countries country="CA" />
           <Countries country="VE" />
           <Countries country="PA" />
           <Countries country="CA" />
           <Countries country="VE" />
           <Countries country="PA" />
           <Countries country="CA" />
           <Countries country="VE" />
           <Countries country="PA" />
           <Countries country="CA" />
           <Countries country="VE" />
        </div>
    </div>
    )
}