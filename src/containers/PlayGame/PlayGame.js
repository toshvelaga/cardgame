import React from 'react'
import styled from 'styled-components'

import CardCountDown from '../../components/CardCountdown/CardCountDown'
import CurrentHand from '../../components/CurrentHand/CurrentHand'
import DealButton from '../../components/DealButton/DealButton'
import ResetButton from '../../components/ResetButton/ResetButton'

const ResetContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`
// Majority of logic is in the DealButton and ResetButton components

const PlayGame = () => {
  return (
    <div className="App">
      <CardCountDown />
      <CurrentHand />
      <div>
        <DealButton />
      </div>
      <ResetContainer>
        <ResetButton title="Reset" />
      </ResetContainer>
    </div>
  )
}

export default PlayGame
