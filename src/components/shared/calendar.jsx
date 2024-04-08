export default function Calendar({ placeholder, value, handleChange, name }) {
  return (
    <div className="mt-2 flex items-center">
      <div className="pointer-events-none absolute l-5 ml-2">
        <img src="/calendar.svg" className="w-5 h-5" />
      </div>
      <input
        name={name}
        value={value}
        onChange={handleChange}
        datepicker="true"
        type="text"
        className="block w-full bg-fill py-2 outline-none border-none pl-8 pr-3 focus:border-default focus:border-black text-light rounded-lg  border-0 my-1 md:my-2 lg:py-4 border border-fill text-sm ps-10 p-2.5 "
        placeholder={placeholder}
      />
    </div>
  );
}
