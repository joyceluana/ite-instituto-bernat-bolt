interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export function Logo({ className = '', variant = 'dark' }: LogoProps) {
  const text = variant === 'light' ? '#f0f9f4' : '#1a5c44';
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="/images/quem-somos/495238181_17845680033471093_3592445627456577289_n.jpg"
        alt="Instituto Bernat"
        className="w-10 h-10 rounded-full object-cover shrink-0"
      />
      <div className="flex flex-col leading-none">
        <span className="font-serif text-xl font-semibold tracking-wide" style={{ color: text }}>
          Instituto Bernat
        </span>
        <span
          className="text-[0.6rem] tracking-[0.25em] uppercase mt-0.5"
          style={{ color: text, opacity: 0.7 }}
        >
          Odontologia Integrada
        </span>
      </div>
    </div>
  );
}
