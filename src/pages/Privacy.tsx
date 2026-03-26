import Layout from "@/components/Layout";
import LegalDocument from "@/components/LegalDocument";
import privacyMarkdown from "../../PRVW-Privacy-Policy.md?raw";

const Privacy = () => {
  return (
    <Layout>
      <LegalDocument eyebrow="Legal" title="Privacy Policy" markdown={privacyMarkdown} />
    </Layout>
  );
};

export default Privacy;
