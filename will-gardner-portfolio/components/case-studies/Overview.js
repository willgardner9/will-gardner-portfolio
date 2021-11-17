const Overview = ({overviewItems}) => {
  return (
    <ul className="mt-4 font-karla text-lg font-light leading-8 dark:text-gray-400">
      {overviewItems.map((item) => (
        <li>
          <span className="font-medium">{item.preface}</span> {item.main}
        </li>
      ))}
    </ul>
  );
};

module.exports = Overview;
