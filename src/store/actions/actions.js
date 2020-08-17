import { WIN, LOSE } from "../constants/actionTypes";

export function winningOutcome() {
	return { type: WIN };
}

export function losingOutcome() {
	return { type: LOSE };
}
