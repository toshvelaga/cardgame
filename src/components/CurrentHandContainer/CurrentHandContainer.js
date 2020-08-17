import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Div = styled.div`
  display: inline-block;
  background-color: white;
  border-radius: 1rem;
  width: 10rem;
  height: 14rem;
  margin: 3rem 1.5rem 0rem 1.5rem;
`
const DivWithFiveCards = styled(Div)`
  margin: 3rem 1.5rem;
  &:nth-child(2) {
    transform: rotate(15deg) translateY(-3rem);
  }
  &:nth-child(3) {
    transform: rotate(7.5deg);
  }
  &:nth-child(4) {
    transform: rotate(0deg) translateY(1rem);
  }
  &:nth-child(5) {
    transform: rotate(-7.5deg);
  }
  &:nth-child(6) {
    transform: rotate(-15deg) translateY(-3rem);
  }
`

const INCREMENT = 5

const CurrentHandContainer = props => {
  const { currenthand, children } = props

  return (
    <>
      {currenthand.length === INCREMENT ? (
        <DivWithFiveCards>{children}</DivWithFiveCards>
      ) : (
        <Div>{children}</Div>
      )}
    </>
  )
}

CurrentHandContainer.propTypes = {
  currenthand: PropTypes.instanceOf(Array).isRequired,
  children: PropTypes.node.isRequired,
}

const mapStateToProps = state => {
  return {
    currenthand: state.currenthandReducer.currenthand,
  }
}

export default connect(mapStateToProps, null)(CurrentHandContainer)
