type CardTitleProps = {
  title: string;
};

export default function CardTitle({ title }: CardTitleProps) {
  return <h2 className="font-bold text-lg capitalize mb-2">{title}</h2>;
}
