import Text from "../global/Text";
import GhostButton from "../project/GhostButton";

export default function Contact() {
  return (
    <section className="mt-2 flex flex-col sm:flex-row items-start">
      <div className="sm:pr-4">
        <Text  text="Please use the buttons at the top of the page to get in contact with my via email or LinkedIn. Or make a PR on one of my GitHub repos - whatever floats your boat!" />
      </div>
      <div className="mt-4">
        <GhostButton buttonText="Download CV" buttonDestination="https://www.example.com" />
      </div>
    </section>
  )
}
