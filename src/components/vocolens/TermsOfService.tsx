import { FileText, AlertCircle, CreditCard, Globe, Lock, Trash2, Activity } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function TermsOfService() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
      <AnimatedSection animation="fade-in-up">
        <div className="text-center mb-12">
          <div className="w-20 h-20 rounded-full bg-[#E9DFFE] flex items-center justify-center mx-auto mb-6 shadow-clay">
            <FileText className="w-10 h-10 text-[#9b87f5]" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Terms of Service
          </h1>
          <div className="space-y-2 text-text-muted text-base">
            <p>App: Vocolens</p>
            <p>Effective Date: May 10, 2026</p>
            <p>Contact: connect@vocolens.com</p>
          </div>
        </div>
      </AnimatedSection>

      <div className="bg-white rounded-3xl shadow-clay-lg p-8 lg:p-12 border border-primary/10 space-y-12">
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary">Acceptance of Terms</h2>
            <p className="text-text-secondary text-base leading-relaxed">
              By downloading or using Vocolens, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the app.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              These terms apply to all users of the app, including the free trial and paid subscription tiers.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.2}>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary">Description of Service</h2>
            <p className="text-text-secondary mb-4 text-base leading-relaxed">
              Vocolens is a voice-based journaling application that allows you to record audio entries, have them transcribed to text, and receive AI-powered emotional analysis. The app provides:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span className="text-text-secondary">Voice recording and local audio storage</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span className="text-text-secondary">Speech-to-text transcription via Deepgram</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span className="text-text-secondary">Emotional analysis (8 core emotion scoring) via Anthropic's Claude 3.5 Sonnet, accessed through OpenRouter — analyses your transcript text to detect expressed emotions from your words and language</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span className="text-text-secondary">AI-generated empathetic reflections with text-to-speech playback</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span className="text-text-secondary">Personal growth tracking, streak counters, and achievement badges</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span className="text-text-secondary">Local data export and full account deletion</span>
              </li>
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-clay">
                <CreditCard className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  Subscriptions & Free Trial
                </h2>
                <p className="text-text-secondary mb-4 text-base leading-relaxed">
                  Vocolens offers a 3-day free trial followed by a paid subscription. The free trial is available on the yearly plan.
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">The free trial begins when you complete onboarding and select a paid plan.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">You will be charged at the end of the trial period unless you cancel before it ends.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">Subscriptions are managed by Apple App Store or Google Play. Cancellation, refunds, and billing disputes are subject to their respective policies.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">We do not process payments directly and do not store payment card information.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">Prices are displayed in the app and may change with reasonable notice.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.4}>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Permitted Use</h2>
            <p className="text-text-secondary mb-4 text-base leading-relaxed">
              You may use Vocolens for lawful personal journaling purposes only. You agree not to:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span className="text-text-secondary">Use the app to record or transcribe third parties without their consent</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span className="text-text-secondary">Reverse-engineer, decompile, or attempt to extract the app's source code</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span className="text-text-secondary">Use the app in a way that violates any applicable law or regulation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span className="text-text-secondary">Attempt to circumvent the subscription or access premium features without payment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span className="text-text-secondary">Use the app's AI analysis outputs as a substitute for professional mental health advice</span>
              </li>
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.5}>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-clay">
                <AlertCircle className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  Not a Medical Service
                </h2>
                <p className="text-text-secondary mb-4 text-base leading-relaxed">
                  Vocolens is a personal journaling tool and is not a medical device, mental health service, or therapy application.
                </p>
                <p className="text-text-secondary mb-4 text-base leading-relaxed">
                  The emotional analysis, scores, and reflections generated by the app are produced by an AI language model and are for informational and self-reflection purposes only. They do not constitute:
                </p>
                <ul className="space-y-2 ml-4 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">Medical diagnosis or treatment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">Mental health therapy or counselling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">Crisis intervention services</span>
                  </li>
                </ul>
                <p className="text-text-secondary bg-amber-50 rounded-lg p-4 border border-amber-200 text-base leading-relaxed">
                  If you are experiencing a mental health crisis, please contact a qualified mental health professional or a crisis helpline in your region.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.6}>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-clay">
                <Lock className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  Your Content
                </h2>
                <p className="text-text-secondary mb-4 text-base leading-relaxed">
                  You own all content you create in Vocolens, including your voice recordings and written transcripts.
                </p>
                <p className="text-text-secondary mb-4 text-base leading-relaxed">
                  By using the app, you grant us a limited, temporary licence to:
                </p>
                <ul className="space-y-3 ml-4 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">Transmit your audio recording to Deepgram solely for the purpose of speech-to-text transcription</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">Transmit the resulting text transcript to our analysis backend, which forwards it to Anthropic's Claude 3.5 Sonnet (via OpenRouter) solely for the purpose of emotional analysis</span>
                  </li>
                </ul>
                <p className="text-text-secondary mb-4 text-base leading-relaxed">
                  This licence does not give us the right to use your content for any other purpose. Audio is not transmitted to the AI analysis service — only the text transcript is used for emotion detection.
                </p>
                <p className="text-text-secondary text-base leading-relaxed">
                  As described in the Privacy Policy, your journal data is stored locally on your device and is not backed up to our servers.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.7}>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-clay">
                <Globe className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  Third-Party Services
                </h2>
                <p className="text-text-secondary mb-4 text-base leading-relaxed">
                  Vocolens integrates with the following third-party services:
                </p>
                <ul className="space-y-3 ml-4 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary"><strong>Deepgram</strong> — Speech-to-text transcription (deepgram.com)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary"><strong>Anthropic / Claude 3.5 Sonnet via OpenRouter</strong> — AI emotional analysis from transcript text (openrouter.ai, anthropic.com)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary"><strong>Adapty</strong> — Subscription management (adapty.io)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary"><strong>Apple App Store / Google Play</strong> — App distribution and payments</span>
                  </li>
                </ul>
                <p className="text-text-secondary text-base leading-relaxed">
                  Your use of these services through the app is also governed by each provider's own terms of service and privacy policy. We are not responsible for the practices of these third parties.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.8}>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-clay">
                <Activity className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  Usage Tracking
                </h2>
                <p className="text-text-secondary text-base leading-relaxed">
                  To enforce the 300-minute monthly transcription allowance included with your subscription, your session duration and an anonymous device identifier are transmitted to our servers after each recording session. This data is used solely to track your usage against your monthly allowance and is not used for any other purpose.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.9}>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-clay">
                <Trash2 className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  Data Loss Disclaimer
                </h2>
                <p className="text-text-secondary mb-4 text-base leading-relaxed">
                  Because your journal data is stored only on your device:
                </p>
                <ul className="space-y-3 ml-4 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">Deleting the app will permanently delete all your journal entries.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">Losing your device without a device-level backup means your journal data cannot be recovered.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">We strongly recommend using your device's built-in backup (iCloud / Google Drive) or exporting your data via Settings → Privacy Settings → Export Data.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">We are not liable for loss of data resulting from device failure, accidental deletion, or app removal.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={1.0}>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Disclaimers & Limitation of Liability</h2>
            <p className="text-text-secondary mb-4 text-base leading-relaxed">
              Vocolens is provided "as is" without warranties of any kind, express or implied.
            </p>
            <p className="text-text-secondary mb-4 text-base leading-relaxed">
              To the maximum extent permitted by applicable law, we disclaim all warranties including accuracy of AI-generated analysis, uninterrupted availability of third-party APIs, and fitness for any particular purpose.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              Our total liability for any claim arising from your use of the app shall not exceed the amount you paid for your subscription in the 12 months preceding the claim.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={1.1}>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Governing Law</h2>
            <p className="text-text-secondary text-base leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable laws. Disputes will be resolved through good-faith negotiation first; if unresolved, through binding arbitration or a court of competent jurisdiction.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={1.2}>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Changes to These Terms</h2>
            <p className="text-text-secondary mb-4 text-base leading-relaxed">
              We may update these Terms of Service. Continued use of the app after changes constitutes your acceptance of the revised terms. We will notify you of material changes through an in-app prompt.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              For questions, contact us at connect@vocolens.com
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
