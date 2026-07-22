import { Shield, Eye, Lock, Database, Users, Globe, Trash2, FileText, CircleAlert as AlertCircle, Smartphone, Bell, Activity } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function PrivacyPolicy() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-32 pb-16 lg:pt-40 lg:pb-24">
      <AnimatedSection animation="fade-in-up">
        <div className="text-center mb-12">
          <div className="w-20 h-20 rounded-full bg-[#E9DFFE] flex items-center justify-center mx-auto mb-6 shadow-clay">
            <Shield className="w-10 h-10 text-[#9b87f5]" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-2">
            Privacy Policy
          </h1>
          <p className="text-text-secondary mb-4 text-base leading-relaxed">Vocolens</p>
          <p className="text-text-muted text-base leading-relaxed">
            Effective Date: June 23, 2026
          </p>
        </div>
      </AnimatedSection>

      <div className="bg-white rounded-3xl shadow-clay-lg p-8 lg:p-12 border border-primary/10 space-y-12">
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-2xl p-6 border border-primary/20">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Our Core Commitment</h2>
            <p className="text-text-secondary mb-4 text-base leading-relaxed">
              Vocolens is built on a simple principle: your personal reflections belong to you. We designed the app so your journal entries are stored only on your device. We do not operate user accounts, we do not store your journal data on our servers, and we do not sell or share your information with advertisers.
            </p>
            <p className="text-text-secondary mb-4 text-base leading-relaxed">
              This policy explains exactly what data leaves your device, why, and what happens to it.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.2}>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-clay">
                <Smartphone className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  1. Data That Stays on Your Device
                </h2>
                <p className="text-text-secondary mb-4 text-base leading-relaxed">
                  The following data never leaves your device under normal operation:
                </p>

                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>All journal entries (text transcripts, AI analysis, emotion scores, topics)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Audio recordings (saved to your device's local storage)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Your emotional growth statistics and streak data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Your badge and milestone progress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>App preferences (theme, dark mode, time format)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Onboarding responses (mood, goals, journaling preferences)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Your PIN code (hashed with SHA-256 and stored on-device — the raw PIN is never saved)</span>
                  </li>
                </ul>

                <p className="text-text-secondary mt-4 text-base leading-relaxed">
                  Journal data and preferences are stored using on-device local storage, protected by your device's application sandbox. Your PIN is hashed before storage and the hash salt is kept in your device's secure hardware keystore (iOS Keychain / Android Keystore). Biometric authentication state is also stored locally. There is no cloud synchronisation, no server-side backup, and no remote access to this data.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-clay">
                <Users className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  2. Data Sent to Third-Party Services
                </h2>
                <p className="text-text-secondary mb-4 text-base leading-relaxed">
                  Two external services receive data when you create a journal entry:
                </p>

                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-lg p-4 border border-primary/10">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-text-primary mb-2 text-lg">1. Deepgram (Speech-to-Text)</h4>
                      </div>
                    </div>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>Your audio recording is sent to our backend server (hosted on Cloudflare Workers), which forwards it to Deepgram's Nova-2 API for transcription into text.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>Deepgram processes the audio and returns a text transcript. Neither our backend nor Deepgram permanently stores your audio after transcription is complete.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>Deepgram's own privacy policy governs how they handle audio data. See <a href="https://deepgram.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">deepgram.com/privacy</a>.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>If Deepgram is unavailable or no API key is configured, a fallback transcript is used and no audio is transmitted.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-lg p-4 border border-primary/10">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-text-primary mb-2 text-lg">2. OpenAI GPT-5.4 Mini (Emotional Analysis) via OpenRouter</h4>
                      </div>
                    </div>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>Your text transcript is sent to our analysis backend for emotional analysis.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>Our backend forwards this transcript to OpenAI's GPT-5.4 Mini model, accessed through OpenRouter (an AI gateway service). The AI analyses the words and language in your transcript to score the 8 core emotions and generate a personalised reflection.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>No audio is transmitted for AI analysis. No user identifiers, account details, or persistent metadata are sent alongside the transcript.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>OpenRouter's privacy policy governs routing of data: <a href="https://openrouter.ai/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">openrouter.ai/privacy</a>. OpenAI's privacy policy governs how the underlying model handles text data: <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">openai.com/privacy</a>.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>If the analysis backend is unavailable, the app falls back to on-device keyword-based analysis — no data is sent externally in this case.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.4}>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-clay">
                <Lock className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  3. Audio Data
                </h2>
                <p className="text-text-secondary mb-4 text-base leading-relaxed">
                  Audio recordings are saved in your device's local app storage directory.
                </p>

                <div className="space-y-3">
                  <p className="text-text-secondary text-base leading-relaxed">
                    When you record a journal entry:
                  </p>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Your audio is temporarily transmitted to our backend server over an encrypted HTTPS connection, which forwards it to Deepgram for speech-to-text transcription.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>The resulting text transcript (not the audio) is then transmitted to our analysis backend for emotion analysis.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Deepgram does not receive any personally identifying information alongside the audio.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>We do not store, listen to, or retain your audio recordings on our servers. Audio is processed transiently and discarded.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>The local audio file remains on your device. You can delete it by deleting the journal entry. Deleting an entry removes the associated audio file from your device. Deleting your account removes all audio files and journal data from your device permanently.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in-up" delay={0.45}>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-clay">
                <Activity className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  4. Usage Tracking
                </h2>
                <p className="text-text-secondary mb-4 text-base leading-relaxed">
                  To enforce the 300-minute monthly transcription allowance included with your subscription, your session duration (in seconds) and an anonymous device identifier are sent to our backend server after each recording session. This data is held in ephemeral server memory only — it is not written to a persistent database and is lost when the server restarts. It is used solely to track your usage against your monthly allowance and is not linked to your name, email address, or any other personally identifying information.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.5}>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-clay">
                <Bell className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  5. Local Notifications
                </h2>
                <p className="text-text-secondary mb-4 text-base leading-relaxed">
                  Vocolens can send daily reminder notifications to encourage journaling. These notifications:
                </p>

                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Are scheduled and delivered entirely on-device using the operating system's notification system.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Do not involve any external server or push notification service.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Contain only generic reminder messages — no personal data is included.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Can be disabled at any time in the app's Settings screen.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.55}>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-clay">
                <Database className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  6. In-App Purchases
                </h2>
                <p className="text-text-secondary mb-4 text-base leading-relaxed">
                  Vocolens offers a premium subscription. Subscription purchases are handled by Apple App Store or Google Play.
                </p>

                <div className="space-y-3">
                  <p className="text-text-secondary text-base leading-relaxed">
                    We use Adapty to manage subscription status. Adapty may receive your device's anonymous app store identifier to verify purchase status. No personal information beyond purchase status is shared. See <a href="https://adapty.io/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">adapty.io/privacy</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.6}>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-clay">
                <Eye className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  7. No Analytics or Tracking
                </h2>
                <p className="text-text-secondary mb-4 text-base leading-relaxed">
                  Vocolens does not include any third-party advertising or crash-reporting SDKs. The app includes Expo's built-in telemetry module (expo-insights) which may collect anonymous, aggregate usage statistics for platform stability purposes — no personal data is included. We do not track:
                </p>

                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>How you use the app (screens viewed, buttons tapped)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>How often you open the app</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Your device identifiers or advertising IDs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Your location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Any behavioural or demographic data</span>
                  </li>
                </ul>

                <p className="text-text-secondary mt-4 text-base leading-relaxed">
                  All usage statistics visible in the app (streaks, entry counts, mood trends) are computed locally from your on-device data.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.7}>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-clay">
                <Shield className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  8. Security
                </h2>
                <p className="text-text-secondary mb-4 text-base leading-relaxed">
                  We take reasonable measures to protect your data:
                </p>

                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Your PIN is hashed using SHA-256 with a unique device-specific salt before storage. The salt is generated once per installation and stored in your device's secure hardware keystore (iOS Keychain / Android Keystore). The raw PIN is never stored or transmitted.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Biometric authentication (fingerprint / Face ID) is handled by your device's secure hardware — Vocolens only stores an enabled/disabled flag locally.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>All network communications use HTTPS / TLS encryption. Cleartext (unencrypted) traffic is disabled at the platform level.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Our backend API requires authenticated requests — only the Vocolens app can access transcription and analysis endpoints.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Our analysis backend does not log or retain transcript data after analysis is returned.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>We do not operate a user account database — there is no centralised store of your information to breach.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.8}>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-clay">
                <FileText className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  9. Your Rights & Controls
                </h2>
                <p className="text-text-secondary mb-4 text-base leading-relaxed">
                  You have full control over your data at all times:
                </p>

                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-bold text-text-primary">Export</span> — Download all your journal entries, statistics, and achievements as a JSON file via Settings → Privacy Settings → Export Data.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-bold text-text-primary">Delete Entries</span> — Permanently delete all journal entries and reset statistics (Settings → Privacy Settings → Delete All Entries).
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-bold text-text-primary">Delete Account</span> — Erase all data, settings, PIN, and app state, returning the app to its initial state (Settings → Privacy Settings → Delete Account).
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-bold text-text-primary">Notifications</span> — Disable reminders at any time in Settings.
                    </div>
                  </li>
                </ul>

                <div className="mt-6 bg-gradient-to-br from-primary/5 to-transparent rounded-lg p-4 border border-primary/10">
                  <h4 className="font-bold text-text-primary mb-2">External Data Deletion Request</h4>
                  <p className="text-text-secondary text-base leading-relaxed">
                    If you have already uninstalled Vocolens and cannot access the in-app deletion options, you can request data deletion by contacting us at{' '}
                    <a href="mailto:connect@vocolens.com" className="text-primary hover:underline font-medium">connect@vocolens.com</a>.
                    Because all journal data is stored locally on your device, uninstalling the app automatically removes all local data. If you believe any data was transmitted to a third-party service (Deepgram, OpenAI) during normal use, we can confirm that no data is permanently retained by those services on your behalf.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={0.9}>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-clay">
                <Users className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  10. Children's Privacy
                </h2>
                <p className="text-text-secondary mb-3 text-base leading-relaxed">
                  Vocolens is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child under 13 has used the app and their data has been transmitted to a third-party service, please contact us at{' '}
                  <a href="mailto:connect@vocolens.com" className="text-primary hover:underline font-medium">
                    connect@vocolens.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={1.0}>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E9DFFE] flex items-center justify-center flex-shrink-0 shadow-clay">
                <AlertCircle className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  11. Changes to This Policy
                </h2>
                <p className="text-text-secondary mb-3 text-base leading-relaxed">
                  We may update this Privacy Policy from time to time. When we do, we will update the effective date at the top of this document. Continued use of the app after changes constitutes acceptance of the revised policy.
                </p>
                <p className="text-text-secondary text-base leading-relaxed">
                  For significant changes that affect how your data is handled, we will notify you through an in-app prompt.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={1.1}>
          <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-2xl p-6 border border-primary/20">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Contact Us</h2>
            <p className="text-text-secondary mb-3 text-base leading-relaxed">
              If you have questions about this Privacy Policy or how your data is handled, please contact us at:
            </p>
            <p className="text-text-secondary font-medium text-base leading-relaxed">
              <a href="mailto:connect@vocolens.com" className="text-primary hover:underline">
                connect@vocolens.com
              </a>
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
