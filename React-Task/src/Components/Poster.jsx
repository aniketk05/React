import React from 'react'
import PosterNav from './PosterComponent/PosterNav'
import PosterBodySec1 from './PosterComponent/PosterBodySec1'
import PosterBodySec2 from './PosterComponent/PosterBodySec2'
import PosterBodySec3 from './PosterComponent/PosterBodySec3'

export default function Poster() {
  return (
    <div id='poster'>
        <PosterNav/>
        <section id='posterBody'>
            <PosterBodySec1/>
            <PosterBodySec2/>
            <PosterBodySec3/>
        </section>
      
    </div>
  )
}
