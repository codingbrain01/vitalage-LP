import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="border-b">

            <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">

                <Link to="/" className="font-bold text-xl">
                    VitalAge
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6">
                    <Link to="/">Home</Link>
                    <Link to="/blog">Article</Link>
                    <Link to="/product">Product</Link>
                </nav>

                {/* Mobile Button */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden border-t p-4 space-y-3">
                    <Link onClick={() => setOpen(false)} to="/blog" className="block">
                        Article
                    </Link>
                    <Link onClick={() => setOpen(false)} to="/product" className="block">
                        Product
                    </Link>
                </div>
            )}

        </header>
    );
}
