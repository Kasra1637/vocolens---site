import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Smiley as Smile, SmileySad as Frown, Flame, Shield, Sparkle as Sparkles, Warning as AlertTriangle, Handshake, Compass, Pulse as Activity, Heartbeat as HeartPulse, Brain, ArrowCounterClockwise as History, Smiley, Bone, Butterfly, Hand, HandsClapping, Footprints, Heartbeat } from '@phosphor-icons/react';

const plutchikEmotions = [
  { name: 'Happiness', icon: Smile, ladder: ['Content', 'Joyful', 'Elated'], scores: [34, 62, 85] },
  { name: 'Sadness',   icon: Frown, ladder: ['Wistful', 'Sad', 'Grief'], scores: [29, 57, 81] },
  { name: 'Anger',     icon: Flame, ladder: ['Annoyed', 'Frustrated', 'Furious'], scores: [31, 60, 88] },
  { name: 'Fear',      icon: Shield, ladder: ['Uneasy', 'Anxious', 'Terrified'], scores: [27, 55, 83] },
  { name: 'Surprise',  icon: Sparkles, ladder: ['Curious', 'Surprised', 'Astonished'], scores: [33, 59, 84] },
  { name: 'Disgust',   icon: AlertTriangle, ladder: ['Dislike', 'Disgusted', 'Repulsed'], scores: [25, 52, 79] },
  { name: 'Trust',     icon: Handshake, ladder: ['Accepting', 'Trusting', 'Devoted'], scores: [36, 64, 87] },
  { name: 'Anticipation', icon: Compass, ladder: ['Interested', 'Anticipating', 'Vigilant'], scores: [30, 58, 82] },
];

const bodyRegions = [
  { name: 'Head', Icon: Brain },
  { name: 'Face', Icon: Smiley },
  { name: 'Neck', Icon: Bone },
  { name: 'Chest', Icon: Heartbeat },
  { name: 'Stomach', Icon: Butterfly },
  { name: 'Arms', Icon: Hand },
  { name: 'Hands', Icon: HandsClapping },
  { name: 'Legs', Icon: Footprints }
];

const distressLevels = [
  { level: 'Moderate', color: '#F59E0B', response: 'A gentle on-screen note during reflection' },
  { level: 'High',     color: '#EF4444', response: 'A gentle on-screen note during reflection' },
];

/**
 * PlutchikExplorer — interactive emotion-ladder explorer in the site's
 * design language: chip-app emblem selector row + scored intensity bars
 * in brand primary, mirroring the app's EmotionBar ranking treatment.
 * Scores illustrate one example entry; they are not a live analysis.
 */
