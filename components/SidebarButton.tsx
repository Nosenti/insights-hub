import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode, ReactElement } from 'react';

interface SidebarButtonProps {
  children: ReactNode;
  icon: ReactElement;
  path: string;
  isMinimized?: boolean;
}

export default function SidebarButton({
  children,
  icon,
  path,
  isMinimized = false,
}: SidebarButtonProps) {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={`flex items-center w-[85%] ${
        isMinimized ? 'justify-center' : 'space-x-4 px-4'
      } py-3 rounded-r-md cursor-pointer w-full border-l-4 border-primary ${
        isActive
          ? 'bg-background text-foreground font-semibold border-secondary_green'
          : 'text-gray-300 hover:text-background'
      } `}
    >
      <span className="transition-colors">
        {React.cloneElement(icon, {
          className: isActive ? 'text-secondary_green' : 'text-gray-300',
        })}
      </span>
      {!isMinimized && <span>{children}</span>}
    </Link>
  );
}
