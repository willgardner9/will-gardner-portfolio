const Title = ({titleText}) => {
  return (
    <section className="mt-8">
      <h1 className="font-karla text-3xl font-light dark:text-gray-200">
        Case study
      </h1>
      <h2 className="font-karla text-5xl font-medium mt-4 dark:text-gray-100">
        {titleText}
      </h2>
    </section>
  );
};

module.exports = Title;
