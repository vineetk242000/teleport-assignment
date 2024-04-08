export default function Input({
  placeholder,
  value,
  handleChange,
  name,
  inputAdornment
}) {
  return (
    <div className="mt-1 md:mt-2 rounded-md flex items-center">
      {inputAdornment && (
        <div className="pointer-events-none absolute l-5 ml-2">
          <img src={inputAdornment} className="w-5 h-5" />
        </div>
      )}
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        className="block w-full bg-fill py-2 outline-none border-none pl-8 pr-3 focus:border-default focus:border-black text-light rounded-lg border-0 my-1 md:my-2 lg:py-4"
        placeholder={placeholder}
      />
    </div>
  );
}
