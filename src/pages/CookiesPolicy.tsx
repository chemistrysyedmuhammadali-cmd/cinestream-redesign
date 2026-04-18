import DocPage from "@/components/site/DocPage";

export default function CookiesPolicy() {
  return (
    <DocPage
      title="Cookie Policy"
      intro={<>At <strong>FreeCineApks.cc</strong>, we use cookies and similar technologies to enhance your browsing experience, personalize content, analyze site traffic and show relevant ads. This policy explains what cookies are, how we use them, and how you can manage your preferences.</>}
    >
      <h2>What are cookies?</h2>
      <p>Cookies are small text files stored on your device (computer, tablet or smartphone) when you visit a website. They help websites remember your preferences, login status and usage behavior over time.</p>

      <h2>Types of cookies we use</h2>
      <h3>1. Essential Cookies</h3>
      <p>These cookies are necessary for the website to function correctly. They enable features like secure login, page navigation and access to certain areas of the site.</p>
      <h3>2. Performance & Analytics Cookies</h3>
      <p>These cookies collect anonymous data about how visitors use our site — such as which pages are most viewed — helping us improve website performance and user experience.</p>
      <h3>3. Functional Cookies</h3>
      <p>These remember your preferences and settings, like language or region, to provide a more personalized and seamless experience.</p>
      <h3>4. Advertising Cookies</h3>
      <p>We may use these cookies to deliver ads based on your interests, limit how often ads appear and measure the performance of advertising campaigns.</p>

      <h2>Third-party cookies</h2>
      <p>We may allow trusted third-party services (such as Google Analytics or advertising networks) to place cookies on your device. These third parties manage their cookies according to their own privacy policies.</p>

      <h2>Managing your cookie preferences</h2>
      <p>You can manage or disable cookies through your browser settings. Keep in mind that blocking certain cookies may affect how the website functions.</p>
      <h3>Here's how to manage cookies in popular browsers:</h3>
      <ul>
        <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
        <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
        <li><strong>Safari (Mac):</strong> Preferences → Privacy</li>
        <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions</li>
      </ul>
    </DocPage>
  );
}
