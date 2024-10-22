import React from 'react'
import "./Lampa.css"
import { useContext } from 'react';
import { KattContext } from '../context/KattContext'

export default function Lampa(props) {
  const {katt}=useContext(KattContext)
    function kattintas(){
        katt(props.index)
    }
  return (
    <div className={`lampa ${props.jel ? "fel" : "le"}`} onClick={()=>kattintas()}></div>
  )
}
