interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="pt-28 pb-10 md:pt-32 md:pb-14 lg:pt-36 lg:pb-16 mb-2 md:mb-4 lg:mb-6">
      <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-display-lg xl:text-display-xl text-foreground mb-4 md:mb-6">
        {title}
      </h1>
      <p className="text-muted-foreground text-base md:text-lg lg:text-body-lg mt-6 md:mt-8 max-w-3xl leading-relaxed">{description}</p>
    </div>
  );
}
