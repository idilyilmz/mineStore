export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 px-6 md:px-12 py-8 mt-auto">
      <p className="text-sm text-neutral-400 text-center tracking-wide">
        &copy; {new Date().getFullYear()} mineStore — pre-loved clothing
      </p>
    </footer>
  )
}
