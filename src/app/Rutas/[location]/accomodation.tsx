import getAccomodationIcon from "../../utils/returnIcons";

export default function GetAccommodation({
  accommodation,
}: {
  accommodation: string;
}) {
  const activities = accommodation
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  return (
    <>
      
        
        <div className="flex flex-col justify-center items-center">
          {activities.map((acc, idx) => (
            <div
              key={idx}
              className="accContent flex flex-row gap-2 p-4 justify-center items-center"
            >
              {getAccomodationIcon(acc)}
              <span className="text-[#471919]">{acc}</span>
            </div>
          ))}
        </div>
    </>
  );
}
