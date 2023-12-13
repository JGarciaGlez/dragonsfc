"use client";
export type TicketsCardProps = {
  title: string | undefined;
  description: string | undefined;
  date: string | undefined;
  fulldate: string | undefined;
  destination: string | undefined;
  capacity: string | undefined;
};
export const TicketsCard = ({ ...props }: TicketsCardProps) => {
  const { title, description, date, fulldate, destination, capacity } = props;
  return (
    <main className="max-w-sm w-full lg:max-w-full lg:flex">
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal text-justify">
        <div className="mb-8 pt-10">
          <p className="text-xs text-gray-600">{title}</p>

          <p className="text-xl pt-4 pb-2">{description}</p>
          <p className="text-gray-900 font-bold text-sm mb-2">{date}</p>
          <div className="text-gray-400 text-sm flex  gap-2 items-center pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10ZM5 8h14V6H5v2Zm0 0V6v2Zm7 6q-.425 0-.713-.288T11 13q0-.425.288-.713T12 12q.425 0 .713.288T13 13q0 .425-.288.713T12 14Zm-4 0q-.425 0-.713-.288T7 13q0-.425.288-.713T8 12q.425 0 .713.288T9 13q0 .425-.288.713T8 14Zm8 0q-.425 0-.713-.288T15 13q0-.425.288-.713T16 12q.425 0 .713.288T17 13q0 .425-.288.713T16 14Zm-4 4q-.425 0-.713-.288T11 17q0-.425.288-.713T12 16q.425 0 .713.288T13 17q0 .425-.288.713T12 18Zm-4 0q-.425 0-.713-.288T7 17q0-.425.288-.713T8 16q.425 0 .713.288T9 17q0 .425-.288.713T8 18Zm8 0q-.425 0-.713-.288T15 17q0-.425.288-.713T16 16q.425 0 .713.288T17 17q0 .425-.288.713T16 18Z"
              />
            </svg>
            {fulldate}
          </div>
          <div className="text-gray-400 text-sm flex  gap-2 items-center pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 19.35q3.05-2.8 4.525-5.088T18 10.2q0-2.725-1.738-4.462T12 4Q9.475 4 7.737 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35Zm0 1.975q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762q-.838-1.338-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 1.125-.438 2.363t-1.275 2.575Q17.45 16.475 16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125ZM12 10Zm0 2q.825 0 1.413-.587T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Z"
              />
            </svg>
            {destination}
          </div>
          <div className="text-gray-400 text-sm flex  gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm-1-2.05V18q-.825 0-1.413-.588T9 16v-1l-4.8-4.8q-.075.45-.138.9T4 12q0 3.025 1.988 5.3T11 19.95Zm6.9-2.55q.5-.55.9-1.188t.662-1.325q.263-.687.4-1.412T20 12q0-2.45-1.363-4.475T15 4.6V5q0 .825-.588 1.413T13 7h-2v2q0 .425-.288.713T10 10H8v2h6q.425 0 .713.288T15 13v3h1q.65 0 1.175.388T17.9 17.4Z"
              />
            </svg>
            {capacity}
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-red-700 text-white px-12 py-2 rounded-lg flex justify-between gap-2 items-center hover:bg-red-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M227.19 104.48A16 16 0 0 0 240 88.81V64a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v24.81a16 16 0 0 0 12.81 15.67a24 24 0 0 1 0 47A16 16 0 0 0 16 167.19V192a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-24.81a16 16 0 0 0-12.81-15.67a24 24 0 0 1 0-47ZM32 167.2a40 40 0 0 0 0-78.39V64h56v128H32Zm192 0V192H104V64h120v24.8a40 40 0 0 0 0 78.39Z"
              />
            </svg>
            Buy Tickets
          </button>
        </div>
      </div>
    </main>
  );
};

