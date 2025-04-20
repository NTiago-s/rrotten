"use client";
export default function ButtonComponent() {
  return (
    <button
      aria-label="Solicitá una propuesta"
      className="relative overflow-hidden px-6 w-fit py-3 rounded-xl bg-secondary cursor-pointer font-light transition-all duration-200 group"
    >
      <span className="relative z-10">Solicitá una propuesta</span>
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--x) var(--y), #83cee577, transparent 40%)`,
        }}
      />
    </button>
  );
}
