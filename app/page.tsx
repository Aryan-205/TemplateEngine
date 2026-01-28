import { WeddingEngine } from "@/utils/TemplateEngine2";
import { weddingTemplates } from "@/utils/siteConfig";

export default function Home() {
  return (
    <div>
      <WeddingEngine data={weddingTemplates.royalMidnight} />
      <WeddingEngine data={weddingTemplates.modernMinimal} />
      <WeddingEngine data={weddingTemplates.classicOrange} />
    </div>
  )
}
