const GhostButton = require("./GhostButton")
const PrimaryButton = require("./PrimaryButton")
const ProjectDescription = require("./ProjectDescription")
const ProjectNameText = require("./ProjectNameText")

const Project = ({ projectNameText, projectDescription, viewLiveButtonDestination, viewOnGitHubButtonDestination, readCaseStudyDestination }) => {
  return (
    <section className="flex flex-col lg:flex-row w-full mt-12">
      <div className="w-full lg:w-1/2 lg:pr-6">
        <div className="w-full h-72 bg-gray-200 rounded-xl"></div>
      </div>
      <div className="w-full lg:w-1/2 lg:pl-6">
        <ProjectNameText projectNameText={projectNameText} />
        <ProjectDescription projectDescription={projectDescription} />
        <div className="mt-8 flex flex-col sm:flex-row">
          <GhostButton buttonText="View live" buttonDestination={viewLiveButtonDestination} />
          <GhostButton buttonText="View on GitHub" buttonDestination={viewOnGitHubButtonDestination} />
          <PrimaryButton buttonText="Read case study" buttonDestination={readCaseStudyDestination} />
        </div>
      </div>
    </section>
  )
}

module.exports = Project