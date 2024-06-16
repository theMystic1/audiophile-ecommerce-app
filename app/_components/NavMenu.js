"use client";

import Products from "./Products";

function NavMenu({ isOpenMenu, setIsOpenMenu }) {
  function handleCloseMenu() {
    setIsOpenMenu(false);
  }
  return (
    <div
      className={`bg-black bg-opacity-50 absolute left-0 right-0 top-[84px] z-50  shadow-lg h-[1000vh] ${
        isOpenMenu ? "translate-x-0 " : "-translate-x-full"
      } transform transition-all duration-500 z-50`}
    >
      <div className={`bg-primary-50 px-4 pt-20  } rounded-b-lg`}>
        <Products handleCloseMenu={handleCloseMenu} />
      </div>
    </div>
  );
}

export default NavMenu;
