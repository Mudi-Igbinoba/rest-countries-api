import { MdOutlineSearch } from 'react-icons/md';

const SearchBar = () => {
    return (
        <div className='w-full md:w-5/12 flex items-center bg-white dark:bg-blue-1000 text-zinc-25 dark:text-white shadow-md rounded-md transition-all duration-100'>
            <button
                disabled
                className='transition-all duration-100 focus-visible:outline-none flex justify-center items-center rounded-tl-md rounded-bl-md h-14 ps-9 pe-5'>
                <MdOutlineSearch className='text-2xl' />
            </button>
            <input
                type='search'
                placeholder='Search for a country...'
                name=''
                id=''
                className='transition-all duration-100 h-14 ps-2 pe-9 w-full text-sm focus-visible:outline-none rounded-tr-md rounded-br-md  dark:bg-blue-1000 dark:placeholder:text-white'
            />
        </div>
    );
};

export default SearchBar;
