import React from "react";

function SearchFilter({
  label,
  query,
  handleSearch,
  filteredData,
  selectedValue,
  handleItemClick,
}) {
  return (
    <>
      <div className="pb-2">
        <label class="font-montserrat text-[16px] font-semibold leading-29 text-left text-white">
          {label}
        </label>
      </div>
      <div className="flex align-center">
        <input
          type="text"
          placeholder={"Search..."}
          value={query}
          onChange={handleSearch}
          className="h-12 inline-flex w-[398px] rounded-add-travellers border shadow-2xl text-[14px] font-normal leading-29 text-left bg-dark-blue border bg-dark-blue text-white focus:ring-fragomen-blue focus:border-fragomen-blue p-3 dark:bg-dark-gunmetal dark:dark-gunmetal dark:placeholder-white dark:focus:ring-fragomen-blue dark:focus:border-fragomen-blue"
        />
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex absolute left-[360px] mt-3.5 "
        >
          <g clip-path="url(#clip0_0_703)">
            <path
              d="M11.5 6.5C11.5 5.17392 10.9732 3.90215 10.0355 2.96447C9.09782 2.02678 7.82605 1.5 6.49997 1.5C5.17389 1.5 3.90212 2.02678 2.96444 2.96447C2.02675 3.90215 1.49997 5.17392 1.49997 6.5C1.49997 7.82608 2.02675 9.09785 2.96444 10.0355C3.90212 10.9732 5.17389 11.5 6.49997 11.5C7.82605 11.5 9.09782 10.9732 10.0355 10.0355C10.9732 9.09785 11.5 7.82608 11.5 6.5ZM10.5343 11.5969C9.42809 12.475 8.02497 13 6.49997 13C2.90934 13 -3.05176e-05 10.0906 -3.05176e-05 6.5C-3.05176e-05 2.90937 2.90934 0 6.49997 0C10.0906 0 13 2.90937 13 6.5C13 8.025 12.475 9.42813 11.5968 10.5344L15.4718 14.4094L16.0031 14.9406L14.9406 16L14.4093 15.4688L10.5343 11.5938V11.5969Z"
              fill="#FAFAFB"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_703">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      {query !== "" && (
        <div
          className="origin-top-left absolute z-30 mt-2 w-full rounded-md shadow-lg bg-dark-gunmetal ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-2 pl-5" role="none">
            <h3 className="text-light-blue px-4 font-medium text-sm pb-1">
              Filter label
            </h3>
            <ul>
              {filteredData.map((item, index) => (
                <li key={index} className="">
                  <label className="flex items-center px-4">
                    <input
                      type="checkbox"
                      checked={selectedValue.includes(item)}
                      onClick={() => {
                        handleItemClick(item);
                      }}
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-dark-gunmetal before:opacity-0 before:transition-opacity border-fragomen-blue border-2 checked:border-fragomen-blue checked:bg-fragomen-blue checked:before:bg-gray-900 hover:before:opacity-10"
                    />
                    <span
                      className="font-inter block px-2 py-2 text-sm text-white cursor-pointer"
                      role="menuitem"
                      tabIndex="-1"
                    >
                      {item}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchFilter;
