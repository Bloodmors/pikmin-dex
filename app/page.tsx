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
  if (p === "O") return -1;
  const n = Number(p);
  return Number.isFinite(n) ? n : 0;
}

function VariantPanel({
  variant,
  label,
}: {
  variant: DecorVariant | null;
  label: "一般" | "稀有";
}) {
  if (!variant) {
    return (
      <div className="flex h-full items-center text-xs text-zinc-400 dark:text-zinc-600">
        <span className="mr-3 inline-block w-8 shrink-0 font-medium text-zinc-400 dark:text-zinc-500">
          {label}
        </span>
        <span>—</span>
      </div>
    );
  }

  const total = variant.colors.length;
  const complete = isComplete(variant.progress);
  const got = complete ? total : progressNumeric(variant.progress);
  const pct = total > 0 ? (got / total) * 100 : 0;

  return (
    <div>
      <div className="flex items-baseline gap-3">
        <span className="w-8 shrink-0 text-xs font-medium text-zinc-500 dark:text-zinc-400">
          {label}
        </span>
        <span
          className={`text-sm font-semibold tabular-nums ${
            complete
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-zinc-800 dark:text-zinc-100"
          }`}
        >
          {got} / {total}
        </span>
        <div className="relative ml-1 h-1 flex-1 rounded-full bg-zinc-100 dark:bg-zinc-700/60 overflow-hidden">
          <div
            className={`absolute inset-y-0 left-0 rounded-full ${
              complete ? "bg-emerald-500" : "bg-zinc-400 dark:bg-zinc-500"
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
      <ul className="mt-2 flex flex-wrap gap-1.5 pl-11">
        {variant.colors.map((c, i) => (
          <li
            key={i}
            title={c}
            className="h-4 w-4 rounded-full ring-1 ring-black/10 dark:ring-white/20"
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
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <header className="sticky top-0 z-10 border-b border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/85 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-wrap items-baseline justify-between gap-y-2 gap-x-6">
          <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            皮克敏圖鑑
            <span className="ml-2 text-xs font-normal text-zinc-500 dark:text-zinc-400">
              Pikmin Bloom 裝飾品
            </span>
          </h1>
          <div className="flex items-center gap-4 text-xs tabular-nums text-zinc-600 dark:text-zinc-400">
            <span>
              一般{" "}
              <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                {overallNormal.replace("一般", "").trim()}
              </strong>
            </span>
            <span>
              稀有{" "}
              <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                {overallRare.replace("稀有", "").trim()}
              </strong>
            </span>
            <span>
              場景 ✓{" "}
              <strong className="font-semibold text-emerald-600 dark:text-emerald-400">
                {completedCount} / {decor.length}
              </strong>
            </span>
          </div>
        </div>
      </header>

      <ul className="mx-auto max-w-6xl px-6 py-8 space-y-2.5">
        {decor.map((d) => {
          const complete = isComplete(d.normal.progress);
          return (
            <li
              key={d.name}
              className={`rounded-xl bg-white dark:bg-zinc-900 px-5 py-4 ring-1 ${
                complete
                  ? "ring-emerald-200 dark:ring-emerald-800/60"
                  : "ring-zinc-200 dark:ring-zinc-800"
              }`}
            >
              <div className="mb-3 flex items-baseline justify-between gap-3">
                <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {d.name}
                </h2>
                {complete && (
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    ✓ 全收齊
                  </span>
                )}
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2 md:divide-x md:divide-zinc-100 dark:md:divide-zinc-800">
                <div className="md:pr-8">
                  <VariantPanel variant={d.normal} label="一般" />
                </div>
                <div className="md:pl-8">
                  <VariantPanel variant={d.rare} label="稀有" />
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-center text-xs text-zinc-400 dark:text-zinc-600">
        Pikmin Bloom™ © Nintendo / Niantic
      </footer>
    </main>
  );
}
