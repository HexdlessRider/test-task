export type SelectAction = {
    type: "SELECT_OPTION";
    payload: string;
  };
  
  export const selectedOption = (option: string): SelectAction => ({
    type: "SELECT_OPTION",
    payload: option
  });
  