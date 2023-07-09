import PropTypes from 'prop-types';

const Cards = ({ name, flag, region, population, capital }) => {
    return (
        <div className='w-4/5 sm:w-auto mx-auto sm:mx-0 lg:w-auto rounded-lg shadow-lg bg-white dark:bg-blue-1000 transition-all duration-100'>
            <div className='lg:h-[250px]'>
                <img
                    className='rounded-t-lg w-full h-full'
                    src={flag}
                    alt={`The flag of ${name}`}
                />
            </div>

            <div className='p-6'>
                <h2 className='font-extrabold text-base lg:text-lg mb-2.5'>
                    {name}
                </h2>
                <p className='mb-1'>
                    <strong className='font-semibold me-1'>Population:</strong>
                    {new Intl.NumberFormat().format(population)}
                </p>
                <p className='mb-1'>
                    <strong className='font-semibold me-1'>Region:</strong>
                    {region}
                </p>
                <p className='mb-1'>
                    <strong className='font-semibold me-1'>Capital:</strong>
                    {capital}
                </p>
            </div>
        </div>
    );
};

Cards.propTypes = {
    name: PropTypes.string,
    flag: PropTypes.string,
    population: PropTypes.number,
    region: PropTypes.string,
    capital: PropTypes.string,
};

export default Cards;
