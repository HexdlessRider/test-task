export const SELECT_OPTION = 'SELECT_OPTION';
export const SET_DISCOUNT_CODE = 'SET_DISCOUNT_CODE';
export const GENERATE_DISCOUNT_CODE = 'GENERATE_DISCOUNT_CODE';
export const SET_NOTES = 'SET_NOTES';

interface SelectOptionAction {
    type: typeof SELECT_OPTION;
    payload: string;
}

interface SetDiscountCodeAction {
    type: typeof SET_DISCOUNT_CODE;
    payload: string;
}

interface GenerateDiscountCodeAction {
    type: typeof GENERATE_DISCOUNT_CODE;
    payload: string;
}

interface SetNotesAction {
    type: typeof SET_NOTES;
    payload: string;
}

export type ActionTypes = SelectOptionAction | SetDiscountCodeAction | GenerateDiscountCodeAction | SetNotesAction;
