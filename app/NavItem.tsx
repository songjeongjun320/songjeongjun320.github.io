"use client";

import React from "react";

interface NavItemProps {
  name: string;
  href: string;
  icon: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

export default function NavItem({ name, href, icon, onClick }: NavItemProps) {
  return (
    <a
      href={href}
      className="flex items-center p-2 rounded hover:bg-gray-700"
      onClick={onClick}
    >
      {icon}
      <span className="ml-3">{name}</span>
    </a>
  );
}
