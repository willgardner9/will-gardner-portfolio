const Heading = ({ headingText }) => {
  return (
    <section className="border-b-2 border-gray-200 dark:border-gray-700">
      <h3 className="font-karla text-2xl font-medium mt-12 mb-2">{ headingText }</h3>
    </section>
  )
}

module.exports = Heading