import { FETCH_TEST } from "@redux/actionTypes";
import axios from "@utils/axios";

export const fetchTest = () => async (dispatch: DispatchType) => {
  try {
    let { data } = await axios.get("/posts");

    data = data.slice(0, 2);

    const action: TestAction = {
      type: FETCH_TEST,
      payload: data,
    };
    return dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
