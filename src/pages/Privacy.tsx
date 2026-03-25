import LegalPage from "./LegalPage";
import privacyMarkdown from "@/content/privacy-policy.md?raw";

const Privacy = () => <LegalPage title="Privacy Policy" markdown={privacyMarkdown} />;

export default Privacy;
