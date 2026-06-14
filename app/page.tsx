import {
  decor,
  overallNormal,
  overallRare,
  type Color,
  type DecorVariant,
} from "@/data/decor";

const COLOR_HEX: Record<Color, string> = {
  紅: "#e23b3b",
  黃: "#f5c518",
  藍: "#3b8be2",
  白: "#f5f5f5",
  紫: "#8a4fff",
  灰: "#7a7a7a",
  粉: "#f48ad6",
  冰: "#a8e0ff",
};

function isComplete(p: string) {
  return p === "O";
}

function progressNumeric(p: string): number {
  if (p === "" || p === "-" || p === "#ERROR!") return 0;
  if (p === "O") return -1; // sentinel for complete
  const n = Number(p);
  return Number.isFinite(n) ? n : 0;
}

function ProgressBadge({
  variant,
  label,
}: {
  variant: DecorVariant;
  label: "一般" | "稀有";
}) {
  const total = variant.colors.length;
  const complete = isComplete(variant.progress);
  const num = progressNumeric(variant.progress);
  const got = complete ? total : num;

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <span
        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
          label === "稀有"
            ? "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200"
            : "bg-zinc-100 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200"
        }`}
      >
        {label}
      </span>
      <span
        className={`text-sm font-semibold tabular-nums ${
          complete
            ? "text-emerald-600 dark:text-emerald-400"
            : "text-zinc-900 dark:text-zinc-100"
        }`}
      >
        {complete ? `✓ ${total} / ${total}` : `${got} / ${total}`}
      </span>
      <ul className="flex flex-wrap gap-1.5">
        {variant.colors.map((c, i) => (
          <li
            key={i}
            title={c}
            className="h-5 w-5 rounded-full ring-1 ring-black/10 dark:ring-white/20 shadow-sm"
            style={{ backgroundColor: COLOR_HEX[c] }}
          />
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  const completedCount = decor.filter((d) => isComplete(d.normal.progress)).length;

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-emerald-50 to-white dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900">
      <header className="sticky top-0 z-10 border-b border-emerald-100/80 dark:border-zinc-800 bg-emerald-50/85 dark:bg-zinc-950/85 backdrop-blur px-6 py-4">
        <div className="mx-auto max-w-3xl flex flex-wrap items-baseline justify-between gap-y-2 gap-x-6">
          <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            皮克敏圖鑑
            <span className="ml-2 text-xs font-normal text-zinc-500 dark:text-zinc-400">
              Pikmin Bloom 裝飾品
            </span>
          </h1>
          <div className="flex items-center gap-4 text-xs tabular-nums text-zinc-700 dark:text-zinc-300">
            <span>
              一般 <strong className="font-semibold">{overallNormal.replace("一般", "").trim()}</strong>
            </span>
            <span className="text-amber-700 dark:text-amber-300">
              稀有 <strong className="font-semibold">{overallRare.replace("稀有", "").trim()}</strong>
            </span>
            <span className="text-emerald-700 dark:text-emerald-400">
              場景 ✓ <strong className="font-semibold">{completedCount} / {decor.length}</strong>
            </span>
          </div>
        </div>
      </header>

      <ul className="mx-auto max-w-3xl px-6 py-8 space-y-3">
        {decor.map((d) => {
          const complete = isComplete(d.normal.progress);
          return (
            <li
              key={d.name}
              className={`rounded-2xl bg-white dark:bg-zinc-800/70 px-5 py-4 shadow-sm ring-1 transition ${
                complete
                  ? "ring-emerald-300/70 dark:ring-emerald-700/50"
                  : "ring-zinc-200/60 dark:ring-zinc-700"
              }`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {d.name}
                </h2>
                {complete && (
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    ✓ 全收齊
                  </span>
                )}
              </div>
              <div className="mt-3 space-y-2">
                <ProgressBadge variant={d.normal} label="一般" />
                {d.rare && <ProgressBadge variant={d.rare} label="稀有" />}
              </div>
            </li>
          );
        })}
      </ul>

      <footer className="mx-auto max-w-3xl px-6 pb-10 text-center text-xs text-zinc-500 dark:text-zinc-500">
        資料來源：Andy 的 Pikmin Bloom 收藏進度表。Pikmin Bloom™ © Nintendo / Niantic.
      </footer>
    </main>
  );
}
