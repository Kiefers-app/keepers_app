import { EyeClose, SearchIcon } from "./icons"

export const EmailTextbox = () =>{
    return (
<div className="bg-slate-200 p-2.5 rounded-md w-full my-4">
<input type="email" placeholder="Enter email" className="px-2.5 placeholder-slate-500 text-lg bg-transparent outline-none"></input>
</div>
    )
}

export const PasswordTextbox = () =>{
    return (
<div className="bg-slate-200 p-2.5 rounded-md w-full my-4 flex justify-between items-center">
<input type="password" placeholder="Create Password" className="w-full px-2.5 placeholder-slate-500 text-lg bg-transparent outline-none"></input>
<div className="cursor-pointer">
<EyeClose c="#64748b" w="20" h="20" />
</div>
</div>
    )
}

export const CodeTextbox = () =>{
    return (
<div className="bg-slate-200 p-4 rounded-md w-full my-4">
<input type="number" placeholder="" className="px-2.5 placeholder-slate-500 text-lg text-center text-2xl text-red-500 bg-transparent outline-none"></input>
</div>        
    )
}


export const ChatTextbox = () =>{
    return (
<div className="bg-white p-4 rounded-xl w-full my-4">
<textarea style={{resize:"none"}} rows={1} placeholder="Enter your message" className="px-2.5 placeholder-slate-500 text-lg bg-transparent outline-none w-full"></textarea>
</div>
    )
}

export const SearchTextInput = () =>{
    return (
        <div className="bg-slate-200 p-2.5 rounded-2xl w-full flex justify-start items-center">
        <SearchIcon c="#94a3b8" w="23" h="23" />
        <input type="text" placeholder="Search foods or restaurants" className="px-2.5 placeholder-slate-400 text-lg bg-transparent outline-none w-full"></input>
        </div>       
    )
}