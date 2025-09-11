'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

const nav = [
  { href: '/', label: 'Dashboard' },
  { href: '/users', label: 'Users' },
  { href: '/settings', label: 'Settings' },
];

type SidebarProps = {
  /** When true, renders in the mobile drawer (no md:hidden) */
  inDrawer?: boolean;
};

export default function Sidebar({ inDrawer = false }: SidebarProps) {
  const pathname = usePathname();
  return (
    <aside
      className={
        inDrawer
          ? 'flex w-60 flex-col border-white/10 p-4 gap-2'
          : 'hidden md:flex md:w-60 flex-col border-r border-white/10 p-4 gap-2'
      }
    >
      <div className="text-lg font-semibold mb-4">My Admin</div>
      <nav className="space-y-1">
        {nav.map((i) => (
          <Link
            key={i.href}
            href={i.href}
            className={`block px-3 py-2 rounded hover:bg-white/5 ${
              pathname === i.href ? 'bg-white/10 font-semibold' : ''
            }`}
          >
            {i.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

