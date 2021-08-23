import MailButton from "./MailButton";
import GitHubButton from "./GitHubButton";
import AnchorButton from "./AnchorButton";
import LinkedInButton from "./LinkedInButton";

export default function Menu() {
  return (
    <section className="w-full flex justify-end mt-8">
      <AnchorButton destination="mailto:willgardner9@gmail.com">
        <MailButton />
      </AnchorButton>
      <AnchorButton destination="https://github.com/willgardner9">
        <GitHubButton/>
      </AnchorButton>
      <AnchorButton destination="https://www.linkedin.com/in/will-gardner9/">
        <LinkedInButton/>
      </AnchorButton>
    </section>
  )
}