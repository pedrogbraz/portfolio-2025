type Day = {
  date: string;
  contributionCount: number;
};

type Props = {
  data: Day[];
};

function getColor(count: number) {
  if (count === 0) return "bg-zinc-800";
  if (count < 3) return "bg-green-900";
  if (count < 6) return "bg-green-700";
  if (count < 10) return "bg-green-500";
  return "bg-green-300";
}

export default function ContributionGrid({ data }: Props) {
  return (
    <div className="overflow-auto">
      <div className="grid grid-cols-52 gap-3">
        {Array.from({ length: 52 }).map((_, weekIdx) => (
          <div key={weekIdx} className="flex flex-col gap-[3px]">
            {Array.from({ length: 7 }).map((_, dayIdx) => {
              const day = data[weekIdx * 7 + dayIdx];
              return (
                <div
                  key={day?.date || `${weekIdx}-${dayIdx}`}
                  title={`${day?.date}: ${
                    day?.contributionCount || 0
                  } contribuições`}
                  className={`w-2 h-2 rounded-[2px] ${getColor(
                    day?.contributionCount || 0
                  )}`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
