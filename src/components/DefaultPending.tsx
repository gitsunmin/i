const Spinner: React.FC<{ size?: number; color?: string }> = ({
  size = 40,
  color = 'text-gray-500',
}) => {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className={`absolute w-[8%] h-[30%] bg-current rounded-full ${color} animate-fade`}
          style={{
            transform: `rotate(${i * 30}deg) translateY(-50%)`,
            transformOrigin: '50% 100%',
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};

export const DefaultPending = () => {
  return (
    <main className="flex justify-center items-center h-[100dvh] w-[100dvw]">
      <Spinner />
    </main>
  );
};
