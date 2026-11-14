/**
 * Square image grid for Banquets / Catering (4 columns → 2 on tablet & mobile).
 * images: [{ src, alt }]
 */
export default function Gallery({ images = [] }) {
  if (!images.length) return null
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container gallery">
        {images.map((img, i) => (
          <div className="gallery__item" key={i}>
            <img src={img.src} alt={img.alt || ''} />
          </div>
        ))}
      </div>
    </section>
  )
}
