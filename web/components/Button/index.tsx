interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button = ({ label, onClick, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={` bg-indigo-500 font-bold text-white px-12 py-2 rounded-md hover:bg-indigo-400 focus:bg-indigo-600 transition-all`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
