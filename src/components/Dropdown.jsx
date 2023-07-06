import clsx from 'clsx';
import Select from 'react-select';

const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
];

const Dropdown = () => {
    return (
        <>
            <Select
                // onChange={(e) => console.log(e)}
                options={options}
                placeholder='Filter by Region'
                unstyled
                classNames={{
                    container: () =>
                        'mt-10 md:mt-0 w-2/3 md:w-auto font-semibold dark:font-light text-sm',
                    control: ({ isFocused }) =>
                        clsx(
                            'border-0 shadow-md rounded-md bg-white dark:bg-blue-1000 h-14 ps-8 lg:ps-5 pe-5',

                            isFocused && 'border-0'
                        ),

                    indicatorsContainer: () => 'md:ps-5 lg:ps-8',
                    option: () => clsx('pb-2'),

                    menu: () =>
                        clsx(
                            'bg-white dark:bg-blue-1000 ps-8 lg:ps-5 pe-5 rounded-md mt-2 shadow-md pt-5 pb-3'
                        ),
                }}
                isSearchable={false}
            />
        </>
    );
};

export default Dropdown;
