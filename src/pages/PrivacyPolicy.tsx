import DocPage from "@/components/site/DocPage";

export default function PrivacyPolicy() {
  return (
    <DocPage
      title="Privacy Policy"
      intro="Welcome to FreeCine. We value your privacy. This policy explains what data we collect, how we use it, and what choices you have."
    >
      <h2>1. Information we collect</h2>
      <ul>
        <li><strong>Information you give us:</strong> if you contact us (for support or feedback) we may collect your name and email address.</li>
        <li><strong>Automatic data:</strong> we collect technical data automatically when you visit the site or use the app — device type, operating system, IP address, pages you view and usage patterns.</li>
        <li><strong>Cookies and similar tools:</strong> we use cookies and small files to improve the site and measure usage.</li>
      </ul>

      <h2>2. How we use your information</h2>
      <ul>
        <li>Provide and improve the website and app.</li>
        <li>Respond to your messages and requests.</li>
        <li>Monitor and analyze usage to fix bugs and improve performance.</li>
        <li>Show non-intrusive ads or analytics (if enabled).</li>
      </ul>

      <h2>3. Sharing and third parties</h2>
      <ul>
        <li>We do not sell your personal data.</li>
        <li>We may share data with service providers who help us run the site (hosting, analytics, email). These providers only get the data they need to do their job.</li>
        <li>The site may link to third-party services (ad networks, social media, video hosts). We do not control their privacy rules — please read their policies.</li>
      </ul>

      <h2>4. Ads and analytics</h2>
      <p>We may use third-party tools to show ads or collect analytics. These tools may use cookies to collect anonymous data. You can opt out of some analytics and advertising tools as described below.</p>

      <h2>5. Data security</h2>
      <p>We use reasonable technical measures to protect your data. No system is 100% secure, so we cannot guarantee absolute security.</p>

      <h2>6. Data retention</h2>
      <p>We keep personal data only as long as needed to provide services, meet legal needs or fix problems. If you ask us to delete your data, we will do so when possible.</p>

      <h2>7. Children</h2>
      <p>We do not knowingly collect personal data from children under 13 (or local age of consent). If we learn we collected data from a child without consent, we will delete it.</p>

      <h2>8. Your rights and choices</h2>
      <ul>
        <li>You can contact us to access, correct or delete your personal data.</li>
        <li>You can disable cookies in your browser (this may affect some site features).</li>
        <li>You can opt out of some tracking by using your device settings or browser extensions.</li>
      </ul>

      <h2>9. Legal and compliance notes</h2>
      <p>Using our app to stream or download copyrighted content may have legal risks depending on your country. We do not provide legal advice. You are responsible for how you use the app.</p>

      <h2>10. Changes to this policy</h2>
      <p>We may update this policy. We will post the new version and update the effective date. Please check this page regularly.</p>

      <h2>11. Contact us</h2>
      <p>If you have questions or want to exercise your privacy rights, please reach out via our <a href="/contact-us">contact page</a>.</p>
    </DocPage>
  );
}
