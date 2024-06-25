import React from "react"
import KLogo from '../assets/logo/k-logo.svg';

export const Logo = () => {
    return (
        <img src={KLogo} className="w-auto h-36" alt="" />
    )
}

export const MediumLogo = () => {
    return (
        <img src={KLogo} className="w-auto h-24" alt="" />
    )
}


export const SmallLogo = () => {
    return (
        <img src={KLogo} className="w-auto h-12" alt="" />
    )
}