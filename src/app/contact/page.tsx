"use client";
export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-40 lg:pt-10">
      <article className="w-[600px] grid gap-4  grid-cols-1 text-justify">
        <header className="pb-5 text-center">
          <h1 className="text-4xl text-red-700 font-bold">
            Contact Fc Dragons{" "}
          </h1>
          <h4 className="text-sm lg:pt-2 lg:text-xl">
            Schedules and services about Fc dragons
          </h4>
        </header>
        <div className="text-justify w-[30rem]  break-words pl-32 text-sm ">
          <span className="text-amber-400 font-bold">FCD OFFICES</span>
          <div className="pt-3">Phone number: 000000 </div>
          <div>
            Phone attention available: From Monday to Friday from 9am to 8pm,
          </div>
          <div>Saturdays from 10am to 2pm</div>
          <div className="pt-7 pb-2  font-bold text-amber-400">
            TICKET OFFICE
          </div>
          <div>
            Summer timetable: (from June 1 to August 15). Opening hours on match
            days: Midweek football matches at the Dragons from 9am until half
            time
          </div>
        </div>
      </article>
    </main>
  );
}
