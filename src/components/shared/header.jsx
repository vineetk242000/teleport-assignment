import {
  Bars3Icon,
  HeartIcon,
  UserCircleIcon,
  UserIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";

export const Header = ({ openSideNav, setOpenSideNav }) => {
  return (
    <nav className=" fixed bg-white py-4 px-6 md:px-8 md:py-4 flex justify-between items-center w-full border-b-default border-b-fill top-0 left-0 z-20 opacity-100 ">
      <div className="container mx-auto flex items-center w-1/2 h-full ">
        {openSideNav ? (
          <XMarkIcon
            className="w-5 mr-4 cursor-pointer"
            onClick={() => setOpenSideNav(!openSideNav)}
          />
        ) : (
          <Bars3Icon
            className="w-5 mr-4 cursor-pointer"
            onClick={() => setOpenSideNav(!openSideNav)}
          />
        )}
        <img src="/logo-sm1.svg" className="w-6 lg:hidden" />
        <img src="/logo.png" className="hidden lg:block w-32 h-8" />
      </div>
      <div className="container mx-auto flex items-center w-1/2 justify-end h-full">
        <HeartIcon className="w-5 mr-2 lg:w-6" />
        <UserIcon className="w-5 lg:hidden" />
        <button className="hidden  py-2 ml-2 px-4 border-default border-black lg:flex justify-around items-center rounded">
          <UserCircleIcon className="w-6" />{" "}
          <span className="text-sm font-medium pl-1">Sign In</span>
        </button>
      </div>
    </nav>
  );
};
