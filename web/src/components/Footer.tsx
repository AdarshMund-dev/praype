import { Sparkles } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Roadmap', 'Updates'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Blog', 'Contact'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'FAQs', 'Community', 'Contact Us'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  },
]

const SOCIALS = ['X', 'in', 'gh', 'ig']

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-6 xl:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-3 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-lg font-bold text-foreground">
                Praype
              </span>
            </a>
            <p className="max-w-[220px] text-sm text-muted-foreground">
              Your personal interview preparation workspace.
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-foreground">
                {col.title}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10" />

        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Praype. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
