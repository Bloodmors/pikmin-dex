// header: normal='一般（241 / 489）', rare='稀有（4 / 67）'
// 78 entries

export type Color =
  | "紅" | "黃" | "藍" | "白" | "紫" | "灰" | "粉" | "冰";

export type DecorVariant = {
  progress: string;
  colors: Color[];
};

export type Decor = {
  name: string;
  normal: DecorVariant;
  rare: DecorVariant | null;
};

export const overallNormal = "一般（241 / 489）";
export const overallRare = "稀有（4 / 67）";

export const decor: Decor[] = [
  { name: "餐廳", normal: {"progress": "O", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉", "冰"]}, rare: {"progress": "-", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉", "冰"]} },
  { name: "咖啡廳", normal: {"progress": "6", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: {"progress": "-", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]} },
  { name: "甜點店-馬卡龍", normal: {"progress": "4", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "甜點店-甜甜圈", normal: {"progress": "2", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "電影院", normal: {"progress": "4", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "藥局", normal: {"progress": "5", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "動物園", normal: {"progress": "0", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "森林-鍬形蟲", normal: {"progress": "1", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉", "冰"]}, rare: null },
  { name: "森林-橡栗", normal: {"progress": "1", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉", "冰"]}, rare: null },
  { name: "水邊", normal: {"progress": "O", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: {"progress": "-", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]} },
  { name: "郵局", normal: {"progress": "0", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "美術館", normal: {"progress": "2", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "機場", normal: {"progress": "2", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "車站-電車紙模型", normal: {"progress": "3", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "車站-票券", normal: {"progress": "1", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "海灘", normal: {"progress": "1", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "漢堡店", normal: {"progress": "4", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "便利店-瓶蓋", normal: {"progress": "3", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "便利店-零食", normal: {"progress": "6", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "超市-蘑菇", normal: {"progress": "4", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "超市-香蕉", normal: {"progress": "3", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: {"progress": "-", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]} },
  { name: "麵包店", normal: {"progress": "6", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: {"progress": "-", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]} },
  { name: "美容院", normal: {"progress": "4", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: {"progress": "-", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]} },
  { name: "服裝店", normal: {"progress": "4", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "公園-幸運草", normal: {"progress": "O", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉", "冰"]}, rare: {"progress": "-", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉", "冰"]} },
  { name: "公園-四葉幸運草", normal: {"progress": "2", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉", "冰"]}, rare: {"progress": "", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉", "冰"]} },
  { name: "圖書館", normal: {"progress": "3", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "路邊-貼紙A", normal: {"progress": "6", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉", "冰"]}, rare: null },
  { name: "路邊-貼紙B", normal: {"progress": "O", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉", "冰"]}, rare: null },
  { name: "路邊-貼紙C", normal: {"progress": "5", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉", "冰"]}, rare: null },
  { name: "路邊-金幣", normal: {"progress": "7", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉", "冰"]}, rare: {"progress": "-", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉", "冰"]} },
  { name: "壽司餐廳", normal: {"progress": "4", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "山丘", normal: {"progress": "0", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "體育館", normal: {"progress": "2", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "雨天", normal: {"progress": "O", "colors": ["藍", "藍", "藍"]}, rare: null },
  { name: "下雪", normal: {"progress": "1", "colors": ["藍", "白", "冰"]}, rare: null },
  { name: "主題樂園", normal: {"progress": "0", "colors": ["紅", "黃", "藍", "紅", "黃", "藍"]}, rare: null },
  { name: "公車站", normal: {"progress": "6", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "義式餐廳-披薩", normal: {"progress": "4", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "義式餐廳-義大利麵", normal: {"progress": "2", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "拉麵店", normal: {"progress": "6", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "橋梁", normal: {"progress": "4", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "飯店", normal: {"progress": "3", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "化妝品商店", normal: {"progress": "4", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "神社和寺廟-吉", normal: {"progress": "3", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "神社和寺廟-小吉", normal: {"progress": "2", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "電器行-電池", normal: {"progress": "3", "colors": ["黃", "黃", "黃", "黃", "黃", "黃"]}, rare: null },
  { name: "電器行-仙女燈", normal: {"progress": "0", "colors": ["黃", "黃"]}, rare: null },
  { name: "咖哩餐廳", normal: {"progress": "1", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "五金行", normal: {"progress": "3", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "大學&學院", normal: {"progress": "2", "colors": ["紅", "黃", "藍"]}, rare: null },
  { name: "墨西哥餐廳", normal: {"progress": "1", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "自助洗衣店&乾洗店", normal: {"progress": "2", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "韓國餐廳", normal: {"progress": "4", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉", "冰"]}, rare: null },
  { name: "瑪利歐", normal: {"progress": "O", "colors": ["紅", "黃", "藍", "紫"]}, rare: null },
  { name: "情人節", normal: {"progress": "1", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "禮物貼紙（金色）", normal: {"progress": "2", "colors": ["紅", "黃", "藍", "白", "紫", "粉"]}, rare: null },
  { name: "復活節", normal: {"progress": "1", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "兔寶寶", normal: {"progress": "O", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "遊戲卡牌-鬼牌", normal: {"progress": "O", "colors": ["紫"]}, rare: null },
  { name: "遊戲卡牌-黑桃A～8", normal: {"progress": "O", "colors": []}, rare: null },
  { name: "遊戲卡牌-黑桃9～K", normal: {"progress": "O", "colors": []}, rare: null },
  { name: "遊戲卡牌-紅心A～8", normal: {"progress": "O", "colors": []}, rare: null },
  { name: "遊戲卡牌-紅心9～K", normal: {"progress": "O", "colors": []}, rare: null },
  { name: "遊戲卡牌-方塊A～8", normal: {"progress": "0", "colors": ["紅", "黃", "藍", "白", "粉", "紫", "灰", "紅"]}, rare: null },
  { name: "遊戲卡牌-方塊9～K", normal: {"progress": "0", "colors": ["黃", "藍", "白", "粉", "灰"]}, rare: null },
  { name: "遊戲卡牌-梅花A～8", normal: {"progress": "6", "colors": ["藍", "粉", "紅", "黃", "紅", "灰", "粉", "藍"]}, rare: null },
  { name: "遊戲卡牌-梅花9～K", normal: {"progress": "4", "colors": ["紫", "灰", "黃", "白", "紫"]}, rare: null },
  { name: "彩繪", normal: {"progress": "1", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "下午茶", normal: {"progress": "1", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "Nintendo遊戲機", normal: {"progress": "O", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "衝浪板鑰匙圈", normal: {"progress": "2", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉"]}, rare: null },
  { name: "照片鈕扣徽章", normal: {"progress": "O", "colors": ["紅"]}, rare: null },
  { name: "奶嘴", normal: {"progress": "O", "colors": ["紅"]}, rare: null },
  { name: "彩色粉末", normal: {"progress": "2", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉", "冰"]}, rare: null },
  { name: "荷蘭木鞋", normal: {"progress": "O", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉", "冰"]}, rare: null },
  { name: "遊戲卡匣", normal: {"progress": "O", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉", "冰"]}, rare: null },
  { name: "花冠", normal: {"progress": "4", "colors": ["紅", "黃", "藍", "白", "紫", "灰", "粉", "冰"]}, rare: null },
];
