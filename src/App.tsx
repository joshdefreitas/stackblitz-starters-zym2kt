import { FC } from 'react';
import { Greet } from './components/Greet';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <Greet name='Josh' messageCount={10} isLoggedIn = {true}/>
  );
};
 