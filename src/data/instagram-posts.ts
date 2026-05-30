import { FAISALABAD_SOCIAL } from "./site";

export type InstagramPostType = "post" | "reel";

export type InstagramPost = {
  shortcode: string;
  type: InstagramPostType;
  url: string;
  /** Local thumbnail when downloaded; otherwise loaded from Instagram media URL */
  image?: string;
  titleEn: string;
  titleUr: string;
  captionEn: string;
  captionUr: string;
};

/** Featured posts from @pakpalforum_fsd — update shortcodes as new posts go live */
export const FEATURED_INSTAGRAM_POSTS: InstagramPost[] = [
  {
    shortcode: "DLknQCPIlIN",
    type: "post",
    url: "https://www.instagram.com/p/DLknQCPIlIN/",
    image: "/images/instagram/Post 1.webp",
    titleEn: "How small groups get aid into Gaza when big NGOs struggle",
    titleUr: "",
    captionEn:
      "When large international groups like Global March to Gaza or Madleen struggle to get aid into Gaza, local organisations such as Pak Palestine Forum and Shab-e-Abi Talib succeed by using strategy over publicity. Delivering aid is never easy — these groups rely on discreet, effective methods: sending resources quietly (including digital transfers), routing support through trusted local partners and doctors inside Gaza, and distributing familiar, locally-sourced supplies so assistance reaches people quickly and affordably. The difference is clear: big names focus on media, small teams work on the ground.",
    captionUr: "",
  },
  {
    shortcode: "DYXbqpkCnhU",
    type: "post",
    url: "https://www.instagram.com/p/DYXbqpkCnhU/",
    image: "/images/instagram/Nakba Post.heic",
    titleEn: "Remembering the Nakba — the struggle continues",
    titleUr: "",
    captionEn:
      "The Nakba is an ongoing story of displacement and resistance — from the systematic violence of the 1940s to the current threat of 'Another Nakba' facing Gaza. Acknowledging the past is the first step toward a free future.",
    captionUr: "",
  },
  {
    shortcode: "DNvV8n60ByR",
    type: "post",
    url: "https://www.instagram.com/p/DNvV8n60ByR/",
    image: "/images/instagram/Virtual Adaption Program.png",
    titleEn: "Virtual Adoption — bring hope to martyrs' orphans",
    titleUr: "",
    captionEn:
      "Become the voice for thirty innocent children — join the Virtual Adoption Program to provide $100/month per child via digital transfers. This program connects you directly to the child so you can confirm aid reached them. Sponsoring an orphan changes a life and is one of the greatest acts of charity. Join and bring hope to Gaza's martyrs' children.",
    captionUr: "",
  },
  {
    shortcode: "DYy6ogdKZsh",
    type: "reel",
    url: "https://www.instagram.com/p/DYy6ogdKZsh/",
    image: "/images/instagram/University Post.png",
    titleEn: "University of Chakwal action",
    titleUr: "یونیورسٹی آف چکوال اقدام",
    captionEn:
      "When an educational institution normalizes a settler-colonial state, it fails its students and its nation.",
    captionUr:
      "جب تعلیمی ادارہ ایک نوآبادیاتی ریاست کو معمول بناتا ہے تو وہ اپنے طلبہ اور اپنی قوم سے ناکام ہو جاتا ہے۔",
  },
  {
    shortcode: "DXygWXmCE1Z",
    type: "post",
    url: "https://www.instagram.com/p/DXygWXmCE1Z/",
    image: "/images/instagram/Post 3.png",
    titleEn: "Pakistanis March for Gaza in Faisalabad",
    titleUr: "",
    captionEn:
      "Pakistanis march for Gaza in Faisalabad, showing solidarity with the people of Palestine and members of Global Samund Flortila — they also demand the Government of Pakistan secure the immediate release of Mushtaq Ahmed Khan.",
    captionUr: "",
  },
];

export const INSTAGRAM_PROFILE = FAISALABAD_SOCIAL.instagram;

export function instagramMediaUrl(post: InstagramPost, size: "m" | "l" = "m") {
  const path = post.type === "reel" ? `reel/${post.shortcode}` : `p/${post.shortcode}`;
  return `https://www.instagram.com/${path}/media/?size=${size}`;
}

export function instagramThumbnail(post: InstagramPost, size: "m" | "l" = "m") {
  return post.image ?? instagramMediaUrl(post, size);
}
