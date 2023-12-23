import { SearchIcon } from "@heroicons/react/outline";

function SearchBox({ setSearchbool, placeholder, search, setSearch }) {
  return (
    <div className="flex flex-row items-center justify-between px-4 h-10 border bg-white rounded-full w-full">
      <SearchIcon className="text-black h-5" />
      <input
        placeholder={placeholder}
        value={search?.searchText}
        name="search"
        className="text-xs font-inter bg-transparent placeholder:text-primary-gray-250 w-11/12 focus:outline-none border-0 border-primary-gray-250"
        onChange={(e) => {
          e.target.value = e.target.value.trimStart();
          setSearch({
            ...search,
            searchText: e.target.value,
            isSearch: e.target.value !== "",
          });
          setSearchbool && setSearchbool(true);
        }}
      ></input>
    </div>
  );
}

export default SearchBox;
