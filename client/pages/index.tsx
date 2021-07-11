import { addNumbers } from '@laafya/utils';

export default function Home() {
  return (
    <div>
      <h1>Result is: {addNumbers(1, 2)}</h1>
    </div>
  );
}
