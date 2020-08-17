import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import winner from "../../assets/winner.svg";
import ConfettiAnimated from "../../components/ConfettiAnimated/ConfettiAnimated";
import CardCountDown from "../../components/CardCountdown/CardCountDown";
import CurrentHand from "../../components/CurrentHand/CurrentHand";
import ResetButton from "../../components/ResetButton/ResetButton";

const H2 = styled.h2`
	font-family: "Rockwell";
	font-weight: normal;
	color: white;
	margin-top: 4rem;
	font-size: 2rem;
`;
const Message = styled(H2)`
	margin-bottom: -2rem;
	font-size: 4rem;
`;
const Div = styled.div`
	margin-top: -5rem;
`;

const WinOrLose = (props) => {
	const { outcome } = props;

	return (
		<>
			<CardCountDown />
			{outcome === "WIN" ? (
				<Div>
					<img src={winner} alt="winner" />
					<ConfettiAnimated />
				</Div>
			) : (
				<Message>OH NO!</Message>
			)}
			<CurrentHand />
			<H2>
				{outcome === "WIN"
					? "Great Job! You won the game."
					: "Better luck next time."}
			</H2>
			<ResetButton title="Play Again" />
		</>
	);
};

WinOrLose.propTypes = {
	outcome: PropTypes.string,
};

WinOrLose.defaultProps = {
	outcome: "LOSE",
};

const mapStateToProps = (state) => {
	return {
		outcome: state.outcomeReducer.outcome,
	};
};

export default connect(mapStateToProps, null)(WinOrLose);
