export type Pikmin = {
  slug: string;
  nameZh: string;
  nameEn: string;
  debutGame: string;
  color: string;
  ability: string;
  description: string;
};

export const pikmin: Pikmin[] = [
  {
    slug: "red",
    nameZh: "紅色皮克敏",
    nameEn: "Red Pikmin",
    debutGame: "Pikmin (2001)",
    color: "#e23b3b",
    ability: "抗火，攻擊力較高",
    description: "（待補）",
  },
  {
    slug: "yellow",
    nameZh: "黃色皮克敏",
    nameEn: "Yellow Pikmin",
    debutGame: "Pikmin (2001)",
    color: "#f5c518",
    ability: "抗電，可被丟得更高",
    description: "（待補）",
  },
  {
    slug: "blue",
    nameZh: "藍色皮克敏",
    nameEn: "Blue Pikmin",
    debutGame: "Pikmin (2001)",
    color: "#3b8be2",
    ability: "可在水中行動",
    description: "（待補）",
  },
  {
    slug: "purple",
    nameZh: "紫色皮克敏",
    nameEn: "Purple Pikmin",
    debutGame: "Pikmin 2 (2004)",
    color: "#8a4fff",
    ability: "重量相當於 10 隻皮克敏，攻擊力強",
    description: "（待補）",
  },
  {
    slug: "white",
    nameZh: "白色皮克敏",
    nameEn: "White Pikmin",
    debutGame: "Pikmin 2 (2004)",
    color: "#f5f5f5",
    ability: "抗毒，移動速度快，能挖出地下物品",
    description: "（待補）",
  },
  {
    slug: "rock",
    nameZh: "岩石皮克敏",
    nameEn: "Rock Pikmin",
    debutGame: "Pikmin 3 (2013)",
    color: "#7a7a7a",
    ability: "能擊破玻璃/水晶，不會被踩扁",
    description: "（待補）",
  },
  {
    slug: "winged",
    nameZh: "羽毛皮克敏",
    nameEn: "Winged Pikmin",
    debutGame: "Pikmin 3 (2013)",
    color: "#f48ad6",
    ability: "可飛行，能跨越障礙物",
    description: "（待補）",
  },
  {
    slug: "ice",
    nameZh: "冰皮克敏",
    nameEn: "Ice Pikmin",
    debutGame: "Pikmin 4 (2023)",
    color: "#a8e0ff",
    ability: "能凍結敵人與水面",
    description: "（待補）",
  },
  {
    slug: "glow",
    nameZh: "夜光皮克敏",
    nameEn: "Glow Pikmin",
    debutGame: "Pikmin 4 (2023)",
    color: "#bdf5a8",
    ability: "夜間探險專用，會發光",
    description: "（待補）",
  },
];

export function getPikmin(slug: string): Pikmin | undefined {
  return pikmin.find((p) => p.slug === slug);
}
