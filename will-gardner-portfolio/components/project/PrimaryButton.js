import Link from 'next/link'

const PrimaryButton = ({ buttonText, buttonDestination }) => {
  return (
    <Link href={ buttonDestination }>
      <button
        className="font-karla text-lg font-light flex items-center outline-none rounded-lg h-14 p-3 mr-4 max-w-max focus:ring-4 ring-gray-300 active:ring-4 active:ring-gray-400 bg-black text-white hover:bg-gray-900 mt-4 sm:mt-0 dark:bg-gray-300 dark:text-black">
        { buttonText }
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 transition-all" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </Link>
  )
}

module.exports = PrimaryButton