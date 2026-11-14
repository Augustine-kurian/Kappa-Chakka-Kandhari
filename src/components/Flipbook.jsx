import { useCallback, useEffect, useRef, useState } from 'react'
import './Flipbook.css'

/**
 * Page-turning menu viewer.
 *  Desktop (≥ 900px): two-page spreads (1–2, 3–4, …) with a 3D page turn.
 *  Mobile: one page at a time.
 * Click a page / use the arrows / swipe / keyboard ← → to turn pages.
 */
function useIsSpread() {
  const q = '(min-width: 900px)'
  const [spread, setSpread] = useState(() => window.matchMedia(q).matches)
  useEffect(() => {
    const mq = window.matchMedia(q)
    const on = () => setSpread(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return spread
}

const DURATION = 900

export default function Flipbook({ pages, pdf }) {
  const isSpread = useIsSpread()
  const [page, setPage] = useState(0) // index of the first visible page (0-based)
  const [flip, setFlip] = useState(null) // null | 'next' | 'prev'
  const touch = useRef(null)
  const step = isSpread ? 2 : 1
  const total = pages.length

  // keep spreads aligned to odd/even pages when switching layouts
  useEffect(() => {
    if (isSpread) setPage((p) => p - (p % 2))
  }, [isSpread])

  // preload neighbours
  useEffect(() => {
    for (let k = page - 2; k <= page + 3; k++) {
      if (pages[k]) new Image().src = pages[k]
    }
  }, [page, pages])

  const canPrev = page > 0
  const canNext = page + step < total

  const turn = useCallback(
    (dir) => {
      if (flip) return
      if (dir === 'next' && !canNext) return
      if (dir === 'prev' && !canPrev) return
      setFlip(dir)
      setTimeout(() => {
        setPage((p) => p + (dir === 'next' ? step : -step))
        setFlip(null)
      }, DURATION)
    },
    [flip, canNext, canPrev, step]
  )

  const onKey = (e) => {
    if (e.key === 'ArrowRight') turn('next')
    if (e.key === 'ArrowLeft') turn('prev')
  }

  const onTouchStart = (e) => (touch.current = e.touches[0].clientX)
  const onTouchEnd = (e) => {
    if (touch.current == null) return
    const dx = e.changedTouches[0].clientX - touch.current
    if (dx < -40) turn('next')
    if (dx > 40) turn('prev')
    touch.current = null
  }

  const img = (i) =>
    pages[i] ? (
      <img key={pages[i]} src={pages[i]} alt={`Menu page ${i + 1}`} className="fb__page" draggable="false" />
    ) : (
      <div className="fb__page fb__blank" />
    )

  // what sits underneath while a page is turning
  let left = page
  let right = page + 1
  if (isSpread && flip === 'next') right = page + 3
  if (isSpread && flip === 'prev') left = page - 2

  const label = isSpread
    ? `Pages ${page + 1}–${Math.min(page + 2, total)} of ${total}`
    : `Page ${page + 1} of ${total}`

  return (
    <div className="fb">
      <div
        className={`fb__book ${isSpread ? 'fb__book--spread' : 'fb__book--single'}`}
        tabIndex={0}
        onKeyDown={onKey}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        aria-label="Restaurant menu flipbook. Use left and right arrow keys to turn pages."
      >
        {isSpread ? (
          <>
            <div className="fb__half fb__half--left" onClick={() => turn('prev')}>
              {img(left)}
            </div>
            <div className="fb__half fb__half--right" onClick={() => turn('next')}>
              {img(right)}
            </div>

            {flip === 'next' && (
              <div className="fb__leaf fb__leaf--next" style={{ animationDuration: `${DURATION}ms` }}>
                <div className="fb__face">{img(page + 1)}</div>
                <div className="fb__face fb__face--back">{img(page + 2)}</div>
              </div>
            )}
            {flip === 'prev' && (
              <div className="fb__leaf fb__leaf--prev" style={{ animationDuration: `${DURATION}ms` }}>
                <div className="fb__face">{img(page)}</div>
                <div className="fb__face fb__face--back">{img(page - 1)}</div>
              </div>
            )}
            <div className="fb__spine" aria-hidden="true" />
          </>
        ) : (
          <>
            <div className="fb__half fb__half--full" onClick={() => turn('next')}>
              {img(flip === 'next' ? page + 1 : page)}
            </div>
            {flip === 'next' && (
              <div className="fb__leaf fb__leaf--single-next" style={{ animationDuration: `${DURATION}ms` }}>
                <div className="fb__face">{img(page)}</div>
              </div>
            )}
            {flip === 'prev' && (
              <div className="fb__leaf fb__leaf--single-prev" style={{ animationDuration: `${DURATION}ms` }}>
                <div className="fb__face">{img(page - 1)}</div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="fb__controls">
        <button className="fb__btn" onClick={() => turn('prev')} disabled={!canPrev} aria-label="Previous page">‹</button>
        <span className="fb__label">{label}</span>
        <button className="fb__btn" onClick={() => turn('next')} disabled={!canNext} aria-label="Next page">›</button>
      </div>

      {pdf && (
        <div className="center">
          <a href={pdf} target="_blank" rel="noreferrer" className="btn-gold fb__pdf">Open Full Menu (PDF)</a>
        </div>
      )}
    </div>
  )
}
