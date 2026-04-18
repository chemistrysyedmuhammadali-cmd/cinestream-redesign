import DocPage from "@/components/site/DocPage";

export default function DMCA() {
  return (
    <DocPage
      title="DMCA"
      intro="At FreeCine, we respect intellectual property rights and fully comply with the Digital Millennium Copyright Act (DMCA). If you believe your copyrighted work has been used on our platform without permission, you can submit a DMCA takedown notice."
    >
      <h2>How to submit a DMCA takedown notice</h2>
      <p>To file a DMCA notice, please provide the following information:</p>
      <ul>
        <li>A detailed description of the copyrighted work you believe has been infringed.</li>
        <li>The exact URL(s) on FreeCine where the infringing content appears.</li>
        <li>Your contact details, including full name, email address and phone number.</li>
        <li>A statement affirming, in good faith, that the content is used without your permission.</li>
        <li>A declaration, under penalty of perjury, that the information you provide is accurate.</li>
      </ul>

      <h2>How to submit a counter-notice</h2>
      <p>If you believe your content was mistakenly removed or misidentified, you can submit a counter-notice. Please include:</p>
      <ul>
        <li>A description of the content that was removed and its location before removal.</li>
        <li>Your contact information.</li>
        <li>A statement affirming, in good faith, that the removal was an error.</li>
      </ul>
    </DocPage>
  );
}
