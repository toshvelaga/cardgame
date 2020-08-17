import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import CurrentHandContainer from '../CurrentHandContainer/CurrentHandContainer'

const H1 = styled.h1`
  color: ${props => (props.secondary ? 'red' : 'black')};
  font-size: 4rem;
  font-family: 'Rockwell';
  font-weight: normal;
  text-align: left;
  padding: 1rem;
  margin: 0;
`
const SuitImage = styled.img`
  width: 2rem;
  height: auto;
  float: left;
  padding-left: 1rem;
  padding-top: 1rem;
`
const SuitImageLarge = styled(SuitImage)`
  width: 5rem;
  float: right;
  padding-right: 1rem;
  padding-top: 3rem;
`

const SuitsContainer = styled.div`
  margin-top: -2.5rem;
`
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const Img = imgName => {
  return require(`../../assets/${imgName}.svg`)
}

const CurrentHand = props => {
  const { currenthand } = props

  return (
    <>
      {currenthand.map(card => (
        <CurrentHandContainer key={card[0] + card[1]}>
          {card[1] === 'Heart' || card[1] === 'Diamond' ? (
            <H1 secondary>{card[0]}</H1>
          ) : (
            <H1>{card[0]}</H1>
          )}
          <SuitsContainer>
            <SuitImage src={Img(card[1])} />
            <SuitImageLarge src={Img(card[1])} />
          </SuitsContainer>
        </CurrentHandContainer>
      ))}
    </>
  )
}

CurrentHand.propTypes = {
  currenthand: PropTypes.instanceOf(Array).isRequired,
}

const mapStateToProps = state => {
  return {
    currenthand: state.currenthandReducer.currenthand,
  }
}

export default connect(mapStateToProps, null)(CurrentHand)
