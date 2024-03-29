"use client";

import "./styles/components.css";
import {FC} from "react";

interface props{
  message:string
  dur:number,
  display:(state:boolean) => void
}

const Notify:FC<props> = ({message,dur,display}) => {
  setTimeout(()=>display(false),dur*1000)
  function handleClose(){
    display(false)
  }
  return (
    <div className="notification">
      <p>{message}</p>
      <button onClick={handleClose}>x</button>
    </div>
  )
}

export default Notify