export type ResourceArticleImage = {
  /** Absolute URL to the custom 1200x630 Open Graph / Twitter image. */
  url: `https://vocolens.com/${string}`;
  width: number;
  height: number;
  alt: string;
};

export type ResourceArticleMeta = {
  slug: string;
  url: `https://vocolens.com/resources/${string}`;
  title: string;
  /**
   * Optional HTML `<title>` override. When set, the `<title>` tag uses this
   * while `title` continues to feed `og:title` / `twitter:title` unchanged.
   */
  titleTag?: string;
  description: string;
  h1: string;
  datePublished: string;
  dateModified: string;
  /**
   * Custom social image for the article.
   * Required for all new articles via `defineNewResourceArticle`; never fall
   * back to the site logo. Existing legacy articles awaiting custom artwork
   * explicitly pass `image: null`.
   */
  image: ResourceArticleImage | null;
};

/**
 * Helper for registering new resource articles. Enforces a non-null custom
 * `image` at compile time so new articles can never omit it or fall back to a
 * shared site logo.
 */
export function defineNewResourceArticle<
  T extends ResourceArticleMeta & { image: ResourceArticleImage },
>(meta: T): T {
  return meta;
}

export const RESOURCE_ARTICLES = {
  "plutchik-emotion-wheel": defineNewResourceArticle({
    slug: "plutchik-emotion-wheel",
    url: "https://vocolens.com/resources/plutchik-emotion-wheel",
    title: "Plutchik's Emotion Wheel Explained: 8 Families, 3 Steps",
    titleTag: "Plutchik's Emotion Wheel: From Annoyed to Furious",
    description:
      "Plutchik’s emotion wheel groups feelings into eight families and three intensity steps. Learn when a wheel helps or overwhelms and how to check in.",
    h1: "Plutchik’s emotion wheel: why “annoyed” & “furious” belong on the same ladder",
    datePublished: "2026-10-15",
    dateModified: "2026-10-17",
    image: {
      url: "https://vocolens.com/og/plutchik-emotion-wheel.png",
      width: 1200,
      height: 630,
      alt: "Plutchik’s Emotion Wheel diagram showing 8 primary emotion families (Joy, Trust, Fear, Surprise, Sadness, Disgust, Anger, Anticipation) arranged across 3 intensity rings.",
    },
  }),
  "valence-and-arousal": {
    slug: "valence-and-arousal",
    url: "https://vocolens.com/resources/valence-and-arousal",
    title: "Valence & Arousal: Why Calm Isn’t Always Happy | Vocolens",
    description:
      "Learn how emotional valence and arousal differ, why low energy does not always mean calm contentment, and how to use a two-axis emotion check-in.",
    h1: "Valence & Arousal: Why Calm Isn’t Always Happy",
    datePublished: "2026-10-11",
    dateModified: "2026-10-11",
    image: {
      url: "https://vocolens.com/og/valence-and-arousal.png",
      width: 1200,
      height: 630,
      alt: "Valence & Arousal: Why calm isn’t always happy. Vocolens resource card.",
    },
  },
  "mixed-emotions": {
    slug: "mixed-emotions",
    url: "https://vocolens.com/resources/mixed-emotions",
    title: "Mixed Emotions: Feeling Happy & Sad at Once | Vocolens",
    description:
      "Mixed emotions let you feel happy and sad at once. See everyday examples and try a reflection that holds both feelings without forcing a choice.",
    h1: "Mixed Emotions: Why You Can Feel Happy & Sad at Once",
    datePublished: "2026-10-06",
    dateModified: "2026-10-06",
    image: {
      url: "https://vocolens.com/og/mixed-emotions.png",
      width: 1200,
      height: 630,
      alt: "Mixed Emotions: Why you can feel happy & sad at once. Vocolens resource card.",
    },
  },
  "rejection-sensitivity": {
    slug: "rejection-sensitivity",
    url: "https://vocolens.com/resources/rejection-sensitivity",
    title: "Rejection Sensitivity & ADHD: What RSD Means | Vocolens",
    description:
      "Learn what rejection sensitivity and RSD mean, why the label is not a formal diagnosis, and practical ways to respond to hurt without assuming intent.",
    h1: "Rejection Sensitivity & ADHD: What RSD Means & How to Respond",
    datePublished: "2026-09-29",
    dateModified: "2026-10-06",
    image: {
      url: "https://vocolens.com/og/rejection-sensitivity.png",
      width: 1200,
      height: 630,
      alt: "Rejection Sensitivity & ADHD: What RSD means and how to respond. Vocolens resource card.",
    },
  },
  "emotional-granularity": {
    slug: "emotional-granularity",
    url: "https://vocolens.com/resources/emotional-granularity",
    title: "Emotional Granularity: Why Specific Emotion Words Matter",
    description:
      "Emotional granularity is distinguishing specific feelings from broad labels. Learn why precise emotion words support regulation and how to practice.",
    h1: "Emotional Granularity: Why Specific Words Change What You Feel",
    datePublished: "2026-09-17",
    dateModified: "2026-09-17",
    image: {
      url: "https://vocolens.com/og/emotional-granularity.png",
      width: 1200,
      height: 630,
      alt: "Emotional Granularity: Why specific emotion words matter. Vocolens resource card.",
    },
  },
  "adhd-time-blindness": {
    slug: "adhd-time-blindness",
    url: "https://vocolens.com/resources/adhd-time-blindness",
    title: "ADHD Time Blindness: Examples & Practical Supports",
    description:
      "Learn what ADHD time blindness means, recognize everyday examples, and try visible timers, task estimates, and transition cues without blaming yourself.",
    h1: "ADHD Time Blindness: Examples & Practical Time Supports",
    datePublished: "2026-09-09",
    dateModified: "2026-10-06",
    image: {
      url: "https://vocolens.com/og/adhd-time-blindness.png",
      width: 1200,
      height: 630,
      alt: "ADHD Time Blindness: Examples & practical time supports. Vocolens resource card.",
    },
  },
  "burnout-recovery-signs": {
    slug: "burnout-recovery-signs",
    url: "https://vocolens.com/resources/burnout-recovery-signs",
    title: "Burnout Signs & Recovery: What to Notice & Try",
    description:
      "Understand workplace burnout signs, how they differ from ordinary tiredness, and practical recovery supports that address demands as well as rest.",
    h1: "Burnout Signs & Recovery: What to Notice & What Can Help",
    datePublished: "2026-08-04",
    dateModified: "2026-10-06",
    image: {
      url: "https://vocolens.com/og/burnout-recovery-signs.png",
      width: 1200,
      height: 630,
      alt: "Burnout Signs & Recovery: What to notice and what can help. Vocolens resource card.",
    },
  },
  "overthinking-rumination": {
    slug: "overthinking-rumination",
    url: "https://vocolens.com/resources/overthinking-rumination",
    title: "Overthinking & Rumination: How to Spot the Loop",
    description:
      "Understand rumination versus useful reflection, see examples of repetitive worry, and try a practical next-step check without promises of instant relief.",
    h1: "Overthinking & Rumination: How to Recognize the Loop",
    datePublished: "2026-07-14",
    dateModified: "2026-10-06",
    image: {
      url: "https://vocolens.com/og/overthinking-rumination.png",
      width: 1200,
      height: 630,
      alt: "Overthinking & Rumination: How to recognize the loop. Vocolens resource card.",
    },
  },
  "autism-emotional-regulation": {
    slug: "autism-emotional-regulation",
    url: "https://vocolens.com/resources/autism-emotional-regulation",
    title: "Autism Emotional Regulation: Sensory Needs & Supports",
    description:
      "Explore emotional regulation in autistic adults, how sensory demands and alexithymia can differ, and ways to plan support without masking your needs.",
    h1: "Autism & Emotional Regulation: Sensory Needs & Practical Supports",
    datePublished: "2026-06-29",
    dateModified: "2026-10-06",
    image: {
      url: "https://vocolens.com/og/autism-emotional-regulation.png",
      width: 1200,
      height: 630,
      alt: "Autism & Emotional Regulation: Sensory needs and practical supports. Vocolens resource card.",
    },
  },
  "alexithymia-emotional-vocabulary": {
    slug: "alexithymia-emotional-vocabulary",
    url: "https://vocolens.com/resources/alexithymia-emotional-vocabulary",
    title: "Alexithymia: Difficulty Naming Emotions & Where to Start",
    description:
      "Explore what alexithymia means, examples of difficulty identifying feelings, and gentle ways to describe sensations and build emotional vocabulary.",
    h1: "Alexithymia: Difficulty Identifying Emotions & Where to Start",
    datePublished: "2026-06-28",
    dateModified: "2026-10-06",
    image: {
      url: "https://vocolens.com/og/alexithymia-emotional-vocabulary.png",
      width: 1200,
      height: 630,
      alt: "Alexithymia: Difficulty identifying emotions and where to start. Vocolens resource card.",
    },
  },
  "distress-detection": {
    slug: "distress-detection",
    url: "https://vocolens.com/resources/distress-detection",
    title: "Physical Signs of Overwhelm & Body Awareness | Vocolens",
    description:
      "Learn what interoception means, explore physical signs that can accompany overwhelm, and try a gentle check-in without treating sensations as diagnoses.",
    h1: "Physical Signs of Overwhelm: Body Awareness Without Guessing",
    datePublished: "2026-06-11",
    dateModified: "2026-10-06",
    image: {
      url: "https://vocolens.com/og/distress-detection.png",
      width: 1200,
      height: 630,
      alt: "Physical Signs of Overwhelm: Body awareness without guessing. Vocolens resource card.",
    },
  },
  "emotional-awareness-patterns": {
    slug: "emotional-awareness-patterns",
    url: "https://vocolens.com/resources/emotional-awareness-patterns",
    title: "Emotional Awareness: What It Is & How to Build It",
    description:
      "Learn what emotional awareness means, see everyday examples, and try a simple emotion-and-trigger journal to recognize feelings and patterns.",
    h1: "Emotional Awareness: What It Is & How to Improve It",
    datePublished: "2026-03-30",
    dateModified: "2026-10-06",
    image: {
      url: "https://vocolens.com/og/emotional-awareness-patterns.png",
      width: 1200,
      height: 630,
      alt: "Emotional Awareness: What it is & how to improve it. Vocolens resource card.",
    },
  },
  "science-of-reflection": {
    slug: "science-of-reflection",
    url: "https://vocolens.com/resources/science-of-reflection",
    title: "Affect Labeling: How to Name Your Emotions | Vocolens",
    description:
      "Learn what affect labeling is, what research shows about naming emotions, and how to try a short check-in without promises of guaranteed stress relief.",
    h1: "Affect Labeling: How to Name Your Emotions",
    datePublished: "2026-02-28",
    dateModified: "2026-10-06",
    image: {
      url: "https://vocolens.com/og/science-of-reflection.png",
      width: 1200,
      height: 630,
      alt: "Affect Labeling: How to name your emotions. Vocolens resource card.",
    },
  },
} satisfies Record<string, ResourceArticleMeta>;

export type ResourceArticleSlug = keyof typeof RESOURCE_ARTICLES;

export function buildArticleHead(slug: ResourceArticleSlug) {
  const article = RESOURCE_ARTICLES[slug];
  const imageMeta = article.image
    ? [
        { property: "og:image", content: article.image.url },
        { property: "og:image:width", content: String(article.image.width) },
        { property: "og:image:height", content: String(article.image.height) },
        { property: "og:image:alt", content: article.image.alt },
        { name: "twitter:image", content: article.image.url },
      ]
    : [];

  return {
    meta: [
      { title: ("titleTag" in article && article.titleTag) || article.title },
      { name: "description", content: article.description },
      { property: "og:title", content: article.title },
      { property: "og:description", content: article.description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: article.url },
      { property: "article:published_time", content: article.datePublished },
      { property: "article:modified_time", content: article.dateModified },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: article.title },
      { name: "twitter:description", content: article.description },
      ...imageMeta,
    ],
    links: [{ rel: "canonical", href: article.url }],
  };
}
