import { FETCH_TEST } from '@redux/actionTypes';
import { testApi } from '@apis';

export const fetchTest = () => async (dispatch: DispatchType) => {
  try {
    let data = await testApi.fetchTests();

    const action: TestAction = {
      type: FETCH_TEST,
      payload: data,
    };
    return dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
