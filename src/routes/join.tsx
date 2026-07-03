/**
 * Waitlist / Join page — with social sharing buttons for virality.
 */
import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback, useEffect } from "react";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Vocolens — Join the Waitlist" },
      {
        name: "description",
        content:
          "A voice journal built for minds that move fast and feel deeply. Join the Vocolens waitlist.",
      },
      { property: "og:title", content: "Vocolens — Join the Waitlist" },
      {
        property: "og:description",
        content:
          "A voice journal built for minds that move fast and feel deeply. Join the Vocolens waitlist.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vocolens.com/join" },
      {
        property: "og:image",
        content: "https://vocolens.com/vocolens_-_preview.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vocolens — Join the Waitlist" },
      {
        name: "twitter:description",
        content:
          "A voice journal built for minds that move fast and feel deeply. Join the Vocolens waitlist.",
      },
      {
        name: "twitter:image",
        content: "https://vocolens.com/vocolens_-_preview.png",
      },
    ],
    links: [{ rel: "canonical", href: "https://vocolens.com/join" }],
  }),
  component: JoinPage,
});

/* ─── Email Validation ─── */
const COMMON_TYPOS: Record<string, string> = {
  "gamil.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gmial.com": "gmail.com",
  "gmal.com": "gmail.com",
  "gmil.com": "gmail.com",
  "gmaill.com": "gmail.com",
  "gmail.co": "gmail.com",
  "gmail.cm": "gmail.com",
  "gmail.con": "gmail.com",
  "gmail.cpm": "gmail.com",
  "googlemail.com": "gmail.com",
};

const GMAIL_DOMAINS = ["gmail.com", "googlemail.com"];

function validateEmail(email: string): { ok: boolean; msg?: string } {
  if (!email) return { ok: false, msg: "Please enter your email address." };

  const basicPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!basicPattern.test(email)) {
    if (!email.includes("@"))
      return { ok: false, msg: "Missing @ — check your email address." };
    if (email.split("@").length > 2)
      return { ok: false, msg: "Too many @ symbols — check your email address." };
    const parts = email.split("@");
    if (!parts[1] || !parts[1].includes("."))
      return { ok: false, msg: "Missing domain — e.g. yourname@gmail.com" };
    return { ok: false, msg: "That doesn't look like a valid email address." };
  }

  const domain = email.split("@")[1].toLowerCase();

  if (COMMON_TYPOS[domain]) {
    return {
      ok: false,
      msg: `Did you mean ${email.split("@")[0]}@${COMMON_TYPOS[domain]}?`,
    };
  }

  if (!GMAIL_DOMAINS.includes(domain)) {
    return {
      ok: false,
      msg: "Please use a Gmail address — Google needs it to send your beta invite.",
    };
  }

  return { ok: true };
}

/* ─── SVG Icons ─── */
function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: 16, height: 16 }}
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 10l5 5 7-8"
        stroke="#a78de0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: 14, height: 14, color: "#a78de0", flexShrink: 0 }}
    >
      <rect x="2" y="6" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4.5 6V4.5a2.5 2.5 0 015 0V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: 14, height: 14, color: "#a78de0", flexShrink: 0 }}
    >
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 4v3l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: 14, height: 14, color: "#a78de0", flexShrink: 0 }}
    >
      <path
        d="M7 1.5l1.5 3 3.5.5-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5L7 1.5z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: 14, height: 14, color: "#a78de0", flexShrink: 0 }}
    >
      <path
        d="M2 7c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M5 7l1.5 1.5L9.5 5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: 18, height: 18, color: "#a78de0" }}
    >
      <rect x="6" y="2" width="6" height="8" rx="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 9c0 3.31 2.69 6 6 6s6-2.69 6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="9" y1="15" x2="9" y2="17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function InsightIcon() {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: 18, height: 18, color: "#a78de0" }}
    >
      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PatternIcon() {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: 18, height: 18, color: "#a78de0" }}
    >
      <path
        d="M3 14l3-4 3 2 3-5 3 3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FilledStarIcon() {
  return (
    <svg
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: 13, height: 13, fill: "#a78de0" }}
    >
      <polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9.5 3,11 3.5,7.5 1,5 4.5,4.5" />
    </svg>
  );
}

