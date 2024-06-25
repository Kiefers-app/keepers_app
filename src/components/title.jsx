import React from "react"
import '../../src/Font.css'


export const SuperGreetingsTitle = (props) =>{
   return (
      <p className="quicksand-header-700 leading-relaxed text-3xl font-bold text-gray-900">{props.text}</p>
   )
  }


export const BigGreetingsTitle = (props) =>{
    return (
       <p className="quicksand-header-700 text-2xl font-bold text-gray-900">{props.text}</p>
    )
   }


export const GreetingsTitle = (props) =>{
 return (
    <p className="quicksand-header-700 text-xl font-bold text-gray-900">{props.text}</p>
 )
}


export const GreetingsTitleWhite = (props) =>{
   return (
      <p className="quicksand-header-700 text-xl font-bold text-white">{props.text}</p>
   )
  }

export const SubTitle = (props) =>{
    return (
       <p className="text-md font-normal text-gray-700">{props.text}</p>
    )
}

export const SmallTitle = (props) =>{
    return (
       <p className="text-xs font-normal text-gray-500">{props.text}</p>
    )
   }

export const SmallTitleChild = (props) => {
   return (
        <p className="text-xs text-center font-normal text-gray-500">{props.children}</p>
);
};

export const HyperText = (props) =>{
   return (
      <span><a href={props.link} className="font-medium text-red-500">{props.text}</a></span>
   )
}