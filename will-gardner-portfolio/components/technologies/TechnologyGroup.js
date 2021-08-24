import Image from 'next/image'
import ReactTooltip from 'react-tooltip';

const TechnologyGroup = ({ technologyGroupText, technologiesObject }) => {
  return (
    <section className="flex flex-col mr-0 sm:mr-20">
      <h5 className="mt-16 uppercase text-xs font-medium text-gray-500">{ technologyGroupText }</h5>
      <div className="flex flex-row mt-4 mb-4 w-95vw sm:w-full overflow-x-scroll">
        { technologiesObject.map((technology) =>
          <div key={technology.tooltip} className="flex flex-col items-center justify-center mt-2 sm:mt-0 mr-8 min-w-max" onMouseEnter={() => console.log('hi')}>
            <Image data-tip={technology.tooltip} src={`/${technology.url}.svg`} width={technology.enlarge ? '80' : '30'} height="30" alt={`${technology.tooltip} logo`} />
          </div>
        ) }
      </div>
      <ReactTooltip place="bottom" type="dark" effect="solid"/>
    </section>
  )
}

module.exports = TechnologyGroup