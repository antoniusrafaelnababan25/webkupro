interface IconProps { name: string; className?: string }

export function Icon({ name, className = "h-6 w-6" }: IconProps) {
  const c = { className, fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24" }
  switch (name) {
    case "rocket": return <svg {...c}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
    case "shield": return <svg {...c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    case "support": return <svg {...c}><path d="M18 18a4 4 0 0 0 0-8 6 6 0 0 0-11.65-2"/><circle cx="12" cy="18" r="3"/><path d="M20.2 15.2 22 20M3.8 15.2 2 20"/></svg>
    case "check": return <svg {...c}><path d="M20 6 9 17l-5-5"/></svg>
    case "arrow": return <svg {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    case "arrow-up-right": return <svg {...c}><path d="M7 17 17 7M8 7h9v9"/></svg>
    case "star": return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9L22 10l-5.5 5 1.7 7L12 18.3 5.8 22l1.7-7L2 10l7.1-1.1z"/></svg>
    case "quote": return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h4v6H7c0 2 1 3 3 3v3c-4 0-6-2-6-6V7zm10 0h4v6h-4c0 2 1 3 3 3v3c-4 0-6-2-6-6V7z"/></svg>
    case "whatsapp": return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.17c-.24.68-1.42 1.31-1.96 1.36-.5.05-1.14.07-1.83-.11-.42-.13-.97-.31-1.66-.61-2.93-1.27-4.84-4.23-4.99-4.43-.14-.2-1.19-1.58-1.19-3.02s.76-2.14 1.03-2.44c.27-.29.58-.37.78-.37.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2.01.9 2.16.07.14.12.31.02.51-.1.2-.15.31-.29.48-.15.17-.31.38-.44.51-.15.14-.3.3-.13.59.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.15.46.12.63-.07.17-.2.73-.85.92-1.14.19-.29.39-.24.65-.15.27.1 1.69.8 1.98.94.29.15.48.22.55.34.07.12.07.68-.17 1.36Z"/></svg>
    case "instagram": return <svg {...c}><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg>
    case "mail": return <svg {...c}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>
    case "phone": return <svg {...c}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    case "map-pin": return <svg {...c}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    case "menu": return <svg {...c}><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    case "close": return <svg {...c}><path d="M18 6 6 18M6 6l12 12"/></svg>
    case "chevron-down": return <svg {...c}><path d="m6 9 6 6 6-6"/></svg>
    case "chevron-up": return <svg {...c}><path d="m18 15-6-6-6 6"/></svg>
    case "arrow-left": return <svg {...c}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
    case "arrow-right": return <svg {...c}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    case "sparkle": return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2z"/></svg>
    case "interactive": return <svg {...c}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M3 9h18"/></svg>
    case "move": return <svg {...c}><path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/></svg>
    case "cart": return <svg {...c}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
    default: return null
  }
}