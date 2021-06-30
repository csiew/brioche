export function Button({
  className,
  style,
  onClick,
  label,
  tooltip,
  primary,
  iconOnly,
  round,
}) {
  return (
    <button
      title={tooltip}
      className={`${iconOnly ? 'button-icon-only padding-none' : ''} ${primary ? 'button-primary' : ''} ${round ? 'border-radius-100pct' : ''} ${className ? className : ''}`}
      style={style}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
