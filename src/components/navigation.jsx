import { ArrowLeftBig } from "./icons"
import { SmallLogo } from "./logo"
import { SearchTextInput } from "./inputs"

export const NormalNav = (props) =>{
    return (
        <div className="bg-white z-50 w-full px-2.5 py-4 absolute sticky-0 top-0 flex justify-between items-center">
<div className="cursor-pointer">
<ArrowLeftBig w={25} h={25} c="#404040" />
</div>

<div>
<p className="text-xl text-red-600">{props.title}</p>
</div>

<div>
<ArrowLeftBig w={30} h={30} c="#fff" />
</div>

</div>
    )
}


export const AdvanceNav = (props) =>{
    const Gobackba = () => {
         var AppMessage = {
        type: "GO_BACK",
        path: "home"
    };
    var messageString = JSON.stringify(AppMessage);
    window.ReactNativeWebView.postMessage(messageString);
      }


    return (
        <div className="bg-white z-50 w-full px-2.5 py-4 absolute sticky-0 top-0 flex justify-between items-center">
<div onClick={Gobackba} className="hover:bg-red-500 cursor-pointer">
<ArrowLeftBig w={25} h={25} c="#404040" />
</div>

<div>
<p></p>
</div>

<div>
{props.children}
</div>

</div>
    )
}


export const ChatNav = (props) =>{
    return (
        <div className="bg-white z-50 w-full px-2.5 py-4 absolute sticky-0 shadow-lg top-0 flex justify-between items-center">
<div className="flex justify-start items-center space-x-2">
<SmallLogo />
<div className="cursor-default">
<p className="text-lg text-gray-900 leading-5">{props.title}</p>
<p className="text-sm text-gray-500">{props.subtitle}</p>
</div>
</div>

<div>
</div>

<div>
<ArrowLeftBig w={30} h={30} c="#fff" />
</div>

</div>
    )
}

export const SearchNav = (props) => {

    const GobackfromSearch = () => {
         var AppMessage = {
        type: "GO_BACK",
        path: "home"
    };
    var messageString = JSON.stringify(AppMessage);
    window.ReactNativeWebView.postMessage(messageString);
      }

    return (
        <div className="bg-white z-50 w-full px-2.5 py-4 absolute sticky-0 top-0 flex justify-between items-center space-x-2.5">
        <div onClick={GobackfromSearch} className="cursor-pointer">
        <ArrowLeftBig w={25} h={25} c="#404040" />
        </div>
        
        <SearchTextInput />
        
        </div>
    )
}