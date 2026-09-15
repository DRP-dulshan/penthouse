import Reveal from './Reveal';

type SectionHeadingProps = {
  label: string;
  heading: string;
  intro?: string;
  onDark?: boolean;
  className?: string;
};

/** Eyebrow label, serif heading and optional standfirst -- shared by every section. */
export default function SectionHeading({
  label,
  heading,
  intro,
  onDark = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      <p className={`eyebrow ${onDark ? 'eyebrow-on-dark' : ''}`}>{label}</p>
      <h2
        className={`mt-5 text-[2rem] leading-[1.12] sm:text-[2.6rem] lg:text-[3.1rem] ${
          onDark ? 'text-bone' : ''
        }`}
      >
        {heading}
      </h2>
      {intro ? (
        <p className={`mt-5 text-[15px] leading-relaxed sm:text-base ${onDark ? 'text-white/70' : ''}`}>
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
