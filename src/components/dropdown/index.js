import React from "react";

function Dropdown({ label, toggle, name, isOpen, items, handleSelect }) {
  return (
    <>
      <div className="pb-1">
        <label className="font-montserrat text-[16px] font-semibold leading-29 text-left text-white">
          {label}
        </label>
      </div>
      <button
        type="button"
        className="h-12 inline-flex w-[398px] rounded-md border shadow-sm font-montserrat text-[14px] font-semibold leading-29 text-left bg-dark-blue border bg-dark-blue text-white focus:ring-fragomen-blue focus:border-fragomen-blue block p-3 dark:bg-dark-gunmetal dark:dark-gunmetal dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onClick={toggle}
      >
        {name}
        <svg
          className="flex absolute left-[350px] ml-2 h-6 w-6 mt-0.5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 12l-8-8 1.5-1.5L10 9.67l6.5-6.17L18 4z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="origin-top-left absolute z-30 mt-2 w-full rounded-md shadow-2xl bg-dark-gunmetal ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="relative py-2" role="none">
            {items.map((country, index) => (
              <span
                key={index}
                className="block px-4 py-2 text-sm text-white hover:bg-blue-500 cursor-pointer"
                role="menuitem"
                tabIndex="-1"
                onClick={() => handleSelect(country)}
              >
                {country.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Dropdown;
