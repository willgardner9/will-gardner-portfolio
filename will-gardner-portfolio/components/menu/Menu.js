import MailButton from "./MailButton";
import GitHubButton from "./GitHubButton";
import AnchorButton from "./AnchorButton";
import LinkedInButton from "./LinkedInButton";
import Button from "./Button";
import ThemeButton from "./ThemeButton";
import { useTheme } from 'next-themes'
import HomeButton from "./HomeButton";

export default function Menu() {
  const { theme, setTheme } = useTheme()
  return (
    <section className="w-full flex justify-end mt-8">
      <AnchorButton destination="/">
        <HomeButton />
      </AnchorButton>
      <AnchorButton destination="mailto:willgardner9@gmail.com" newTab>
        <MailButton />
      </AnchorButton>
      <AnchorButton destination="https://github.com/willgardner9" newTab>
        <GitHubButton/>
      </AnchorButton>
      <AnchorButton destination="https://www.linkedin.com/in/will-gardner9/" newTab>
        <LinkedInButton/>
      </AnchorButton>
      <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <ThemeButton />
      </Button>
    </section>
  )
}