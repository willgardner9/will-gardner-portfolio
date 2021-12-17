const TechnologyGroup = require("./TechnologyGroup");

const Technologies = () => {
  const languagesObject = [
    {
      url: "html-5",
      tooltip: "HTML",
    },
    {
      url: "css-3",
      tooltip: "CSS",
    },
    {
      url: "javascript",
      tooltip: "JavaScript",
    },
    {
      url: "typescript-icon",
      tooltip: "TypeScript",
    },
    {
      url: "nodejs",
      tooltip: "Node.js",
      enlarge: true,
    },
  ];

  const versionControlObject = [
    {
      url: "git",
      tooltip: "Git",
      enlarge: true,
    },
    {
      url: "github-icon",
      tooltip: "GitHub",
    },
  ];

  const testingToolsObject = [
    {
      url: "jest",
      tooltip: "Jest",
    },
    // {
    //   url: 'jasmine',
    //   tooltip: 'Jasmine'
    // },
  ];

  const frontEndFrameworksObject = [
    {
      url: "react",
      tooltip: "React",
    },
    {
      url: "nextjs",
      tooltip: "Next.js",
      enlarge: true,
    },
    {
      url: "vue",
      tooltip: "Vue",
    },
    {
      url: "nuxt",
      tooltip: "Nuxt.js",
      enlarge: true,
    },
    {
      url: "svelte",
      tooltip: "Svelte",
      enlarge: true,
    },
    {
      url: "tailwindcss",
      tooltip: "Tailwind CSS",
      enlarge: true,
    },
  ];

  const backEndFrameworksObject = [
    {
      url: "express",
      tooltip: "Express",
      enlarge: true,
    },
    {
      url: "nestjs",
      tooltip: "NestJS",
    },
  ];

  const databasesObjects = [
    {
      url: "mongodb",
      tooltip: "MongoDB",
      enlarge: true,
    },
    {
      url: "postgresql",
      tooltip: "PostgreSQL",
    },
  ];

  const externalAPIObject = [
    {
      url: "puppeteer",
      tooltip: "Puppeteer",
    },
    {
      url: "stripe",
      tooltip: "Stripe",
      enlarge: true,
    },
    {
      url: "shopify",
      tooltip: "Shopify",
      enlarge: false,
    },
    {
      url: "supabase",
      tooltip: "supabase",
      enlarge: true,
    },
  ];

  const devToolsObject = [
    {
      url: "postman",
      tooltip: "Postman",
      enlarge: true,
    },
    {
      url: "insomnia",
      tooltip: "Insomnia",
    },
    {
      url: "npm",
      tooltip: "NPM",
    },
  ];

  const deploymentToolsObject = [
    {
      url: "aws",
      tooltip: "AWS",
      enlarge: true,
    },
    {
      url: "pulumi",
      tooltip: "Pulumi",
      enlarge: true,
    },
    {
      url: "digital-ocean",
      tooltip: "Digital Ocean",
      enlarge: true,
    },
    {
      url: "vercel",
      tooltip: "Vercel",
      enlarge: true,
    },
    {
      url: "heroku",
      tooltip: "Heroku",
      enlarge: true,
    },
  ];

  const CMSOBject = [
    {
      url: "prismic",
      tooltip: "Prismic",
      enlarge: true,
    },
    {
      url: "strapi",
      tooltip: "Strapi",
      enlarge: true,
    },
  ];

  const designObject = [
    {
      url: "figma",
      tooltip: "Figma",
    },
  ];

  const learningRoadmapObject = [
    {
      url: "go",
      tooltip: "Go",
    },
    {
      url: "graphql",
      tooltip: "GraphQL",
    },
  ];

  return (
    <section className="flex sm:flex-row flex-col flex-wrap">
      <TechnologyGroup
        technologyGroupText="Languages"
        technologiesObject={languagesObject}
      />
      <TechnologyGroup
        technologyGroupText="Front end frameworks"
        technologiesObject={frontEndFrameworksObject}
      />
      <TechnologyGroup
        technologyGroupText="Back end frameworks"
        technologiesObject={backEndFrameworksObject}
      />
      <TechnologyGroup
        technologyGroupText="Databases"
        technologiesObject={databasesObjects}
      />
      <TechnologyGroup
        technologyGroupText="Testing tools"
        technologiesObject={testingToolsObject}
      />
      <TechnologyGroup
        technologyGroupText="External APIs"
        technologiesObject={externalAPIObject}
      />
      <TechnologyGroup
        technologyGroupText="Dev tools"
        technologiesObject={devToolsObject}
      />
      <TechnologyGroup
        technologyGroupText="Deployment tools"
        technologiesObject={deploymentToolsObject}
      />
      <TechnologyGroup
        technologyGroupText="Version control"
        technologiesObject={versionControlObject}
      />
      <TechnologyGroup
        technologyGroupText="CMS"
        technologiesObject={CMSOBject}
      />
      <TechnologyGroup
        technologyGroupText="Design"
        technologiesObject={designObject}
      />
      <TechnologyGroup
        technologyGroupText="Learning roadmap"
        technologiesObject={learningRoadmapObject}
      />
    </section>
  );
};

module.exports = Technologies;
