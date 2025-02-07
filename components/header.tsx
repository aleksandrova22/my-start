'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const
  pages = [
    { href: '/', title: 'Home' },
    { href: '/product', title: 'Product' },
    { href: '/contact', title: 'Contact' }
  ];

export default function Header() {
  const pathname = usePathname();
  console.log(pathname)
  return <header>
    <nav>
      <ul>
        {pages.map(({ href, title }) =>
          <li key={href} className={pathname === href ? 'active' : ''}>
            <Link href={href}>{title} </Link>
          </li>)}
      </ul>
    </nav>
  </header>
}