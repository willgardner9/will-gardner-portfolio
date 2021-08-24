const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
      rounded-lg p-2 transition-all mx-2 last:mr-0 outline-none 
      bg-gray-200 text-gray-400 
      hover:bg-gray-300 hover:text-gray-500
      focus:ring-4 ring-gray-300
      active:ring-4 active:ring-gray-400
      dark:bg-gray-700
      dark:hover:bg-gray-600
      dark:hover:text-gray-300
      dark:ring-gray-600
      dark:active:ring-gray-500
      ">
      { children }
    </button>
  )
}

module.exports = Button