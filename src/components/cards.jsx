import { MapIcon,EditIcon,HistoryIcon,CloseIcon } from "./icons"


export const MapCard = (props) => {
    return (
<div className="bg-red-50 p-2.5 rounded-xl m-1.5 flex justify-start items-center space-x-2.5">
    <MapIcon c="#ef4444" h="30" w="30" />
    <div className="w-64">
    <p className="font-medium text-red-900 truncate">{props.location}</p>
    <div className="flex justify-start items-center space-x-1.5">
    <p className="font-normal text-sm text-gray-500">Click to edit</p>
    <EditIcon c="#6b7280" h="12" w="12" />
    </div>
    
    </div>
</div>
    )
}

export const Historycard = (props) => {
    return (
        <div className="bg-white p-1.5 rounded-lg hover:bg-gray-100 my-1.5 flex justify-between items-center">
            <div className="flex justify-start items-center space-x-2.5">
        <HistoryIcon c="#9ca3af" h="18" w="18" />
        <p className="text-gray-400">{props.text}</p>
        </div>
        <button>
        <CloseIcon c="#1f2937" h="23" w="23" />
        </button>
        </div>
    )
}

export const ProductCard1 = (props) =>{
    return (
        <div>
            <div className="rounded-lg bg-white hover:bg-gray-50 flex justify-start items-center space-x-2 my-1.5 p-1.5">
                <img src={props.image} alt="" className="w-auto h-16 rounded-2xl"/>
                <div className="w-auto max-w-48">
                    <p className="font-medium truncate">{props.title}</p>
                    <p className="text-gray-500 truncate">{props.subtitle}</p>
                </div>
            </div>
        </div>
    )
}

export const FeaturedServicesCard = (props) =>{
    return (
        <div className="relative bg-white border border-gray-200 shadow-sm rounded-xl p-2.5 h-28 w-full">
    <div>
    <p className="text-lg font-medium">{props.title}</p>
    <p className="text-gray-600 text-xs">{props.subtitle}</p>
    </div>
    <div className="z-30 bottom-0 top-3 absolute right-0 flex justify-end">
    <img src={props.image} alt="" className="w-auto h-36 object-cover -mr-7" />
    </div>
    
        </div>
    )
}

export const FeaturedServicesCard2 = (props) =>{
    return (
        <div className="overflow-hidden relative bg-white border border-gray-200 shadow-sm rounded-xl p-2.5 h-36 w-full">
    <div className="absolute z-20">
    <p className="text-lg font-medium">{props.title}</p>
    <p className="text-gray-600 text-xs">{props.subtitle}</p>
    </div>
    <div className="h-full">
    <img src={props.image} alt="" className="z-10 w-auto h-36 object-cover absolute bottom-0 top-10 -right-8" />
    </div>
    
        </div>
    )
}

export const ExtraServicesCard = (props) => {
    return (
        <div className="overflow-hidden relative bg-white border border-gray-200 shadow-sm rounded-xl p-2.5 h-16 w-full">
<div className="absolute z-20">
    <p className="text-md font-medium">{props.title}</p>
    <p className="text-gray-600 text-xs">{props.subtitle}</p>
    </div>
    <img src={props.image} alt="" className="z-10 w-auto h-28 object-cover absolute bottom-0 -top-4 -right-10" />
        </div>
    )
}

export const ExtraServicesCardComing = (props) => {
    return (
        <div className="overflow-hidden relative bg-white border border-gray-200 shadow-sm rounded-xl p-2.5 h-16 w-full">
<div className="absolute z-20">
    <p className="text-md font-medium text-gray-800">{props.title}</p>
    <p className="text-gray-300 text-xs font-medium">{props.subtitle}</p>
    </div>
    <img src={props.image} alt="" className="z-10 w-auto h-24 object-cover absolute bottom-0 top-0 -right-4" />
        </div>
    )
}


export const ExtraServicesCardComingA = (props) => {
    return (
        <div className="overflow-hidden relative bg-white border border-gray-200 shadow-sm rounded-xl p-2.5 h-16 w-full">
<div className="absolute z-20">
    <p className="text-md font-medium text-gray-800">{props.title}</p>
    <p className="text-gray-300 text-xs font-medium">{props.subtitle}</p>
    </div>
    <img src={props.image} alt="" className="z-10 w-auto h-16 object-center absolute bottom-0 -top-0 -right-2" />
        </div>
    )
}


export const HighlightCard = (props) => {
    return (
        <div className="bg-white rounded-xl shadow-md px-2.5 flex justify-between items-center w-auto">
           <div>
           <p className="font-medium text-lg">{props.title}</p>
           <p className="font-normal text-gray-500 text-xs">{props.subtitle}</p>
           <button className="font-medium bg-red-500 shadow-xl rounded-lg my-1.5 text-red-50 text-sm px-2.5 py-1">Join Waitlist</button>
           </div>
           <div>
            <img src={props.image} alt="" className="w-auto h-24"/>
           </div>
        </div>
    )
}