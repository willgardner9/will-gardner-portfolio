import Image from "next/image";
import Tooltip from "@carforyou/react-tooltip-lite";

const TechnologyGroup = ({technologyGroupText, technologiesObject}) => {
  return (
    <section className="flex flex-col mr-0 sm:mr-20 webkit-hide-scrollbar">
      <h5 className="mt-16 uppercase text-xs font-medium text-gray-500">
        {technologyGroupText}
      </h5>
      <div className="flex flex-row mt-4 mb-4 w-95vw sm:w-full overflow-x-scroll webkit-hide-scrollbar">
        {technologiesObject.map((technology) => (
          <div className="mr-8">
            <Tooltip
              content={technology.tooltip}
              direction="bottom"
              key={technology.tooltip}
              className="text-xs text-center"
              useDefaultStyles={true}
              distance={15}
            >
              <div className="flex flex-col items-center justify-center mt-2 sm:mt-0 min-w-max">
                <Image
                  src={`/${technology.url}.svg`}
                  width={technology.enlarge ? "80" : "30"}
                  height="30"
                  alt={`${technology.tooltip} logo`}
                />
              </div>
            </Tooltip>
          </div>
        ))}
      </div>
    </section>
  );
};

module.exports = TechnologyGroup;
