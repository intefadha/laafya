import Button from './index'; //importing the button component

let story = {
  title: 'Button',
};

const Template = (arguments_) => <Button {...arguments_} />; //creating a template

export const Primary = Template.bind({});

// Passing the props to the component

Primary.args = {
  label: 'Primary button',
  onClick: () => {
    alert('clicked');
  },
};

export default story;
