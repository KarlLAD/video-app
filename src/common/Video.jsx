import React from 'react'

const Video = ({data}) => {
  return (
    <div > 
    <a className="text-2xl font-bold underline" href={'/detail/'+data.id}> {data.titre} </a>
    <br/>
    <img src={data.image}   alt={data.titre}  className="w-[200px] h-[200px]"/>
    <br/>
    {data.description}

    </div>
  )
}

export default Video