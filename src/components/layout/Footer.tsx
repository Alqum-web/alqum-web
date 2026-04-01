import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Alqum" width={24} height={24} />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight text-foreground">Alqum</span>
                <span className="text-[10px] tracking-widest uppercase text-muted">
                  Engineering foundations
                </span>
              </div>
            </div>
            <p className="mt-2 max-w-xs text-sm text-muted">
              AI-powered compliance for design and manufacturing teams.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="text-sm font-semibold text-foreground">Company</h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-muted hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-muted hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <a href="mailto:hello@alqum.com" className="text-sm text-muted hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">Legal</h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/privacy" className="text-sm text-muted hover:text-foreground transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-muted hover:text-foreground transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="text-xs text-muted">&copy; {new Date().getFullYear()} Alqum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
