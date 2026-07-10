import MarkdownRenderer from "./MarkdownRenderer";
import { companyPages } from "../data/company";

interface Props {
  page: keyof typeof companyPages;
}

export default function CompanyPage({ page }: Props) {
  const data = companyPages[page];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-primary dark:text-[#CBA135]">
        {data.title}
      </h1>

      <MarkdownRenderer content={data.content} />
    </div>
  );
}