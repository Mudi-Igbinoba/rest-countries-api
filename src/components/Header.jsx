import { HiOutlineMoon, HiMoon } from 'react-icons/hi';
import PropTypes from 'prop-types';

const Header = ({ isDark, setDark }) => {
    const setDarkMode = () => {
        setDark((prevState) => !prevState);
    };

    return (
        <header className='shadow-md dark:bg-blue-1000'>
            <div className='px-4 py-9 md:px-9 min-[1440px]:px-0 min-[1440px]:py-7 flex flex-wrap justify-between items-center container mx-auto'>
                <h1>
                    <a href='#' className='font-extrabold text-lg lg:text-2xl'>
                        Where in the world?
                    </a>
                </h1>

                <button
                    onClick={setDarkMode}
                    className='focus-visible:outline-none'>
                    {isDark ? (
                        <>
                            <HiMoon className='inline text-xl lg:text-2xl me-2 lg:me-3 mb-0.5 lg:mb-1' />
                            <span className='font-semibold lg:text-lg'>
                                Light Mode
                            </span>
                        </>
                    ) : (
                        <>
                            <HiOutlineMoon className='inline text-xl lg:text-2xl me-2 lg:me-3 mb-0.5 lg:mb-1' />
                            <span className='font-semibold lg:text-lg'>
                                Dark Mode
                            </span>
                        </>
                    )}
                </button>
            </div>
        </header>
    );
};

Header.propTypes = {
    isDark: PropTypes.bool,
    setDark: PropTypes.func,
};

export default Header;
