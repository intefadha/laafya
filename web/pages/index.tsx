import { addNumbers } from '@laafya/shared';
import Button from '../components/Button';

export default function Home() {
  return (
    <div>
      <h1 className='text-4xl font-bold'>Result is: {addNumbers(3, 19)}</h1>
      <Button label='Yey!' onClick={() => console.log('Whoops')} />
    </div>
  );
}
