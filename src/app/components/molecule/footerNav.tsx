type FooterNavColumnProps = {
  title: string;
  items: string[];
};

export default function FooterNavColumn({
  title,
  items,
}: FooterNavColumnProps) {
  return (
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
