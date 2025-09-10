'use client';

import Sidebar from '@/layout/Sidebar/Sidebar';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-14 border-b border-white/10 flex items-center px-4 justify-between">
      {/* Mobile menu button */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="rounded p-2 hover:bg-white/10"
            >
              ☰
            </button>
          </SheetTrigger>

          {/* Drawer content */}
          <SheetContent side="left" className="p-0 w-64">
            {/* Required for accessibility */}
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <SheetDescription className="sr-only">
              Sidebar menu with navigation links
            </SheetDescription>

            <Sidebar inDrawer />
          </SheetContent>
        </Sheet>
      </div>

      {/* Title */}
      <div className="text-sm opacity-80">Dashboard Starter</div>

      {/* Right side placeholder */}
      <div className="text-sm opacity-70">denizhanGonen@colloai.com</div>
    </header>
  );
}

