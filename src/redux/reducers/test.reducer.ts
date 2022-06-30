import { FETCH_TEST } from '@redux/actionTypes';

const reducer = (
  state: TestState = { tests: [] },
  action: TestAction
): TestState => {
  switch (action.type) {
    case FETCH_TEST:
      return {
        tests: [...action.payload],
      };
  }
  return state;
};

export default reducer;
