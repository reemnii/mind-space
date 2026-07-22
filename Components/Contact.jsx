import Image from "next/image";
import sticker from "@/public/sticker.png";
import Container from "@/Components/Container";

const contactDots = [
  { left: 3, top: 18, size: 2, color: "#ffffff", opacity: 0.35 },
  { left: 7, top: 72, size: 3, color: "#19a3b5", opacity: 0.55 },
  { left: 13, top: 6, size: 2, color: "#5d8b9b", opacity: 0.45 },
  { left: 18, top: 91, size: 2, color: "#ffffff", opacity: 0.3 },
  { left: 27, top: 22, size: 4, color: "#19a3b5", opacity: 0.75 },
  { left: 32, top: 78, size: 3, color: "#ffffff", opacity: 0.75 },
  { left: 40, top: 9, size: 2, color: "#ffffff", opacity: 0.4 },
  { left: 47, top: 62, size: 5, color: "#19a3b5", opacity: 0.9 },
  { left: 52, top: 86, size: 2, color: "#ffffff", opacity: 0.65 },
  { left: 59, top: 15, size: 3, color: "#ffffff", opacity: 0.7 },
  { left: 65, top: 74, size: 3, color: "#19a3b5", opacity: 0.8 },
  { left: 72, top: 4, size: 2, color: "#638493", opacity: 0.4 },
  { left: 78, top: 35, size: 6, color: "#19a3b5", opacity: 0.95 },
  { left: 84, top: 88, size: 2, color: "#ffffff", opacity: 0.45 },
  { left: 91, top: 19, size: 3, color: "#718e99", opacity: 0.4 },
  { left: 96, top: 66, size: 2, color: "#ffffff", opacity: 0.55 },
  { left: 1, top: 43, size: 5, color: "#19a3b5", opacity: 0.5 },
  { left: 10, top: 96, size: 1, color: "#ffffff", opacity: 0.6 },
  { left: 16, top: 34, size: 7, color: "#19a3b5", opacity: 0.65 },
  { left: 23, top: 2, size: 1, color: "#ffffff", opacity: 0.75 },
  { left: 36, top: 94, size: 5, color: "#19a3b5", opacity: 0.8 },
  { left: 43, top: 31, size: 2, color: "#ffffff", opacity: 0.5 },
  { left: 56, top: 97, size: 8, color: "#19a3b5", opacity: 0.7 },
  { left: 63, top: 3, size: 4, color: "#ffffff", opacity: 0.55 },
  { left: 70, top: 53, size: 1, color: "#ffffff", opacity: 0.8 },
  { left: 82, top: 96, size: 6, color: "#19a3b5", opacity: 0.6 },
  { left: 89, top: 48, size: 4, color: "#ffffff", opacity: 0.7 },
  { left: 98, top: 8, size: 1, color: "#718e99", opacity: 0.65 },
];

