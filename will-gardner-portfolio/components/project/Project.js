const GhostButton = require("./GhostButton")
const PrimaryButton = require("./PrimaryButton")
const ProjectDescription = require("./ProjectDescription")
const ProjectNameText = require("./ProjectNameText")
import Image from 'next/image'

const Project = ({ projectNameText, projectDescription, viewLiveButtonDestination, viewOnGitHubButtonDestination, readCaseStudyDestination, projectImage }) => {
  return (
    <section className="flex flex-col w-full mt-12 mb-24">
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 lg:mr-6 h-72 relative border-4 border-gray-50 dark:border-gray-800 rounded-xl">
          <Image src={`/${projectImage}.png`} className="rounded-xl" layout="fill" objectFit="cover" objectPosition="top" />
        </div>
        <div className="w-full lg:w-1/2 lg:ml-6">
          <ProjectNameText projectNameText={projectNameText} />
          <ProjectDescription projectDescription={projectDescription} />
        </div>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row lg:justify-end">
          <GhostButton buttonText="View live" buttonDestination={viewLiveButtonDestination} />
          <GhostButton buttonText="View on GitHub" buttonDestination={viewOnGitHubButtonDestination} />
          <PrimaryButton buttonText="Read case study" buttonDestination={readCaseStudyDestination} />
        </div>
    </section>
  )
}

module.exports = Project