function PlutchikExplorer() {
  const [selected, setSelected] = useState(0);
  const active = plutchikEmotions[selected];
  const ActiveIcon = active.icon;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Emotion families"
        className="flex gap-2 overflow-x-auto py-2 -mx-1 px-1"
      >
        {plutchikEmotions.map(({ name, icon: Icon }, i) => {
          const isActive = i === selected;
          return (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelected(i)}
              className={`flex flex-col items-center gap-1.5 rounded-2xl px-3 py-3 min-w-[76px] min-h-[44px] flex-shrink-0 transition-all duration-200 ${
                isActive
                  ? 'bg-primary/10 ring-2 ring-primary/60'
                  : 'hover:bg-primary/5 ring-1 ring-transparent hover:ring-primary/20'
              }`}
            >
              <span className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <Icon className="w-5 h-5 text-[#6A3FC0]" weight={isActive ? 'fill' : 'regular'} />
              </span>
              <span className={`text-xs font-semibold leading-tight text-center ${isActive ? 'text-text-primary' : 'text-text-muted'}`}>
                {name}
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        aria-label={`${active.name} intensity ladder`}
        className="mt-4 rounded-2xl border border-primary/15 bg-primary/[0.04] p-5 sm:p-6"
      >
        <div className="flex items-center gap-3 mb-1">
          <span className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0" aria-hidden="true">
            <ActiveIcon className="w-5 h-5 text-[#6A3FC0]" weight="fill" />
          </span>
          <div className="min-w-0">
            <h4 className="font-bold text-lg text-text-primary leading-tight">{active.name}</h4>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/70">Intensity ladder · example entry</p>
          </div>
          <span className="ml-auto text-2xl font-bold text-[#6A3FC0] tabular-nums flex-shrink-0">
            {active.scores[active.scores.length - 1]}
          </span>
        </div>
        <ol className="mt-4 space-y-3">
          {active.ladder.map((step, i) => (
            <li key={step}>
              <div className="flex items-baseline justify-between gap-3 mb-1">
                <span className="text-sm font-semibold text-text-primary">{step}</span>
                <span className="text-sm text-text-muted tabular-nums">{active.scores[i]}</span>
              </div>
              <div className="h-2 rounded-full bg-primary/10 overflow-hidden" aria-hidden="true">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${active.scores[i]}%`, opacity: 0.45 + i * 0.275 }}
                />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function EmotionScienceSuite() {
  return (
    <section
      id="emotion-science"
      className="max-w-7xl mx-auto px-6 py-16 lg:py-24"
      aria-labelledby="emotion-science-heading"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <AnimatedSection animation="fade-in-up" className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/8 text-primary text-sm font-semibold uppercase tracking-widest rounded-full mb-5">
          <Brain className="w-3.5 h-3.5" />
          Scientific Foundation
        </span>
        <h2 id="emotion-science-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5" itemProp="name">
          The emotion science inside Vocolens
        </h2>
        <p className="text-text-secondary text-base leading-relaxed" itemProp="description">
          8 core emotions, valence, distress, body mapping, and AI that adapts to you — your journal stays on your device, behind your biometric lock.
        </p>
      </AnimatedSection>

      {/* 8 Plutchik emotions — interactive explorer */}
      <AnimatedSection animation="fade-in-up" delay={0.05} className="mb-10">
        <div className="card-app rounded-3xl p-6 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
            <div>
              <p className="font-semibold uppercase tracking-widest text-primary/70 mb-1 text-sm">8 Plutchik emotions, scored</p>
              <h3 className="font-bold text-xl">Detected and ranked in every entry</h3>
            </div>
            <p className="text-text-muted text-base leading-relaxed max-w-md">
              Each emotion family maps to an intensity ladder — your wording reveals which step you&apos;re on. Select an emotion to see its ladder.
            </p>
          </div>

          <PlutchikExplorer />
        </div>
      </AnimatedSection>

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-5 gap-5 mb-10">

        {/* Left column: Valence & Arousal + Distress Detection */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          {/* Valence & Arousal */}
          <AnimatedSection animation="fade-in-up" delay={0.1}>
            <div className="card-app rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-4 h-4 text-primary" />
                <p className="font-semibold uppercase tracking-widest text-primary/70 text-sm">Valence & Arousal</p>
              </div>
              <h3 className="font-bold text-text-primary mb-2 text-xl">Your emotion in 2D psychological space</h3>
              <p className="text-text-secondary mb-5 text-base leading-relaxed">
                Every entry is mapped on two axes: Pleasant ↔ Unpleasant and Calm ↔ Activated — the gold standard from affective neuroscience.
              </p>

              <div className="rounded-2xl bg-surface border border-primary/10 overflow-hidden">
                <svg
                  viewBox="0 0 300 300"
                  className="w-full max-w-[420px] mx-auto block"
                  role="img"
                  aria-label="Emotional landscape: one entry plotted as pleasant and slightly activated"
                >
                  {/* quadrant corner labels, like the app */}
                  <text x="10" y="20" fontSize="11" fontWeight="600" fill="#6B5E8A" opacity="0.7" fontFamily="Inter, sans-serif">TENSE</text>
                  <text x="156" y="20" fontSize="11" fontWeight="600" fill="#6B5E8A" opacity="0.7" fontFamily="Inter, sans-serif">EXCITED</text>
                  <text x="10" y="292" fontSize="11" fontWeight="600" fill="#6B5E8A" opacity="0.7" fontFamily="Inter, sans-serif">DOWN</text>
                  <text x="156" y="292" fontSize="11" fontWeight="600" fill="#6B5E8A" opacity="0.7" fontFamily="Inter, sans-serif">CALM</text>
                  {/* dashed axes */}
                  <line x1="150" y1="0" x2="150" y2="300" stroke="rgba(147,112,219,0.25)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="150" x2="300" y2="150" stroke="rgba(147,112,219,0.25)" strokeWidth="1" strokeDasharray="4 4" />
                  {/* centre crosshair dot */}
                  <circle cx="150" cy="150" r="3" fill="rgba(147,112,219,0.2)" />
                  {/* data point: soft fill + ring + smile marker */}
                  <circle cx="195" cy="105" r="15" fill="rgba(147,112,219,0.10)" />
                  <circle cx="195" cy="105" r="15" fill="none" stroke="#9370DB" strokeWidth="1.5" strokeOpacity="0.75" />
                  <g stroke="#6A3FC0" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
                    <circle cx="190" cy="101" r="1.1" fill="#6A3FC0" stroke="none" />
                    <circle cx="200" cy="101" r="1.1" fill="#6A3FC0" stroke="none" />
                    <path d="M 188 107 Q 195 113 202 107" fill="none" />
                  </g>
                </svg>
                <div className="flex items-center justify-between px-4 pb-3 text-[11px] font-medium text-text-muted">
                  <span>← Unpleasant</span>
                  <span>Pleasant →</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Distress Detection */}
          <AnimatedSection animation="fade-in-up" delay={0.2}>
            <div className="card-app rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <HeartPulse className="w-4 h-4 text-primary" />
                <p className="font-semibold uppercase tracking-widest text-primary/70 text-sm">Distress detection</p>
              </div>
              <h3 className="font-bold text-text-primary mb-2 text-xl">Distress awareness, right on time</h3>
              <p className="text-text-secondary mb-5 text-base leading-relaxed">
                Vocolens flags moderate and high distress signals during reflection, so you can notice and pause if you need to.
              </p>
              <ul className="space-y-3">
                {distressLevels.map(({ level, color, response }) => (
                  <li key={level} className="flex items-start gap-3 rounded-xl p-3 border border-primary/10 bg-white">
                    <span className="w-2.5 h-2.5 rounded-full mt-2 flex-shrink-0" style={{ background: color }} />
                    <div>
                      <p className="font-bold text-text-primary text-lg">{level} distress</p>
                      <p className="text-text-secondary text-base leading-relaxed">{response}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Right column: Body Mapping + Personalization AI */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {/* Body Mapping */}
          <AnimatedSection animation="fade-in-up" delay={0.15}>
            <div className="card-app rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-4 h-4 text-primary" />
                <p className="font-semibold uppercase tracking-widest text-primary/70 text-sm">Body sensation mapping</p>
              </div>
              <h3 className="font-bold text-text-primary mb-2 text-xl">Body sensation: where do you feel it?</h3>
              <p className="text-text-secondary mb-5 text-base leading-relaxed">
                After recording, tap the body region — head, face, neck, chest, stomach, arms, hands, or legs — where the emotion lives. Interoception turns feelings into data.
              </p>
              <div className="flex flex-wrap gap-2">
                {bodyRegions.map((region) => (
                  <span
                    key={region.name}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-primary/8 border border-primary/15 text-primary text-sm font-semibold hover:bg-primary/12 transition-colors"
                  >
                    <span className="w-7 h-7 rounded-full chip-app flex items-center justify-center">
                      <region.Icon className="w-4 h-4 text-[#6A3FC0]" weight="bold" />
                    </span>
                    {region.name}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Personalization AI */}
          <AnimatedSection animation="fade-in-up" delay={0.25}>
            <div className="card-app rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <p className="font-semibold uppercase tracking-widest text-primary/70 text-sm">Personalization AI</p>
              </div>
              <h3 className="font-bold text-text-primary mb-2 text-xl">Learns from every entry you make</h3>
              <p className="text-text-secondary mb-5 text-base leading-relaxed">
                A recency-weighted model studies the corrections you make and refines future suggestions — capped at an honest 80% accuracy ceiling, because feelings aren&apos;t perfectly predictable.
              </p>

              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-2xl p-4 border border-primary/15 bg-primary/[0.04]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-11 h-11 rounded-full chip-app flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <span className="font-bold text-base text-[#6A3FC0] tabular-nums">80</span>
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold uppercase tracking-wider text-primary/70">Model accuracy</p>
                      <p className="text-text-muted text-sm leading-relaxed">% ceiling · recency-weighted</p>
                    </div>
                  </div>
                  <div className="h-[5px] rounded-full bg-primary/10 overflow-hidden" aria-hidden="true">
                    <div className="h-full rounded-full bg-primary" style={{ width: '80%' }} />
                  </div>
                  <p className="text-text-muted mt-2 text-base leading-relaxed">Recency-weighted, learns continuously.</p>
                </div>

                <div className="rounded-2xl p-4 border border-primary/15 bg-primary/[0.04]">
                  <p className="text-sm font-semibold uppercase tracking-wider text-amber-600/90 mb-2 flex items-center gap-2">
                    <History className="w-3.5 h-3.5" /> Correction history
                  </p>
                  <ul className="divide-y divide-primary/10">
                    <li className="flex items-center justify-between gap-3 text-base text-text-secondary leading-relaxed py-2">
                      <span className="min-w-0">Anxious → <span className="text-text-primary font-semibold">Apprehensive</span></span>
                      <span className="text-xs font-semibold text-text-muted tabular-nums flex-shrink-0">Tue</span>
                    </li>
                    <li className="flex items-center justify-between gap-3 text-base text-text-secondary leading-relaxed py-2">
                      <span className="min-w-0">Joyful → <span className="text-text-primary font-semibold">Hopeful</span></span>
                      <span className="text-xs font-semibold text-text-muted tabular-nums flex-shrink-0">Mon</span>
                    </li>
                    <li className="flex items-center justify-between gap-3 text-base text-text-secondary leading-relaxed py-2">
                      <span className="min-w-0">Sad → <span className="text-text-primary font-semibold">Wistful</span></span>
                      <span className="text-xs font-semibold text-text-muted tabular-nums flex-shrink-0">Sun</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* AEO FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Which emotions does Vocolens detect?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Vocolens detects and scores the 8 Plutchik emotions: Happiness, Sadness, Anger, Fear, Surprise, Disgust, Trust, and Anticipation. Each is mapped to an intensity ladder (e.g. Happiness → Content → Joyful → Elated) for nuanced emotional vocabulary.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are valence and arousal scoring?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Valence and arousal map your emotional state to a 2D psychological space — Pleasant vs. Unpleasant on one axis, Calm vs. Activated on the other. It is the standard model from affective neuroscience used to capture the full texture of a feeling.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does Vocolens handle distress?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Vocolens scores each entry for low, moderate, or high distress. When moderate or high distress is detected during reflection, the app shows a gentle on-screen note so you can notice and pause if you need to. Vocolens is not a crisis or medical service — if you are in crisis, please contact a mental health professional or a crisis helpline in your region.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is body sensation mapping?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'After each recording you can tap a body region — head, face, neck, chest, stomach, arms, hands, or legs — to log where you physically feel the emotion. This builds interoceptive awareness over time.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does the personalization AI learn?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Vocolens uses a recency-weighted personalization model that studies your emotion corrections and refines future suggestions, with an honest 80% accuracy ceiling. You can view and manage every past correction at any time.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is my emotional data private?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Vocolens is biometric-locked and keeps your entries, audio, and personalization data on your device — there is no cloud account or synced backup of your journal. To turn speech into insight, your audio is sent transiently for transcription and the resulting text is sent for emotion analysis over an encrypted connection; neither service permanently stores your data, and no audio is sent for the analysis step. See our Privacy Policy for full detail.',
                },
              },
            ],
          }),
        }}
      />
    </section>
  );
}