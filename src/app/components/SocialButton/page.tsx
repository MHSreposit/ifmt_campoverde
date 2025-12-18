'use client';

import Image from 'next/image';

type SocialButtonProps = {
  href: string;
  label: string;
  iconSrc: string;
};

export function SocialButton({ href, label, iconSrc }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        width: 'fit-content',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.85rem 1.5rem',
        backgroundColor: '#2f3136',
        borderRadius: '5px',
        color: '#2da8ff',
        textDecoration: 'none',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'background-color 0.2s ease, transform 0.15s ease',
        boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#3a3d44';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#2f3136';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <Image
        src={iconSrc}
        alt={label}
        width={22}
        height={22}
        style={{ filter: 'brightness(0) invert(1)' }} 
      />

      <span>{label}</span>
    </a>
  );
}
