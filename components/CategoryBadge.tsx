import { getCategoryByName } from "@/lib/categories";

interface CategoryBadgeProps {
  category: string;
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const cat = getCategoryByName(category);
  const bgColor = cat?.bgColor ?? "#F5F5F3";
  const textColor = cat?.textColor ?? "#424242";

  return (
    <span
      className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {category}
    </span>
  );
}
