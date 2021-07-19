import { addNumbers } from '@laafya/shared';

export default function Home() {
  return (
    <div>
      <h1 className='text-4xl font-bold'>Result is: {addNumbers(3, 19)}</h1>
    </div>
  );
}
