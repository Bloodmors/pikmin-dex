import Link from "next/link";
import { pikmin } from "@/data/pikmin";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100 dark:from-zinc-950 dark:to-zinc-900 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            皮克敏圖鑑
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Pikmin Dex — 收錄系列作中登場的皮克敏品種
          </p>
        </header>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {pikmin.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/pikmin/${p.slug}/`}
                className="group block rounded-2xl bg-white dark:bg-zinc-800 p-5 shadow-sm ring-1 ring-zinc-200/50 dark:ring-zinc-700 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div
                  className="mx-auto h-20 w-20 rounded-full ring-4 ring-white dark:ring-zinc-800 shadow-inner"
                  style={{ backgroundColor: p.color }}
                  aria-hidden
                />
                <div className="mt-4 text-center">
                  <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    {p.nameZh}
                  </h2>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    {p.nameEn}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <footer className="mt-16 text-center text-xs text-zinc-500 dark:text-zinc-500">
          資料持續補完中。Pikmin™ © Nintendo.
        </footer>
      </div>
    </main>
  );
}
