import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback } from "react";

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
        .min-h-screen.bg-surface { background: #0d0b18 !important; min-height: 100vh; }
      `}</style>

      <div className="join-page-wrapper">
        <style>{joinPageStyles}</style>

        <div className="join-glow" aria-hidden="true" />

        <main className="join-main">
          {/* HERO */}
          <section className="join-hero" id="waitlist">
            <div className="join-eyebrow">Private beta — launching soon</div>

            <h1 className="join-h1">
              Your thoughts finally have<br />
              <em>somewhere to land.</em>
            </h1>

            <p className="join-hero-sub">Your voice. Your patterns. Your clarity.</p>

            <div className="join-form-card">
              {!submitted ? (
                <div id="form-area">
                  <div className="join-form-group">
                    <input
                      type="email"
                      className="join-email-input"
                      placeholder="you@example.com"
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
                  <p className="join-form-note">No spam. One email when we launch.</p>
                  <p className="join-gmail-note">
                    Must be a Gmail or Google account address to receive your beta invite.
                  </p>
                  <p className="join-error-msg" aria-live="polite">
                    {error}
                  </p>

                  {/* Trust Strip */}
                  <div className="join-trust-strip" aria-label="Product trust signals">
                    <div className="join-trust-item">
                      <LockIcon />
                      Private by design
                    </div>
                    <div className="join-trust-item">
                      <ClockIcon />
                      Enterprise-grade transcription accuracy
                    </div>
                    <div className="join-trust-item">
                      <StarIcon />
                      Built for neurodivergent people
                    </div>
                    <div className="join-trust-item">
                      <CheckCircleIcon />
                      30+ languages supported
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
                </div>
              )}
            </div>
          </section>

          <div className="join-section-divider" />

          {/* FEATURES */}
          <section className="join-features" aria-labelledby="features-heading">
            <p className="join-section-label">How it works</p>
            <h2 className="join-features-heading" id="features-heading">
              A quieter way to know yourself.
            </h2>
            <p className="join-features-sub">
              Writing is hard. Talking is human. Vocolens turns your voice into a thoughtful
              practice.
            </p>

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
              People who found their clarity.
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
                  "Finally, a safe space for my unfiltered self."
                </blockquote>
                <div className="join-testimonial-meta">
                  <strong>Casey</strong>
                  Tourette's &amp; Remote Worker
                </div>
              </div>
            </div>
          </section>

          <div className="join-section-divider" />

          {/* BOTTOM CTA */}
          <section className="join-bottom-cta" aria-labelledby="cta-heading">
            <h2 id="cta-heading">
              Your thoughts deserve<br />
              <em>somewhere to land.</em>
            </h2>
            <p>Join the waitlist — one email when we launch, nothing more.</p>
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
  }

  /* AMBIENT GLOW */
  .join-glow {
    position: fixed;
    top: -200px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem 1.25rem;
    padding: 1.25rem 0 0;
    max-width: 420px;
    margin: 0 auto;
  }

  .join-trust-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 12px;
    color: var(--join-text-dim);
    white-space: nowrap;
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
    margin-bottom: 0.6rem !important;
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
    padding: 2rem 2rem 5rem;
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
  }

  @media (prefers-reduced-motion: reduce) {
    .join-page-wrapper * { transition: none !important; }
  }
`;
