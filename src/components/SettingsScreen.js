import React from 'react'
import Slider from '@mui/material/Slider';
import { useContext } from 'react';
import SettingsContext from './SettingsContext';
import BackButton from './BackButton';

const SettingsScreen = () => {
  const context = useContext(SettingsContext) // Prends la valeur de workTimes de App.js sans passer par des props -> plus porpre
  return (
    <div  >
      <div >
        <label>Works Time : </label>
        <Slider 
        defaultValue={context.worksTime} 
        aria-label="Small" 
        valueLabelDisplay="auto" 
        onChange={(data)=>{
          console.log(data)
          context.setWorksTime(data.target.value)
        }}
        /> 
        <label>{context.worksTime} minutes </label>
      </div> 

      <div>
        <label>Breaks Time : </label>
        <Slider 
        defaultValue={context.breaksTime} 
        aria-label="Small" 
        valueLabelDisplay="auto" 
        onChange={(data)=>{
          console.log(data)
          context.setBreaksTime(data.target.value)
        }}
        />
        <label>{context.breaksTime} minutes </label>
      </div>
      <BackButton/>
    </div>
  )
}

export default SettingsScreen