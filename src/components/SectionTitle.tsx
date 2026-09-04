type SectionTitleProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: 'left' | 'center';
};

export function SectionTitle({ eyebrow, title, body, align = 'left' }: SectionTitleProps) {
  return (
    <div className={`section-title ${align === 'center' ? 'section-title-center' : ''}`}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <span>{body}</span> : null}
    </div>
  );
}
