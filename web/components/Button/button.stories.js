import Button from './index'; //importing the button component

let story = {
  title: 'My First Button',
};

const Template = (arguments_) => <Button {...arguments_} />; //creating a template

export const Primary = Template.bind({});

//Passing the props to the component

Primary.args = {
  size: 'h-10 w-56',
  children: 'Primary Button',
};

export default story;
