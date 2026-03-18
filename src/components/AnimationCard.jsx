const AnimationCard = ({ title, description, children }) => {
  return (
    <div className="glass hover-glass-border rounded-2xl overflow-hidden flex flex-col">
      <div className="p-6 flex-1 flex items-center justify-center min-h-52">
        {children}
      </div>
      <div className="border-t border-border/50 px-6 py-4">
        <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  );
};

export default AnimationCard;