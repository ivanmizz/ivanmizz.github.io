import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to Ivan&apos;s page
        </p>
      </div>

      <div className="relative flex place-items-center">
        <div className="absolute h-[300px] w-full -translate-x-1/2 rounded-full bg-gradient-radial from-white to-transparent blur-2xl content-[''] dark:bg-gradient-to-br dark:from-transparent dark:to-blue-700 dark:opacity-10 sm:w-[480px] lg:h-[360px]"></div>
        <div className="absolute -z-20 h-[180px] w-full translate-x-1/3 bg-gradient-conic from-sky-200 via-blue-200 blur-2xl content-[''] dark:from-sky-900 dark:via-[#0141ff] dark:opacity-40 sm:w-[240px]"></div>
        <a
          href="https://github.com/ivanmizz"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10"
        >
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/github-mark-white.svg"
            alt="Logo"
            width={180}
            height={37}
            priority
          />
        </a>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        
        
      </div>
    </main>
  );
}
