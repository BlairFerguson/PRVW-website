import Layout from "@/components/Layout";
import LegalDocument from "@/components/LegalDocument";
import termsMarkdown from "../../PRVW-Terms-of-Service.md?raw";

const Terms = () => {
  return (
    <Layout>
      <LegalDocument eyebrow="Legal" title="Terms of Service" markdown={termsMarkdown} />
    </Layout>
  );
};

export default Terms;
