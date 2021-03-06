import React from 'react';

import './tailwind.output.css'

export default function ProjectCards(proj) {

  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex p-2 br-2">
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title={proj.proj.title}>
        <img src={require(`${proj.proj.image}`)} className="self-center max-w-sm" alt={proj.proj.title} />
      </div>

      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">

          <div className="text-blue-600 font-bold underline py-1 text-xl mb-2"><a target="blank" href={proj.proj.link}>Link: {proj.proj.title}</a></div>
          <p className="text-gray-700 text-base">{proj.proj.desc}</p>
          <p>{proj.proj.for}</p>
          <p>{proj.proj.why}</p>
          <h4>Tech Used:</h4>
          <p>{proj.proj.tech}</p>
          <div className="text-blue-600 font-bold underline py-1 text-xl mb-2"><a target="blank" href={proj.proj.repo}>GitHub Repo</a></div>
        </div>
      </div>
    </div>
  )
}
