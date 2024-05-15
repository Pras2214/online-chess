const Button = ({ onClick,children }: { onClick: () => void,children:React.ReactNode }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-16 text-2xl rounded mt-10"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
