import LegalPage from "./LegalPage";
import termsMarkdown from "@/content/terms-of-service.md?raw";

const Terms = () => <LegalPage title="Terms of Service" markdown={termsMarkdown} />;

export default Terms;
