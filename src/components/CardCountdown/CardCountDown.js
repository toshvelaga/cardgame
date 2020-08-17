import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  background-color: black;
  border: 1px solid #7de40d;
  width: 10rem;
  height: 6rem;
  margin: 2rem auto;
`

const H1 = styled.h1`
  font-family: 'Rockwell';
  color: white;
  font-size: 1.5rem;
`
const H2 = styled.h2`
  font-family: 'Rockwell';
  font-weight: normal;
  color: white;
  font-size: 1.2rem;
`

const CardCountDown = props => {
  const { numCards } = props
  return (
    <Container>
      <H1>{numCards}</H1>
      <H2>Cards Left</H2>
    </Container>
  )
}

CardCountDown.propTypes = {
  numCards: PropTypes.number.isRequired,
}

const mapStateToProps = state => {
  return {
    numCards: state.numcardsReducer.numCards,
  }
}

export default connect(mapStateToProps, null)(CardCountDown)
