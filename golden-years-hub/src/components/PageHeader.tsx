interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="py-16 lg:py-20">
      <h1 className="font-display font-bold text-display-lg lg:text-display-xl text-foreground mb-2">
        <span className="border-b-4 border-primary pb-2">{title}</span>
      </h1>
      <p className="text-muted-foreground text-body-lg mt-6 max-w-2xl">{description}</p>
    </div>
  );
}
