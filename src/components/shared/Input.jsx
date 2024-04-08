export default function Input({ placeholder, value, handleChange, name }) {
  return (
    <div className="mt-2 rounded-md">
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        className="block w-full bg-fill py-2 outline-none border-none px-3 text-light rounded-lg border-0 my-2 lg:py-4"
        placeholder={placeholder}
      />
    </div>
  );
}
