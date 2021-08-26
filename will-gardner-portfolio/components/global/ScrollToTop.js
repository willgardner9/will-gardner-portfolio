const ScrollToTop = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative">
      <button aria-label="Go to top" onClick={() => scrollToTop()} className="absolute rounded-lg h-12 w-12 transition-all outline-none flex items-center justify-center
        bg-gray-200 text-gray-400 
        hover:bg-gray-300 hover:text-gray-500
        focus:ring-4 ring-gray-300
        active:ring-4 active:ring-gray-400
        dark:bg-gray-700
        dark:hover:bg-gray-600
        dark:hover:text-gray-300
        dark:ring-gray-600
        dark:active:ring-gray-500" style={{ bottom: '25px', right: '25px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
          </svg>
          <span className="hidden">Go to top</span>
        </button>
    </div>
  )
}

module.exports = ScrollToTop