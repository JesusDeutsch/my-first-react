import React from 'react'
import {countries} from '../data/datacountries'


const WorldPupulation = () => {

  const maxPopulation = countries[0].population;

  return (
    <div className='flex flex-col items-center justify-center'>
      <div>World Population</div>

      <div className='flex flex-col w-[1000px]'> 
      {countries.map((country, index) => (
        <div key={index} className="flex  items-center mb-2">
          <div>
          <div className="w-32 text-right pr-2">{country.country.toUpperCase()}</div>
          </div>
          
          <div className='flex flex-col w-[1000px]'>
          <div className="flex-grow-0 bg-orange-500 h-5" style={{ width: `${(country.population / maxPopulation) * 100}%` }}></div>
          </div>

          <div>
          <div className="w-32 text-left pl-2">{country.population.toLocaleString()}</div>
          </div>
        
        </div>
      ))}
      </div>
    </div>
  )
}
export default WorldPupulation