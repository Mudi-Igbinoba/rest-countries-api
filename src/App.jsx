import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Dropdown from './components/Dropdown';
import Cards from './components/Cards';
import data from './data.json';

function App() {
    const [isDark, setIsDark] = useState(false);
    const styles = isDark ? 'dark font-nunito' : 'font-nunito';

    return (
        <div className={styles}>
            <div className='text-blue-1200 dark:text-white'>
                {/* Header */}
                <Header isDark={isDark} setDark={setIsDark} />
                {/* Main */}
                <main className='bg-zinc-50 dark:bg-blue-1100 min-h-screen transition-all duration-100 text-sm'>
                    <section className='container mx-auto px-4 py-6 md:px-9 min-[1440px]:px-0 lg:py-12'>
                        <section className='flex flex-wrap justify-between items-center'>
                            <SearchBar />
                            <Dropdown />
                        </section>

                        <section className='mt-9 lg:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-x-10 gap-y-12 md:gap-y-20'>
                            {data.map((e) => (
                                <Cards
                                    key={e.alpha2Code}
                                    name={e.name}
                                    region={e.region}
                                    flag={e.flag}
                                    population={e.population}
                                    capital={e.capital}
                                />
                            ))}
                        </section>
                    </section>
                </main>

                {/* Search Bar */}

                {/* Filter */}

                {/* Cards */}
            </div>
        </div>
    );
}

export default App;
