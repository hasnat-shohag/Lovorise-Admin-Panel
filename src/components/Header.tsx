import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white text-black justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold">
          <Link to="/">Home</Link>
          <Link to="/dashboard" className="ml-4">
            Dashboard
          </Link>
        </div>
      </nav>
    </header>
  )
}
