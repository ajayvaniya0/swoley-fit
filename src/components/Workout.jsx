import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExcerciseCart from './ExcerciseCart'

function Workout(props) {
  const { workout } = props
  return (
    <SectionWrapper id={'workout'} header={"Welcome to"} title={['The', 'DANGER', 'zone']}>
      <div className='flex flex-col gap-4'>
            {workout.map((excercise, i) => {
              return(
                <ExcerciseCart i={i} excercise={excercise} key={i}/>
              )
            })}
      </div>
    </SectionWrapper>
  )
}

export default Workout
