const Skeleton = () => {
    return (
        <div className='w-4/5 sm:w-auto mx-auto sm:mx-0 lg:w-auto rounded-lg shadow-lg bg-white dark:bg-blue-1000 transition-all duration-100'>
            <div className='animate-pulse'>
                <div className='h-[180px] lg:h-[250px] w-full bg-slate-200 dark:bg-slate-500 rounded-t-lg'></div>

                <div className='p-6'>
                    <div className='h-4 w-1/2 bg-slate-200 dark:bg-slate-500 rounded mb-5'></div>
                    <div className='grid grid-cols-3 gap-2 mb-3'>
                        <div className='h-2 bg-slate-200 dark:bg-slate-500 rounded col-span-1'></div>
                        <div className='h-2 bg-slate-200 dark:bg-slate-500 rounded col-span-1'></div>
                    </div>

                    <div className='grid grid-cols-3 gap-2 mb-3'>
                        <div className='h-2 bg-slate-200 dark:bg-slate-500 rounded col-span-1'></div>
                        <div className='h-2 bg-slate-200 dark:bg-slate-500 rounded col-span-1'></div>
                    </div>

                    <div className='grid grid-cols-3 gap-2 mb-3'>
                        <div className='h-2 bg-slate-200 dark:bg-slate-500 rounded col-span-1'></div>
                        <div className='h-2 bg-slate-200 dark:bg-slate-500 rounded col-span-1'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skeleton;
