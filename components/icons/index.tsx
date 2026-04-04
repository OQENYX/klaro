export function IconFlask() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M8.5 3V9L5 15.5C4.3 17 5.3 18.5 7 18.5H15C16.7 18.5 17.7 17 17 15.5L13.5 9V3" stroke="white" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" opacity=".9"/>
      <path d="M8.5 3H13.5" stroke="white" strokeWidth="1.55" strokeLinecap="round" opacity=".9"/>
      <circle cx="9.5" cy="13" r="1" fill="white" opacity=".7"/>
      <circle cx="12.5" cy="14.5" r=".8" fill="white" opacity=".5"/>
      <circle cx="11" cy="11.5" r=".7" fill="white" opacity=".85"/>
    </svg>
  );
}

export function IconMolecule() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="5" cy="11" r="2.2" stroke="white" strokeWidth="1.45" opacity=".9"/>
      <circle cx="11" cy="6" r="2.2" stroke="white" strokeWidth="1.45" opacity=".9"/>
      <circle cx="17" cy="11" r="2.2" stroke="white" strokeWidth="1.45" opacity=".9"/>
      <circle cx="11" cy="16" r="2.2" stroke="white" strokeWidth="1.45" opacity=".9"/>
      <path d="M6.9 9.6L9.1 7.7M12.9 7.7L15.1 9.6M15.1 12.4L12.9 14.3M9.1 14.3L6.9 12.4" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity=".55"/>
    </svg>
  );
}

export function IconClock() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="6.5" stroke="white" strokeWidth="1.55" opacity=".9"/>
      <path d="M11 7.5V11.5L14 13.5" stroke="white" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" opacity=".9"/>
    </svg>
  );
}

export function IconGut() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M7 4C5 4 3.5 5.5 3.5 7.5C3.5 9.2 4.5 10.6 6 11.5C7.6 12.6 8.2 14 8.2 15.8" stroke="white" strokeWidth="1.55" strokeLinecap="round" opacity=".9"/>
      <path d="M15 4C17 4 18.5 5.5 18.5 7.5C18.5 9.2 17.5 10.6 16 11.5C14.4 12.6 13.8 14 13.8 15.8" stroke="white" strokeWidth="1.55" strokeLinecap="round" opacity=".9"/>
      <path d="M7 4H15" stroke="white" strokeWidth="1.55" strokeLinecap="round" opacity=".9"/>
      <path d="M8.2 15.8C8.2 17.3 9.4 18.5 11 18.5C12.6 18.5 13.8 17.3 13.8 15.8" stroke="white" strokeWidth="1.55" opacity=".9"/>
    </svg>
  );
}

export function IconBulb() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 3C8.2 3 6 5.2 6 8C6 10.1 7.2 11.9 9 12.9V15.5H13V12.9C14.8 11.9 16 10.1 16 8C16 5.2 13.8 3 11 3Z" stroke="white" strokeWidth="1.55" strokeLinejoin="round" opacity=".9"/>
      <path d="M9 15.5H13M9.5 18H12.5" stroke="white" strokeWidth="1.55" strokeLinecap="round" opacity=".9"/>
      <path d="M11 5.5L10 8.5H11.8L10.5 11" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity=".65"/>
    </svg>
  );
}

export function IconBlocks() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="3" y="12.5" width="6" height="6" rx="1.8" stroke="white" strokeWidth="1.45" opacity=".9"/>
      <rect x="13" y="12.5" width="6" height="6" rx="1.8" stroke="white" strokeWidth="1.45" opacity=".9"/>
      <rect x="8" y="3.5" width="6" height="6" rx="1.8" stroke="white" strokeWidth="1.45" opacity=".9"/>
      <path d="M10 9.5V12.5M12 9.5V12.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity=".55"/>
    </svg>
  );
}

export function IconArrow({ size = 14, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconArrowSmall() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 6h8M6 2l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconList() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 5h14M3 9h10M3 13h12M3 17H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconSearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 9h4M9 7v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

export function IconX() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7.5 7.5l5 5M12.5 7.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconClockHero() {
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
      <circle cx="38" cy="38" r="30" stroke="#059669" strokeWidth="1.5" opacity=".2"/>
      <circle cx="38" cy="38" r="21" stroke="#059669" strokeWidth="1.5" opacity=".38"/>
      <path d="M38 20V38L50 50" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="38" cy="38" r="3.5" fill="#059669"/>
    </svg>
  );
}

// Map icon name to component
export function getCategoryIcon(icon: string) {
  switch (icon) {
    case "flask": return <IconFlask />;
    case "molecule": return <IconMolecule />;
    case "clock": return <IconClock />;
    case "gut": return <IconGut />;
    case "bulb": return <IconBulb />;
    case "blocks": return <IconBlocks />;
    default: return null;
  }
}
