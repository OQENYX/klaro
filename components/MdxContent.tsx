import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import StatBlock from "./StatBlock";
import MythDebunk from "./MythDebunk";
import DataTable from "./DataTable";
import CategoryBadge from "./CategoryBadge";

const components = {
  StatBlock,
  MythDebunk,
  DataTable,
  CategoryBadge,
  table: (props: React.ComponentProps<"table">) => (
    <div className="table-wrapper">
      <table {...props} />
    </div>
  ),
};

interface MdxContentProps {
  source: string;
}

export default function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose mx-auto max-w-[680px]">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </div>
  );
}
