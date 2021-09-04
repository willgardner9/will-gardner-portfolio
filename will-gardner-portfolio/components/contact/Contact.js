import Text from "../global/Text";
import GhostButton from "../project/GhostButton";

export default function Contact() {
  return (
    <section className="mt-2 flex flex-col sm:flex-row items-start">
      <div className="sm:pr-4">
        <Text text="Please use the buttons at the top of the page to get in contact with me via email or LinkedIn. Or make a PR on one of my GitHub repos - whatever floats your boat!" />
      </div>
      <div className="mt-4">
        <a
          href="/cv.pdf"
          target="_blank"
          className="font-karla text-lg font-light flex items-center outline-none rounded-lg h-14 p-3 mr-4 min-w-max focus:ring-4 ring-gray-300 active:ring-4 active:ring-gray-400 bg-gray-200 hover:bg-gray-300 first:mt-0 mt-4 sm:mt-0       dark:bg-gray-700
          dark:hover:bg-gray-600
          dark:hover:text-gray-300
          dark:ring-gray-600
          dark:active:ring-gray-500"
        >
          Download CV
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-3 transition-all"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