export default function Contact() {
  return (
    <section className="relative w-full bg-black py-20 sm:py-28 overflow-hidden">
      <Container>
      {/* top accent line */}
      <div className="mx-auto mb-7 flex h-[3px] items-center justify-center gap-2 sm:mb-8">
        <span className="flex h-full overflow-hidden rounded-full">
          <span className="h-full w-6 bg-[#00d9ff] shadow-[0_0_4px_rgba(0,217,255,0.55)]" />
          <span className="h-full w-7 bg-[#ff414d] shadow-[0_0_4px_rgba(255,65,77,0.5)]" />
        </span>
        <span className="h-full w-[88px] rounded-full bg-[#00d9ff] shadow-[0_0_4px_rgba(0,217,255,0.55)]" />
      </div>

      {/* heading */}
      <p className="mx-auto max-w-[280px] text-center font-[family-name:var(--font-inter)] text-[17px] font-light leading-[1.55] tracking-[-0.03em] text-white sm:text-lg">
        <span className="font-extrabold text-[#ff414d]">we&rsquo;d love</span> to see your project
        <br />
        added here.
      </p>

      {/* circles cluster */}
      <div className="relative mx-auto mt-16 h-[260px] w-full max-w-[560px] sm:mt-20 sm:h-[320px]">
        {/* left accent line */}
        <div className="absolute left-[-34px] top-1/2 z-30 flex h-[3px] -translate-y-1/2 items-center sm:left-[-52px]">
          <span className="h-full w-6 rounded-full bg-[#ff414d] shadow-[0_0_3px_rgba(255,65,77,0.45)] sm:w-9" />
          <span className="ml-5 h-full w-6 rounded-full bg-[#ff414d] shadow-[0_0_3px_rgba(255,65,77,0.45)] sm:ml-7 sm:w-9" />
        </div>

        {/* scattered background dots */}
        <div className="pointer-events-none absolute -inset-4 z-0" aria-hidden="true">
          {contactDots.map((dot, index) => (
            <span
              key={`${dot.left}-${dot.top}-${index}`}
              className="absolute rounded-full"
              style={{
                left: `${dot.left}%`,
                top: `${dot.top}%`,
                width: `${dot.size}px`,
                height: `${dot.size}px`,
                backgroundColor: dot.color,
                opacity: dot.opacity,
                boxShadow:
                  dot.size >= 4 ? `0 0 ${dot.size}px ${dot.color}` : undefined,
              }}
            />
          ))}
        </div>

        {/* red circle with mascot */}
        <div className="absolute left-[4%] top-[calc(50%-25px)] z-20 flex h-[190px] w-[190px] -translate-y-1/2 items-center justify-center rounded-full bg-[#ff414d] shadow-[0_0_4px_rgba(255,65,77,0.35)] sm:top-[calc(50%-42.5px)] sm:h-[215px] sm:w-[215px]">
          <Image
            src={sticker}
            alt=""
            aria-hidden="true"
            className="h-[62%] w-auto -translate-x-6 object-contain sm:-translate-x-7"
          />
        </div>

        {/* teal striped circle with contact us text */}
        <div
          className="absolute left-[32%] top-1/2 z-10 h-[240px] w-[240px] -translate-y-1/2 overflow-hidden rounded-full sm:h-[300px] sm:w-[300px]"
          style={{
            border: "1.5px solid #00d9ff",
            backgroundColor: "#000000",
          }}
        >
          <div className="absolute left-[4px] top-[10px] h-[226px] w-[226px] overflow-hidden rounded-full sm:left-[5px] sm:top-[13px] sm:h-[282px] sm:w-[282px]">
            <div
              className="absolute inset-0"
              style={{
                background: `repeating-linear-gradient(
                  135deg,
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

          {/* scattered dots */}
          <span className="absolute left-[20%] top-[18%] h-1.5 w-1.5 rounded-full bg-white/70" />
          <span className="absolute left-[70%] top-[15%] h-[2px] w-[2px] rounded-full bg-white/50" />
          <span className="absolute left-[80%] top-[55%] h-2 w-2 rounded-full bg-[#00d9ff] shadow-[0_0_5px_rgba(0,217,255,0.7)]" />
          <span className="absolute left-[15%] top-[70%] h-[3px] w-[3px] rounded-full bg-white/50" />
          <span className="absolute left-[55%] top-[80%] h-1 w-1 rounded-full bg-white/60" />
          <span className="absolute left-[40%] top-[10%] h-px w-px rounded-full bg-white/70" />
          <span className="absolute left-[29%] top-[42%] h-[5px] w-[5px] rounded-full bg-[#00d9ff]/80" />
          <span className="absolute left-[62%] top-[35%] h-[3px] w-[3px] rounded-full bg-white/80" />
          <span className="absolute left-[88%] top-[28%] h-px w-px rounded-full bg-white/60" />
          <span className="absolute left-[35%] top-[88%] h-[2px] w-[2px] rounded-full bg-white/70" />
          <span className="absolute left-[74%] top-[72%] h-[6px] w-[6px] rounded-full bg-[#00d9ff]/70 shadow-[0_0_4px_rgba(0,217,255,0.55)]" />
        </div>

        {/* contact us label + connecting lines */}
        <div className="absolute left-[56%] top-1/2 z-30 flex -translate-x-[38%] -translate-y-1/2 items-center gap-3 sm:gap-4">
          <span className="flex h-[3px] items-center mt-6 ml-3">
            <span className="h-full w-10 rounded-full bg-[#00d9ff] shadow-[0_0_3px_rgba(0,217,255,0.5)] sm:w-13" />
            <span className="ml-5 h-full w-4 rounded-full bg-[#ff414d] shadow-[0_0_3px_rgba(255,65,77,0.45)]" />
          </span>
          <span className="whitespace-nowrap text-xl font-extrabold tracking-tight text-white sm:text-2xl md:text-3xl">
            contact us
          </span>
          <span className="flex h-[3px] items-center mt-6">
            <span className="h-full w-12 rounded-full bg-[#ff414d] shadow-[0_0_3px_rgba(255,65,77,0.45)] sm:w-20" />
            <span className="h-full w-8 rounded-full bg-[#00d9ff] shadow-[0_0_3px_rgba(0,217,255,0.5)] sm:w-14" />
            <span className="ml-2 h-full w-3 rounded-full bg-[#ff414d] shadow-[0_0_3px_rgba(255,65,77,0.45)] sm:w-4" />
          </span>
        </div>
      </div>
      </Container>
    </section>
  );
}
