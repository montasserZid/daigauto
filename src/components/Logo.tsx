type LogoProps = {
  compact?: boolean;
  horizontal?: boolean;
};

export function Logo({ compact = false, horizontal = false }: LogoProps) {
  return (
    <span
      className={[
        'brand-logo',
        horizontal ? 'brand-logo-horizontal' : '',
        compact ? 'brand-logo-compact' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <img src="/assets/daig-auto-logo-transparent.png" alt="DAIG AUTO" />
    </span>
  );
}
