import React from 'react';

const SidebarPinButton = ({ isPinned, onClick }: any) => {
    return (
        <button
            onClick={onClick}
            className={`absolute top-1/2 -translate-y-1/2 -left-3.5 bg-white dark:bg-slate-700 border-2 border-indigo-500 rounded-full w-7 h-7 flex items-center justify-center transition-transform duration-200 hover:scale-110`}
            aria-label={isPinned ? 'سایدبار را از حالت پین خارج کنید' : 'سایدبار را پین کنید'}
        >
            <div className={`w-3 h-3 rounded-full bg-indigo-500 transition-all duration-200 ${isPinned ? 'ring-2 ring-offset-2 dark:ring-offset-slate-700 ring-indigo-500' : ''}`}></div>
        </button>
    );
};

export default SidebarPinButton;