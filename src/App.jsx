import { useState } from 'react';
import Header from './components/Header';

function App() {
    const [isDark, setIsDark] = useState(false);
    const styles = isDark ? 'dark font-nunito' : 'font-nunito';

    return (
        <div className={styles}>
            <div className=' text-blue-1200 dark:text-white'>
                {/* Header */}
                <Header isDark={isDark} setDark={setIsDark} />
                {/* Main */}
                <main className='bg-zinc-50 dark:bg-blue-1100 min-h-screen'>
                    <div className='container px-4 py-9 md:px-9 min-[1440px]:px-0 min-[1440px]:py-7'>
                        <div className='flex flex-wrap justify-between items-center'></div>
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
