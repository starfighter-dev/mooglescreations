function TitleBar({ title }) {
  return (

    <section className="bg-title-page p-t-40 p-b-50 flex-col-c-m" style={{ 'background-image': 'url(images/heading-pages-06.jpg)' }}>
      <h2 className="l-text2 t-center">
        {title}
      </h2>
    </section>

  )
}

export default TitleBar