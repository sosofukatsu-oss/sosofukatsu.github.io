export type Work = {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  intent: string;
  tags: string[];
};

export const works: Work[] = [
  {
    id: "work-1",
    title: "リゾート感を伝える爽やかなサムネイル",
    category: "ゲーム風景",
    imageSrc: "/thumbnails/samune.png",
    intent: "",
    tags: ["ゲーム風景"],
  },
  {
    id: "work-2",
    title: "ポップなデザインでまとめたサムネイル",
    category: "ゲーム風景",
    imageSrc: "/thumbnails/samune_pokopoke3.jpg",
    intent: "",
    tags: ["ゲーム風景"],
  },
  {
    id: "work-3",
    title: "昼夜の対比で雰囲気を伝えるサムネイル",
    category: "ゲーム風景",
    imageSrc: "/thumbnails/samune_octra.jpg",
    intent: "",
    tags: ["ゲーム風景"],
  },
  {
    id: "work-5",
    title: "キャラクターの魅力を押し出したサムネイル",
    category: "ゲーム風景",
    imageSrc: "/thumbnails/samune_penguin.jpg",
    intent: "",
    tags: ["ゲーム風景"],
  },
  {
    id: "work-4",
    title: "時間帯の移ろいを１枚で見せるサムネイル",
    category: "ゲーム風景",
    imageSrc: "/thumbnails/samune_yotei.jpg",
    intent: "",
    tags: ["ゲーム風景"],
  },
];
