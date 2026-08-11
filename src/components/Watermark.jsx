/**
 * Site-wide design attribution watermark.
 * Non-interactive so it never blocks clicks or form use.
 */
export default function Watermark() {
  return (
    <>
      {/* Soft tiled mark across the page — visible on screenshots, subtle in use */}
      <div
        className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -inset-[20%] opacity-[0.07]"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/bc-watermark.png)`,
            backgroundRepeat: 'repeat',
            backgroundSize: '220px auto',
            transform: 'rotate(-18deg)',
            mixBlendMode: 'multiply',
          }}
        />
      </div>

      {/* Clear corner attribution — known without competing with content */}
      <div className="pointer-events-none fixed bottom-4 right-4 z-[70] sm:bottom-6 sm:right-6">
        <div className="rounded-sm border border-navy/10 bg-ivory/90 px-2.5 py-2 shadow-md backdrop-blur-sm">
          <img
            src={`${import.meta.env.BASE_URL}images/bc-watermark.png`}
            alt="B&C Software & Web"
            className="h-9 w-auto opacity-80 sm:h-11"
            draggable={false}
          />
        </div>
      </div>
    </>
  )
}
