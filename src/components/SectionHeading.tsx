interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  // Split title to color last word with gradient
  const words = title.split(" ");
  const lastWord = words.pop();
  const firstWords = words.join(" ");

  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        {firstWords && <span className="text-foreground">{firstWords} </span>}
        <span className="gradient-text">{lastWord}</span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-base max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
