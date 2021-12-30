interface ITest {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type TestState = {
  tests: ITest[];
};

type TestAction = {
  type: string;
  payload: ITest[];
};

type DispatchType = (args: TestAction) => TestAction;

type AllStates = {
  tests: TestState;
};
