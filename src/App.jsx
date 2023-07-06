import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Dropdown from './components/Dropdown';

function App() {
    const [isDark, setIsDark] = useState(false);
    const styles = isDark ? 'dark font-nunito' : 'font-nunito';

    return (
        <div className={styles}>
            <div className='text-blue-1200 dark:text-white'>
                {/* Header */}
                <Header isDark={isDark} setDark={setIsDark} />
                {/* Main */}
                <main className='bg-zinc-50 dark:bg-blue-1100 min-h-screen'>
                    <div className='container mx-auto px-4 py-8 md:px-9 min-[1440px]:px-0 lg:py-12'>
                        <div className='flex flex-wrap justify-between items-center'>
                            <SearchBar />

                            <Dropdown />
                        </div>
                    </div>
                </main>

                {/* Search Bar */}

                {/* Filter */}

                {/* Cards */}
            </div>
        </div>
    );
}

export default App;
