// showcaseData.js
import { ExternalLinkIcon, PlayIcon, DownloadIcon, NewspaperIcon, BookOpenIcon } from "lucide-react";

const showcaseData = [
  {
    id: 1,
    title: "Paper Quilling Artwork",
    description: "A collection of intricate paper quilling designs.",
    content: "Explore the world of paper filigree with these stunning artworks created by Zaw Htike",
    image: {
      src: "/images/Cvp/artwork.png",
      alt: "Paper Quilling Artwork"
    },
    tags: ["All", "Art", "Promo"],
    labels: [
      { text: "Paper Quilling", color: "bg-blue-500" },
      { text: "Art", color: "bg-green-500" }
    ],
    buttons: [
      {
        href: "https://www.facebook.com/TreasureHouseArtgallery",
        label: "Go Check It Out",
        icon: ExternalLinkIcon
      }
    ],
    projectLinks: []
  },
  {
    id: 2,
    title: "Collaborations with Zaw Htike",
    description: "Coca Cola, Shangri-La, YWCA, Down Syndrome, and more.",
    content: "Zaw Htike has collaborated with various brands and organizations to create unique paper quilling art pieces.",
    image: {
      src: "/images/Cvp/milestone.png",
      alt: "Collaborations"
    },
    tags: ["All", "Milestones", "Collabs"],
    labels: [
      { text: "Interview", color: "bg-yellow-500" },
      { text: "Milestones", color: "bg-green-500" }
    ],
    buttons: [],
    projectLinks: [
      { title: "Shangri-La", url: "https://www.facebook.com/share/p/FzF8S9rpED4UycRm/?" },
      { title: "Coca Cola", url: "https://www.facebook.com/share/uiWqWNbaSLyyFQqD/?mibextid=WC7FNe" },
      { title: "Coca Cola 11နှစ်ပြည့်", url: "https://www.facebook.com/share/p/fTioEQxfDZdZ8bA5/?mibextid=WC7FNe" },
      { title: "YWCA", url: "https://www.facebook.com/share/p/jLKnFzFsDKrGWeLz/?" },
      { title: "Collaborate with Albee's", url: "https://www.facebook.com/share/CowsL8QnG95tMKrn/?mibextid=WC7FNe" },
      { title: "Down Syndrome", url: "https://www.facebook.com/share/jJRFd83XukjEnb6Z/?mibextid=WC7FNe" },
      { title: "ဘုန်းတော်ကြီးကျောင်းပညာဒါန", url: "https://www.facebook.com/share/p/DvgrbSGzGZcWQeuS/?" },
      { title: "မြန်မာလူငယ်အနုပညာရှင်များ၏ဖန်တီးမူခရီး", url: "https://www.facebook.com/share/p/1PzceF4HXTUEuAMn/?" },
      { title: "ပြင်သစ်ယဥ်ကျေးမှုဌာန", url: "https://www.facebook.com/share/p/6vqJTwRbuq2iTxEL/?" },
      { title: "MNTV Today Talk program", url: "https://www.facebook.com/share/p/VaaaBXzHBEaYJXia/?" }
    ]
  },
  {
    id: 3,
    title: "Paper Quilling Art Exhibitions",
    description: "Annual Paper Quilling Art Exhibitions showcasing intricate designs and artworks.",
    content: "Explore the beautiful world of paper quilling through our annual exhibitions. These events showcase the delicate art of paper filigree, featuring intricate designs and stunning artworks created by talented artists.",
    image: {
      src: "/images/Cvp/exhibition.png", 
      alt: "Paper Quilling Art Exhibition"
    },
    tags: ["All", "Art", "Exhibition"],
    labels: [
      { text: "Paper Quilling", color: "bg-blue-500" },
      { text: "Exhibition", color: "bg-green-500" }
    ],
    buttons: [],
    projectLinks: [
      { title: "2023 Paper Quilling Art Exhibition", url: "https://www.facebook.com/share/p/ijYx8wKVjot5bhVv/?" },
      { title: "2022 Paper Quilling Art Exhibition", url: "https://www.facebook.com/share/p/iEkYCA7bkvTqhP9e/?" }
    ]
  },
  {
    id: 4, 
    title: "Celebrity and Media Appearances",
    description: "A collection of media appearances and features in various Myanmar publications and programs.",
    content: "Explore Zaw Htike's appearances across different Myanmar media platforms, including interviews, features, and talk show appearances.",
    image: {
      src: "/images/Cvp/milestone.png", 
      alt: "Zaw Htike Media Appearances"
    },
    tags: ["All", "Media", "Celebrity"],
    labels: [
      { text: "Media", color: "bg-purple-500" },
      { text: "Celebrity", color: "bg-pink-500" }
    ],
    buttons: [],
    projectLinks: [
      { title: "Myanmar Celebrity", url: "https://fb.watch/c820qM4wbh/" },
      { title: "စံတော်ချိန်သတင်းစာ ၂၀၂၂ ကိုဗစ်အထူးကဏ္ဏ", url: "https://m.facebook.com/100055912942955/posts/358283365654674/" },
      { title: "စံတော်ချိန်နေ့စဉ်သတင်းစာ ၂၀၂၄", url: "https://www.facebook.com/share/p/Bch48fNMdTL67hMs/?mibextid=WC7FNe" },
      { title: "Popular Journal ထူးထူးခြားခြားဝါသနာရှင်များ", url: "https://fb.watch/bEt-X-0WZK/" },
      { title: "Mercury Media", url: "https://fb.watch/bq-fhbcSj9/" },
      { title: "Kaung Thaw Media", url: "https://www.facebook.com/110526917754984/posts/325514976256176/" },
      { title: "Hobby Channel Myanmar", url: "https://fb.watch/bq-oYaGMl8/" },
      { title: "MNTV Today Talk", url: "https://fb.watch/br5KK9sZVz/" },
      { title: "DVB Youth Voice Todaytalk program", url: "https://fb.watch/br3w9tmS2q" },
      { title: "Myanmar Artisan Toolkit Guest Speaker", url: "https://www.facebook.com/Myanmarartisantoolkit/videos/718380005612981/" },
      { title: "Cele Cele", url: "https://www.facebook.com/share/v/vLeGLkRoSBvjrMx1/?mibextid=w8EBqM" },
      { title: "MT entertainment", url: "https://www.facebook.com/share/v/Bd8wyPjUjALYsSP1/?mibextid=WC7FNe" },
      { title: "Albee's Talk Show", url: "https://www.facebook.com/share/v/NzSfLmJpACErZCP5/?mibextid=WC7FNe" }
    ]
  },
  {
    id: 5,
    title: "Paper Quilling Art Workshop",
    description: "Learn the art of paper quilling through our interactive workshop.",
    content: "Join our Paper Quilling Art Workshop and discover the intricate and beautiful world of paper filigree. In this hands-on session, you'll learn the techniques to create stunning designs using simple strips of paper. Perfect for beginners and intermediate artists looking to refine their skills.",
    image: {
      src: "/images/Cvp/workshop.png",
      alt: "Paper Quilling Art Workshop"
    },
    tags: ["All", "Art", "Workshop"],
    labels: [
      { text: "Paper Quilling", color: "bg-blue-500" },
      { text: "Workshop", color: "bg-yellow-500" }
    ],
    buttons: [
      {
        href: "https://m.me/zawhtiketh",
        label: "Contact for Workshop",
        icon: ExternalLinkIcon
      }
    ],
    projectLinks: []
  },
  {
    id: 6,
    title: "Contact For Custom Orders",
    description: "Get in touch with Zaw Htike for custom paper quilling art orders.",
    content: "His intricate designs and unique style make for the perfect gift or decor piece. Contact Zaw Htike for custom orders and personalized paper quilling art pieces.",
    image: {
      src: "/images/Cvp/contact.png",
      alt: "Contact for Custom Orders"
    },
    tags: ["All", "Promo", "Art"],
    labels: [
      { text: "Promo", color: "bg-pink-500" },
      { text: "Art", color: "bg-green-500" }
    ],
    buttons: [
      {
        href: "https://m.me/zawhtiketh",
        label: "Contact for Orders",
        icon: ExternalLinkIcon
      },
      {
        href: "https://www.facebook.com/TreasureHouseArtgallery",
        label: "Contact for FB Page",
        icon: ExternalLinkIcon
      }
    ]
  }
];

export default showcaseData;