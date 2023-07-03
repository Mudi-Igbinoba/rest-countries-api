import { useState } from 'react';
import Header from './components/Header';

function App() {
    const [isDark, setIsDark] = useState(false);
    const styles = isDark ? 'dark font-nunito' : 'font-nunito';

    return (
        <div className={styles}>
            {/* Header */}
            <Header isDark={isDark} setDark={setIsDark} />
            {/* Main */}

            {/* Search Bar */}

            {/* Filter */}

            {/* Cards */}
        </div>
    );
}

export default App;
