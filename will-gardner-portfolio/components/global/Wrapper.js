const Wrapper = ({ children }) => {
  return (
    <section className="container mx-auto max-w-4xl px-4 mb-24">
      { children }
    </section>
  )
}

module.exports = Wrapper