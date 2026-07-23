import Container from "@/Components/Container";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-8 sm:py-10 md:py-24">
      <Container className="relative flex min-h-[clamp(300px,58vw,420px)] flex-col items-center justify-center text-center md:min-h-[60vh]">
      
        {/* Circle with diagonal stripes */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="relative h-[clamp(260px,58vw,420px)] w-[clamp(260px,58vw,420px)]">
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
        <div className="relative z-10 w-full max-w-4xl px-1 sm:px-4">

          <h1 className="font-[family-name:var(--font-inter)] text-[clamp(2rem,8.5vw,3.75rem)] font-thin leading-[1.15] tracking-[-0.035em] text-white">
            <span className="block">your next favorite story</span>
            <span className="block">is waiting to be discovered.</span>
            <span className="block">press play on something</span>
          </h1>


          <div className="mt-8 flex w-full items-center justify-center gap-2 sm:gap-3 md:mt-12">
            <span
              aria-hidden="true"
              className="mt-6 flex h-[3px] min-w-6 max-w-28 flex-1 overflow-hidden rounded-full shadow-[0_0_4px_rgba(0,217,255,0.65)] sm:mt-10"
            >
              <span className="block h-full w-3/4 bg-[#00d9ff]" />
              <span className="block h-full w-1/4 bg-[#ff4a5c]" />
            </span>

            <h2 className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[clamp(2rem,8vw,4.5rem)] font-extrabold leading-none tracking-[-0.045em]">
              <span className="text-[#ff4a5c] ">worth</span>{" "}
              <span className="text-white">watching</span>
            </h2>

            <span
              aria-hidden="true"
              className="mt-6 flex h-[3px] min-w-6 max-w-28 flex-1 overflow-hidden rounded-full shadow sm:mt-10"
            >
              <span className="block w-[55%] bg-[#ff4a5c] shadow-[0_0_4px_rgba(255,74,92,0.55)]" />
              <span className="block w-[14%] bg-[#00d9ff] shadow-[0_0_4px_rgba(0,217,255,0.55)]" />
              <span className="ml-2 block flex-1 rounded-full bg-[#00d9ff] shadow-[0_0_4px_rgba(0,217,255,0.55)]" />
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
