const Wrapper = ({ children }) => {
  return (
    <section className="container mx-auto px-4">
      { children }
    </section>
  )
}

module.exports = Wrapper