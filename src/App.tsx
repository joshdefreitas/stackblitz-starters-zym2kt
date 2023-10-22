import { FC } from 'react';
import { Greet } from './components/Greet';
import { Person } from './components/Person';

export const App: FC<{ name: string }> = ({ name }) => {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }
  return (
    <div>
      <Greet name='Josh' messageCount={10} isLoggedIn = {true}/>
      <Person name={personName}/>
    </div>
  );
};
 