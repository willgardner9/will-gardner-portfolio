const Button = ({ children, destination }) => {
  return (
    <a href={ destination } target="_blank"
      className="
      rounded-lg p-2 transition-all mx-2 last:mr-0 outline-none 
      bg-gray-200 text-gray-400 
      hover:bg-gray-300 hover:text-gray-500
      focus:ring-4 ring-gray-300
      active:ring-4 active:ring-gray-400
      ">
      { children }
    </a>
  )
}

module.exports = Button