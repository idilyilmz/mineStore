export default function About() {
  return (
    <main className="px-6 md:px-12 py-16 max-w-xl">
      <p className="text-xs tracking-widest uppercase text-neutral-400 mb-8">About</p>
      <h1 className="text-3xl text-neutral-900 mb-8">Hi, I'm selling my closet.</h1>
      <div className="text-sm text-neutral-600 leading-relaxed space-y-4">
        <p>
          This is a small personal shop where I list pieces from my own wardrobe — things I've
          loved but no longer reach for. Everything is carefully described and honestly priced.
        </p>
        <p>
          I believe in giving clothes a second life rather than throwing them away. If something
          here catches your eye, it was probably a favourite of mine at some point.
        </p>
        <p>
          Questions? Reach me at <a href="mailto:hello@minestore.com" className="border-b border-neutral-400 hover:text-neutral-900 transition-colors">hello@minestore.com</a>
        </p>
      </div>
    </main>
  )
}