function FiveStars() {
  return (
    <div style={{ display: "flex", gap: 2, marginBottom: "0.75rem" }} aria-label="5 out of 5 stars">
      <FilledStarIcon />
      <FilledStarIcon />
      <FilledStarIcon />
      <FilledStarIcon />
      <FilledStarIcon />
    </div>
  );
}

/* ─── Social Share Icons ─── */
function XIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: 16, height: 16 }}>
      <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: 18, height: 18 }}>
      <path
        d="M11 6.2H9.9c-.5 0-.9.4-.9.9V8.3H11l-.3 1.6H9v4.4H7.3V9.9H6V8.3h1.3V6.9c0-1.3 1-2.4 2.3-2.4H11v1.7z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: 16, height: 16 }}>
      <rect x="3" y="7" width="2.4" height="7" fill="currentColor" />
      <circle cx="4.2" cy="4.2" r="1.3" fill="currentColor" />
      <path
        d="M8 7h2.3v1.1c.4-.6 1.1-1.3 2.4-1.3 1.8 0 3 1.2 3 3.6V14h-2.4v-3.2c0-1-.4-1.7-1.4-1.7-.8 0-1.3.5-1.5 1-.1.2-.1.4-.1.7V14H8V7z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: 17, height: 17 }}>
      <path
        d="M9 2.5a6.5 6.5 0 00-5.6 9.8L2.5 15.5l3.3-.9A6.5 6.5 0 109 2.5z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M6.3 7.2c.2-.5.4-.5.6-.5h.4c.15 0 .3.05.4.3l.5 1.1c.05.15.03.3-.05.4l-.3.35c-.1.1-.1.25-.03.4.3.55.9 1.15 1.45 1.45.15.08.3.07.4-.03l.35-.3c.1-.08.25-.1.4-.05l1.1.5c.25.1.3.25.3.4v.4c0 .2 0 .4-.5.6-.5.2-1.5.3-2.7-.9-1.2-1.2-1.1-2.2-.9-2.7z"
        fill="currentColor"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: 17, height: 17 }}>
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 5.5l6 4.5 6-4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkChainIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: 16, height: 16 }}>
      <path
        d="M8 10a3 3 0 004.24 0l1.5-1.5a3 3 0 00-4.24-4.24l-.76.76"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 8a3 3 0 00-4.24 0l-1.5 1.5a3 3 0 004.24 4.24l.76-.76"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Social Share Bar ─── */
const SHARE_URL = "https://vocolens.com/join";
const SHARE_TEXT =
  "I just joined the waitlist for Vocolens — an AI voice journal for ADHD, autism & alexithymia. Join me:";

interface ShareBarProps {
  heading?: string;
  subheading?: string;
  variant?: "success" | "section";
}

