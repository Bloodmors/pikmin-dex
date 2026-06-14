import Link from "next/link";
import { notFound } from "next/navigation";
import { pikmin, getPikmin } from "@/data/pikmin";

export function generateStaticParams() {
  return pikmin.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPikmin(slug);
  if (!p) return {};
  return {
    title: `${p.nameZh} ｜ 皮克敏圖鑑`,
    description: p.ability,
  };
}

export default async function PikminDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPikmin(slug);
  if (!p) notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100 dark:from-zinc-950 dark:to-zinc-900 px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
        >
          ← 回圖鑑
        </Link>

        <article className="mt-6 rounded-3xl bg-white dark:bg-zinc-800 p-8 shadow-sm ring-1 ring-zinc-200/50 dark:ring-zinc-700">
          <div className="flex items-center gap-6">
            <div
              className="h-28 w-28 shrink-0 rounded-full ring-4 ring-white dark:ring-zinc-800 shadow-inner"
              style={{ backgroundColor: p.color }}
              aria-hidden
            />
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                {p.nameZh}
              </h1>
              <p className="mt-1 text-zinc-500 dark:text-zinc-400">{p.nameEn}</p>
              <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
                首次登場：{p.debutGame}
              </p>
            </div>
          </div>

          <dl className="mt-8 space-y-6">
            <div>
              <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                能力
              </dt>
              <dd className="mt-1 text-zinc-900 dark:text-zinc-100">
                {p.ability}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                介紹
              </dt>
              <dd className="mt-1 whitespace-pre-line text-zinc-900 dark:text-zinc-100">
                {p.description}
              </dd>
            </div>
          </dl>
        </article>
      </div>
    </main>
  );
}
