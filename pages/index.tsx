import type { NextPage } from 'next';
import Head from 'next/head';
import tw from 'twin.macro';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Wrapper } from '@styles';
import { testApi } from '@apis';
import { FETCH_TEST } from '@redux/actionTypes';

interface Props {
  todos: ITest[] | null;
}

const Home: NextPage<Props> = ({ todos }) => {
  const dispatch = useDispatch();
  const { tests } = useSelector((state: AllStates) => state.tests);

  useEffect(() => {
    dispatch({
      type: FETCH_TEST,
      payload: todos,
    });
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <Container>
          <div className="mb-5">
            <h1 className="text-grey-700 text-lg font-bold uppercase text-center ">
              Hello World !!
            </h1>
            <p className="text-center">
              These datas are shown from redux state. From fake api response.
            </p>
          </div>

          <table className="table-auto border-b border-gray-200 shadow-lg mt-5 w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-2 text-xs">ID</th>
                <th className="px-6 py-2 text-xs">Title</th>
                <th className="px-6 py-2 text-xs">Body</th>
              </tr>
            </thead>
            <tbody>
              {tests.map((test) => (
                <tr key={test.id} className="whitespace-wrap hover:bg-gray-100">
                  <td className="border-t border-gray-200 px-6 py-4 text-sm">
                    {test.id}
                  </td>
                  <td className="border-t border-gray-200 px-6 py-4 text-sm">
                    {test.title}
                  </td>
                  <td className="border-t border-gray-200 px-6 py-4 text-sm">
                    {test.body}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-center text-xs mt-5">
            This is the boilerplate for Next.js + TypeScript + TailwindCSS +
            Redux + Axios + Styled-Components
          </p>
        </Container>
      </Wrapper>
    </>
  );
};

const Container = styled.div`
  ${tw`text-gray-500 font-semibold`}
`;

export const getServerSideProps = async () => {
  const todos = await testApi.fetchTests();
  return {
    props: { todos },
  };
};

export default Home;
