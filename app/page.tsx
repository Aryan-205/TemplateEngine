import { WeddingEngine } from "@/utils/TemplateEngine2";
import { weddingTemplates } from "@/utils/siteConfig";

export default function Home() {
  return (
    <WeddingEngine data={weddingTemplates.classicOrange} editable={true} />
  );
}
