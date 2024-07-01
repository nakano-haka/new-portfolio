export const navItems = [
  { name: "自分", link: "#about" },
  { name: "プロジェクト", link: "#projects" },
  { name: "経験", link: "#experience" },
  { name: "連絡先", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "開発に情熱を持つ技術愛好家",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "英語と日本語を使いこなせる",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "私の技術スタック",
    description: "継続的な改善",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "AI愛好家",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "現在、身体的健康と経済的健康を統合するライフスタイルアプリを構築中",
    description: "内部情報",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "もっと詳しく知りたくございましたら、ご連絡いただけますと幸いです。",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "アップルクローン",
    des: "GSAP と Three.js を使用して Web サイトで 3D レンダリングを練習するための iPhone 15 Web サイトの再現",
    img: "/apple-clone.png",
    iconLists: ["/re.svg", "/tail.svg", "/three.svg"],
    link: "https://apple-clone-flax.vercel.app/",
  },
  {
    id: 2,
    title: "アニメリスト",
    des: "ランダムに生成されたアニメのリストで次の一気見作品を探しましょう",
    img: "/anime-list.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://anime-list-six.vercel.app ",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "フールスタックウェブ開発者",
    desc: "プロダクト開発メンバーとして、製品の開発～リリースまで担当",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "プロジェクト管理",
    desc: "ドキュメント作成（WBS、Activity List、等）とプロパーコミュニケーション",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "インフラエンジニア",
    desc: "クラウドテクノロジー、特にAmazon Web Serviceに夢中",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/nakano-haka",
  },
];