function ShareBar({ heading, subheading, variant = "section" }: ShareBarProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = useCallback(() => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(SHARE_URL).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  }, []);

  const encodedUrl = encodeURIComponent(SHARE_URL);
  const encodedText = encodeURIComponent(SHARE_TEXT);

  return (
    <div className={`join-share-bar join-share-bar--${variant}`}>
      {heading ? <p className="join-share-heading">{heading}</p> : null}
      {subheading ? <p className="join-share-sub">{subheading}</p> : null}

      <div className="join-share-icons" role="group" aria-label="Share the Vocolens waitlist">
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="join-share-btn"
          aria-label="Share on X (Twitter)"
        >
          <XIcon />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="join-share-btn"
          aria-label="Share on Facebook"
        >
          <FacebookIcon />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="join-share-btn"
          aria-label="Share on LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <a
          href={`https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="join-share-btn"
          aria-label="Share on WhatsApp"
        >
          <WhatsAppIcon />
        </a>
        <a
          href={`mailto:?subject=${encodeURIComponent("Check out Vocolens")}&body=${encodedText}%20${encodedUrl}`}
          className="join-share-btn"
          aria-label="Share via email"
        >
          <EmailIcon />
        </a>
        <button
          type="button"
          className="join-share-btn"
          onClick={handleCopyLink}
          aria-label="Copy waitlist link"
        >
          <LinkChainIcon />
        </button>
      </div>

      <p className="join-share-copied" role="status" aria-live="polite">
        {copied ? "Link copied!" : ""}
      </p>
    </div>
  );
}

/* ─── Countdown Banner ─── */
const LAUNCH_DATE = new Date("2026-08-02T00:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = Math.max(LAUNCH_DATE.getTime() - now.getTime(), 0);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const labelText = timeLeft.days === 0
    ? "Launching today"
    : `${timeLeft.days} day${timeLeft.days === 1 ? "" : "s"} to launch`;

  return (
    <div className="join-countdown-banner" role="timer" aria-live="polite" aria-label={`${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, and ${timeLeft.seconds} seconds until launch`}>
      <div className="join-countdown-inner">
        <span className="join-countdown-label">{labelText}</span>
        <div className="join-countdown-blocks">
          <div className="join-countdown-block">
            <span className="join-countdown-value">{String(timeLeft.days).padStart(2, "0")}</span>
            <span className="join-countdown-unit">days</span>
          </div>
          <span className="join-countdown-separator">:</span>
          <div className="join-countdown-block">
            <span className="join-countdown-value">{String(timeLeft.hours).padStart(2, "0")}</span>
            <span className="join-countdown-unit">hrs</span>
          </div>
          <span className="join-countdown-separator">:</span>
          <div className="join-countdown-block">
            <span className="join-countdown-value">{String(timeLeft.minutes).padStart(2, "0")}</span>
            <span className="join-countdown-unit">min</span>
          </div>
          <span className="join-countdown-separator">:</span>
          <div className="join-countdown-block">
            <span className="join-countdown-value">{String(timeLeft.seconds).padStart(2, "0")}</span>
            <span className="join-countdown-unit">sec</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Page Component ─── */
function JoinPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [inputBorderColor, setInputBorderColor] = useState("");

  const handleSubmit = useCallback(() => {
    const trimmed = email.trim().toLowerCase();
    const result = validateEmail(trimmed);
    if (!result.ok) {
      setError(result.msg || "");
      setInputBorderColor("rgba(220, 100, 100, 0.6)");
      return;
    }
    setError("");
    setInputBorderColor("");

    // Submit to Google Form (fires and forgets — Google Forms doesn't return JSON)
    const formData = new FormData();
    formData.append("entry.845133720", trimmed);
    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSdGAC2U_t5NupyKhDGZk9c9zclqDuOsN6bU6qJuzp2h0yA2SA/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    );

    setSubmitted(true);
  }, [email]);

  const handleInput = useCallback(() => {
    setError("");
    setInputBorderColor("");
  }, []);

  const handleBlur = useCallback(() => {
    const trimmed = email.trim().toLowerCase();
    if (trimmed) {
      const result = validateEmail(trimmed);
      if (!result.ok) {
        setError(result.msg || "");
        setInputBorderColor("rgba(220, 100, 100, 0.6)");
      }
    }
  }, [email]);

  return (
    <>
      {/* Hide the site header for this standalone page */}
      <style>{`
        header, nav, .min-h-screen.bg-surface > header { display: none !important; }
        .min-h-screen.bg-surface { background: #0d0b18 !important; min-height: 100vh; overflow-x: hidden; }
      `}</style>

      <div className="join-page-wrapper">
        <style>{joinPageStyles}</style>

        <div className="join-glow" aria-hidden="true" />

        <main className="join-main">
          {/* HERO */}
          <section className="join-hero" id="waitlist">
            <CountdownBanner />

            <h1 className="join-h1">
              Your thoughts finally have<br />
              <em>somewhere to land</em>
            </h1>

            <p className="join-hero-sub">Your voice, your patterns, your clarity</p>

            <div className="join-form-card">
              {!submitted ? (
                <div id="form-area">
                  <div className="join-form-group">
                    <input
                      type="email"
                      className="join-email-input"
                      placeholder="you@gmail.com"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        handleInput();
                      }}
                      onBlur={handleBlur}
                      style={inputBorderColor ? { borderColor: inputBorderColor } : undefined}
                    />
                  </div>
                  <button className="join-btn" type="button" onClick={handleSubmit}>
                    Get early access
                    <ArrowIcon />
                  </button>
                  <p className="join-form-note">No spam — one email when we launch</p>
                  <p className="join-gmail-note">
                    Gmail only — required for beta access.
                  </p>
                  <p className="join-error-msg" aria-live="polite">
                    {error}
                  </p>

                  {/* Trust Strip */}
                  <div className="join-trust-strip" aria-label="Product trust signals">
                    <div className="join-trust-item">
                      <ClockIcon />
                      <span>Flawlessly accurate transcription</span>
                    </div>
                    <div className="join-trust-item">
                      <StarIcon />
                      <span>Neurodivergent-friendly</span>
                    </div>
                    <div className="join-trust-row-break" />

                    <div className="join-trust-item">
                      <LockIcon />
                      <span>Private by design</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="join-success-msg">
                  <div className="join-check">
                    <CheckIcon />
                  </div>
                  <p>
                    <strong>You're on the list.</strong>
                    <br />
                    We'll reach out when Vocolens is ready.
                  </p>

                  <ShareBar
                    heading="Know someone who'd love this?"
                    subheading="Share Vocolens with your friends and family."
                    variant="success"
                  />
                </div>
              )}
            </div>
          </section>

          <div className="join-section-divider" />

          {/* FEATURES */}
          <section className="join-features" aria-labelledby="features-heading">
            <p className="join-section-label">How it works</p>
            <h2 className="join-features-heading" id="features-heading">
              A quieter way to know yourself
            </h2>


            <div className="join-feature-grid">
              <div className="join-feature-card">
                <div className="join-feature-icon">
                  <MicIcon />
                </div>
                <h3>Speak freely</h3>
                <p>
                  Open Vocolens and just talk. No prompts, no judgment. Whatever's on your mind.
                </p>
              </div>

              <div className="join-feature-card">
                <div className="join-feature-icon">
                  <InsightIcon />
                </div>
                <h3>Gentle insights</h3>
                <p>
                  AI finds themes and patterns in what you said. You decide what's true.
                </p>
              </div>

              <div className="join-feature-card">
                <div className="join-feature-icon">
                  <PatternIcon />
                </div>
                <h3>See your patterns</h3>
                <p>
                  Over time, your emotional fingerprint comes into focus. Growth you can feel.
                </p>
              </div>
            </div>
          </section>

          <div className="join-section-divider" />

          {/* TESTIMONIALS */}
          <section className="join-testimonials" aria-labelledby="testimonials-heading">
            <p className="join-section-label">Real stories</p>
            <h2 className="join-features-heading" id="testimonials-heading">
              People who found their clarity
            </h2>

            <div className="join-testimonial-grid">
              <div className="join-testimonial-card">
                <FiveStars />
                <blockquote>
                  "Finally a journal that moves as fast as my mind."
                </blockquote>
                <div className="join-testimonial-meta">
                  <strong>Jordan</strong>
                  ADHD &amp; Creative
                </div>
              </div>

              <div className="join-testimonial-card">
                <FiveStars />
                <blockquote>
                  "Like having a translator for my own mind."
                </blockquote>
                <div className="join-testimonial-meta">
                  <strong>Riley</strong>
                  Autistic &amp; Graduate Student
                </div>
              </div>

              <div className="join-testimonial-card">
                <FiveStars />
                <blockquote>
                  "I finally have words for what my body already knew."
                </blockquote>
                <div className="join-testimonial-meta">
                  <strong>Sam</strong>
                  Alexithymia &amp; Designer
                </div>
              </div>
            </div>
          </section>

          <div className="join-section-divider" />

          {/* SPREAD THE WORD */}
          <section className="join-spread" aria-labelledby="spread-heading">
            <p className="join-section-label">Spread the word</p>
            <h2 className="join-features-heading" id="spread-heading">
              Help more people find their clarity
            </h2>
            <ShareBar
              subheading="Vocolens is built for neurodivergent minds — share it with someone who needs it."
              variant="section"
            />
          </section>

          <div className="join-section-divider" />

          {/* BOTTOM CTA */}
          <section className="join-bottom-cta" aria-labelledby="cta-heading">
            <h2 id="cta-heading">
              Your thoughts deserve<br />
              <em>somewhere to land</em>
            </h2>
            <p>Join the waitlist — get one email when we launch, nothing else.</p>
            <a href="#waitlist" className="join-btn-bottom">
              Get early access
              <ArrowIcon />
            </a>
          </section>
        </main>


      </div>
    </>
  );
}

/* ─── Scoped Styles ─── */
const joinPageStyles = `
  .join-page-wrapper {
    --join-bg: #0d0b18;
    --join-bg-card: #13101f;
    --join-bg-card-border: rgba(124, 92, 191, 0.18);
    --join-purple: #7c5cbf;
    --join-purple-light: #a78de0;
    --join-purple-glow: rgba(124, 92, 191, 0.12);
    --join-text: #f0ecfa;
    --join-text-muted: rgba(240, 236, 250, 0.55);
    --join-text-dim: rgba(240, 236, 250, 0.35);
    --join-serif: 'Fraunces', Georgia, serif;
    --join-sans: 'Inter', system-ui, sans-serif;

    background: var(--join-bg);
    color: var(--join-text);
    font-family: var(--join-sans);
    font-size: 16px;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }

  /* AMBIENT GLOW */
  .join-glow {
    position: fixed;
    top: -200px;
    left: 50%;
    transform: translateX(-50%);
    width: min(600px, 100vw);
    height: 400px;
    background: radial-gradient(ellipse at center, rgba(124, 92, 191, 0.08) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  .join-main {
    position: relative;
    z-index: 1;
  }

  /* HERO */
  .join-hero {
    max-width: 680px;
    margin: 0 auto;
    padding: 6rem 2rem 5rem;
    text-align: center;
  }

  /* COUNTDOWN BANNER */
  .join-countdown-banner {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1.25rem;
  }

  .join-countdown-inner {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.6rem 1.4rem;
    background: linear-gradient(135deg, rgba(124, 92, 191, 0.12) 0%, rgba(167, 141, 224, 0.08) 100%);
    border: 0.5px solid rgba(167, 141, 224, 0.3);
    border-radius: 50px;
    backdrop-filter: blur(8px);
  }

  .join-countdown-label {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--join-purple-light);
  }

  .join-countdown-blocks {
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }

  .join-countdown-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 36px;
  }

  .join-countdown-value {
    font-size: 18px;
    font-weight: 700;
    color: var(--join-text);
    line-height: 1.1;
    font-variant-numeric: tabular-nums;
  }

  .join-countdown-unit {
    font-size: 9px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--join-text-muted);
    margin-top: 1px;
  }

  .join-countdown-separator {
    font-size: 16px;
    font-weight: 700;
    color: var(--join-purple-light);
    margin-bottom: 8px;
  }

  .join-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 12px;
    font-weight: 500;
    color: var(--join-purple-light);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 2rem;
    padding: 0.35rem 0.9rem;
    border: 0.5px solid rgba(124, 92, 191, 0.3);
    border-radius: 999px;
    background: rgba(124, 92, 191, 0.07);
  }

  .join-eyebrow::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background: var(--join-purple-light);
    border-radius: 50%;
  }

  .join-h1 {
    font-family: 'Fraunces', Georgia, serif !important;
    font-size: clamp(3rem, 7vw, 4.5rem) !important;
    font-weight: 700 !important;
    line-height: 1.08 !important;
    letter-spacing: -0.02em !important;
    color: var(--join-text) !important;
    margin-bottom: 1.25rem !important;
  }

  .join-h1 em {
    font-style: italic;
    color: var(--join-purple-light) !important;
  }

  .join-hero-sub {
    font-size: 18px;
    color: var(--join-text-muted);
    line-height: 1.65;
    max-width: 480px;
    margin: 0 auto 2.5rem;
  }

  /* FORM */
  .join-form-card {
    max-width: 380px;
    margin: 0 auto;
  }

  .join-form-group {
    margin-bottom: 0.9rem;
  }

  .join-email-input {
    width: 100%;
    background: rgba(255, 255, 255, 0.04);
    border: 0.5px solid rgba(124, 92, 191, 0.25);
    border-radius: 8px;
    padding: 0.7rem 1rem;
    font-size: 15px;
    font-family: var(--join-sans);
    color: var(--join-text);
    outline: none;
    transition: border-color 0.2s, background 0.2s;
  }

  .join-email-input::placeholder {
    color: var(--join-text-dim);
  }

  .join-email-input:focus {
    border-color: var(--join-purple);
    background: rgba(124, 92, 191, 0.07);
  }

  .join-btn {
    width: 100%;
    margin-top: 0.5rem;
    padding: 0.85rem 1rem;
    background: var(--join-purple);
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    font-family: var(--join-sans);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .join-btn:hover { background: #6a4dab; }
  .join-btn:active { transform: scale(0.98); }

  .join-form-note {
    margin-top: 0.85rem;
    font-size: 12px;
    color: var(--join-text-dim);
    text-align: center;
  }

  .join-gmail-note {
    margin-top: 0.5rem;
    font-size: 11px;
    color: var(--join-text-dim);
    text-align: center;
    opacity: 0.75;
  }

  .join-error-msg {
    margin-top: 0.5rem;
    font-size: 12px;
    color: rgba(220, 100, 100, 0.9);
    text-align: center;
    min-height: 1.2em;
  }

  /* SUCCESS */
  .join-success-msg {
    text-align: center;
    padding: 1.5rem 0 0.5rem;
  }

  .join-check {
    width: 44px;
    height: 44px;
    background: rgba(124, 92, 191, 0.15);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
  }

  .join-success-msg p {
    font-size: 15px;
    color: var(--join-text-muted);
  }

  .join-success-msg strong {
    color: var(--join-text);
  }

  /* TRUST STRIP */
  .join-trust-strip {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    padding: 1.5rem 0 0;
    max-width: 440px;
    margin: 0 auto;
  }

  .join-trust-item {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 12px;
    color: var(--join-text);
    padding: 0.35rem 0.75rem;
    background: rgba(124, 92, 191, 0.08);
    border: 0.5px solid rgba(124, 92, 191, 0.25);
    border-radius: 999px;
    white-space: nowrap;
  }

  .join-trust-row-break {
    flex-basis: 100%;
    height: 0;
  }

  @media (max-width: 560px) {
    .join-trust-row-break { display: none; }
  }

  /* DIVIDER */
  .join-section-divider {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
    border-top: 0.5px solid rgba(124, 92, 191, 0.12);
  }

  /* FEATURES */
  .join-features {
    max-width: 800px;
    margin: 0 auto;
    padding: 5rem 2rem;
  }

  .join-section-label {
    font-size: 12px;
    font-weight: 500;
    color: var(--join-purple-light);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-family: var(--join-sans);
  }

  .join-features-heading {
    font-family: var(--join-serif) !important;
    font-size: clamp(2rem, 4.5vw, 2.75rem) !important;
    font-weight: 400 !important;
    line-height: 1.15 !important;
    color: var(--join-text) !important;
    margin-bottom: 3rem !important;
  }

  .join-features-sub {
    font-size: 18px;
    color: var(--join-text-muted);
    margin-bottom: 3rem;
    max-width: 400px;
  }

  .join-feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
  }

  .join-feature-card {
    background: var(--join-bg-card);
    border: 0.5px solid var(--join-bg-card-border);
    border-radius: 12px;
    padding: 1.5rem;
  }

  .join-feature-card h3 {
    font-size: 16px;
    font-weight: 500;
    color: var(--join-text) !important;
    margin-bottom: 0.4rem;
    font-family: var(--join-sans) !important;
  }

  .join-feature-card p {
    font-size: 14px;
    color: var(--join-text-muted);
    line-height: 1.6;
  }

  .join-feature-icon {
    width: 36px;
    height: 36px;
    background: rgba(124, 92, 191, 0.12);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }

  /* TESTIMONIALS */
  .join-testimonials {
    max-width: 800px;
    margin: 0 auto;
    padding: 5rem 2rem;
  }

  .join-testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    margin-top: 3rem;
  }

  .join-testimonial-card {
    background: var(--join-bg-card);
    border: 0.5px solid var(--join-bg-card-border);
    border-radius: 12px;
    padding: 1.5rem;
  }

  .join-testimonial-card blockquote {
    font-family: var(--join-serif);
    font-size: 16px;
    font-style: italic;
    color: var(--join-text);
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  .join-testimonial-meta {
    font-size: 13px;
    color: var(--join-text-dim);
    font-family: var(--join-sans);
  }

  .join-testimonial-meta strong {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: var(--join-text-muted);
    margin-bottom: 1px;
    font-family: var(--join-sans);
  }

  /* SPREAD THE WORD */
  .join-spread {
    max-width: 800px;
    margin: 0 auto;
    padding: 5rem 2rem;
    text-align: center;
  }

  .join-spread .join-features-heading {
    margin-bottom: 2rem !important;
  }

  /* SOCIAL SHARE BAR */
  .join-share-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .join-share-bar--success {
    margin-top: 1.75rem;
    padding-top: 1.5rem;
    border-top: 0.5px solid rgba(124, 92, 191, 0.18);
  }

  .join-share-heading {
    font-size: 15px;
    font-weight: 500;
    color: var(--join-text);
    margin-bottom: 0.35rem;
    text-align: center;
  }

  .join-share-sub {
    font-size: 13px;
    color: var(--join-text-muted);
    margin-bottom: 1.1rem;
    text-align: center;
    max-width: 380px;
  }

  .join-share-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.6rem;
  }

  .join-share-btn {
    width: 42px;
    height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--join-purple-light);
    background: rgba(124, 92, 191, 0.08);
    border: 0.5px solid rgba(124, 92, 191, 0.25);
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s, transform 0.15s;
    text-decoration: none;
    padding: 0;
  }

  .join-share-btn:hover {
    background: rgba(124, 92, 191, 0.18);
    border-color: rgba(124, 92, 191, 0.45);
    transform: translateY(-2px);
  }

  .join-share-btn:active { transform: scale(0.95); }

  .join-share-btn:focus-visible {
    outline: 2px solid var(--join-purple-light);
    outline-offset: 2px;
  }

  .join-share-copied {
    margin-top: 0.6rem;
    font-size: 12px;
    color: var(--join-purple-light);
    min-height: 1.2em;
    text-align: center;
  }

  /* BOTTOM CTA */
  .join-bottom-cta {
    max-width: 560px;
    margin: 0 auto;
    padding: 4rem 2rem 6rem;
    text-align: center;
  }

  .join-bottom-cta h2 {
    font-family: var(--join-serif) !important;
    font-size: clamp(2rem, 4.5vw, 2.75rem) !important;
    font-weight: 400 !important;
    line-height: 1.15 !important;
    color: var(--join-text) !important;
    margin-bottom: 1rem !important;
  }

  .join-bottom-cta h2 em {
    font-style: italic;
    color: var(--join-purple-light) !important;
  }

  .join-bottom-cta p {
    font-size: 18px;
    color: var(--join-text-muted);
    margin-bottom: 2rem;
  }

  .join-btn-bottom {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.85rem 2rem;
    background: var(--join-purple);
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    font-family: var(--join-sans);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.2s;
  }

  .join-btn-bottom:hover { background: #6a4dab; }



  /* RESPONSIVE */
  @media (max-width: 560px) {
    .join-hero { padding: 4rem 1.25rem 3rem; }
    .join-features, .join-testimonials, .join-bottom-cta { padding-left: 1.25rem; padding-right: 1.25rem; }
    .join-trust-strip { gap: 0.4rem; }
    .join-h1 { font-size: 2.25rem !important; }
  }

  @media (prefers-reduced-motion: reduce) {
    .join-page-wrapper * { transition: none !important; }
  }
`;
