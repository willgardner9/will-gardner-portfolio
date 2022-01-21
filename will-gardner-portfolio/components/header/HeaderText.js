export default function HeaderText() {
  return (
    <section className="mt-16">
      <h1 className="font-karla text-3xl font-light dark:text-gray-100">
        Hi, I'm Will Gardner.
      </h1>
      <h2 className="font-karla text-5xl font-light mt-4 dark:text-gray-100">
        A <span className="font-medium">full-stack developer</span> @{" "}
        <a
          href="https://motley-london.com/"
          target="blank"
          class="border-b-2 border-black dark:border-gray-100"
        >
          <span className="font-medium">Motley</span>
        </a>
        .
      </h2>
    </section>
  );
}
