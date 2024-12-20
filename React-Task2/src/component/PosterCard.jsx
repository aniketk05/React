import React from 'react'
import Box1 from './Box1'
import Box2 from './Box2'
import Box3 from './Box3'
import Box4 from './Box4'
import Box5 from './Box5'
import Box6 from './Box6'
import Box7 from './Box7'

export default function PosterCard() {
  return (
    <div id='poster'>
        <main id='m1'>    
        <Box1/>
        <Box2/>
        <Box3/>
        </main>
        <main id='m2'>
            <Box4/>
        </main>
        <main id='m3'>
            <Box5/>
        </main>
        <main id='m4'>
            <Box6/>
            <Box7/>
        </main>
      
    </div>
  )
}
