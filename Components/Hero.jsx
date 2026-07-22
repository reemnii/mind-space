export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black px-4 py-16 md:py-24">
      <div className="relative mx-auto flex min-h-[50vh] max-w-5xl flex-col items-center justify-center text-center">
        {/* Decorative circle top-right */}
      <div className="absolute top-100 right-16 w-24 h-24 rounded-full border border-white/40 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-white" />
      </div>
        {/* Circle with diagonal stripes */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="relative h-[120px] w-[120px] md:h-[420px] md:w-[420px]">
            {/* Striped fill */}
            <div className="absolute inset-0 -translate-x-[8%] translate-y-[12%] overflow-hidden rounded-full">
              <div
                className="absolute inset-0"
                style={{
                  background: `repeating-linear-gradient(
                    45deg,
                    #050a0e 0px,
                    #050a0e 13.5px,
                    #07171e 15px,
                    #0b222c 16.5px,
                    #0b222c 21.5px,
                    #07171e 23px,
                    #050a0e 24px
                  )`,
                  filter: "blur(0.6px)",
                  transform: "scale(1.02)",
                }}
              />
            </div>

            {/* Faint full outline with a brighter arc spanning more than half. */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              style={{ filter: "blur(0.3px)" }}
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#00d9ff"
                strokeWidth="0.4"
                strokeOpacity="0.55"
              />
              <path
                d="M 7.6 72.5 A 48 48 0 1 1 98 50"
                fill="none"
                stroke="#00d9ff"
                strokeWidth="0.85"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Text content */}
        <div className="relative z-10 w-full max-w-4xl px-4">

          <h1 className="font-[family-name:var(--font-inter)] font-thin leading-[1.15] text-xl tracking-[-0.035em] text-white">
            <span className="block text-4xl sm:text-5xl md:text-6xl">here&rsquo;s a quick peek</span>
            <span className="block text-4xl sm:text-5xl md:text-6xl">at our recent work.</span>
            <span className="block text-4xl sm:text-5xl md:text-6xl">what&rsquo;s coming next is</span>
          </h1>


          <div className="mt-8 flex items-center justify-center gap-3 md:mt-12">
            <span
              aria-hidden="true"
              className="flex h-[3px] w-15 shrink-0 overflow-hidden rounded-sm shadow-[0_0_4px_rgba(0,217,255,0.65)] md:w-28 mt-10"
            >
              <span className="block h-full w-3/4 bg-[#00d9ff]" />
              <span className="block h-full w-1/4 bg-[#ff4a5c]" />
            </span>

            <h2 className="whitespace-nowrap font-[family-name:var(--font-inter)] text-4xl font-extrabold tracking-[-0.045em] md:text-6xl lg:text-7xl">
              <span className="text-[#ff4a5c] ">even</span>{" "}
              <span className="text-white">greater</span>
            </h2>

            <span
              aria-hidden="true"
              className="flex h-[3px] w-15 shrink-0 overflow-hidden rounded-sm md:w-28 shadow mt-10"
            >
              <span className="block w-12 bg-[#ff4a5c] shadow-[0_0_4px_rgba(255,74,92,0.55)] md:w-16" />
              <span className="block w-3 rounded-r-sm bg-[#00d9ff] shadow-[0_0_4px_rgba(0,217,255,0.55)]  md:w-4" />
              <span className="ml-2 block w-9 rounded-full bg-[#00d9ff] shadow-[0_0_4px_rgba(0,217,255,0.55)] md:w-12" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
