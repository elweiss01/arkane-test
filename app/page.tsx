import Image from "next/image";
import EventList from "./component/eventList"

export default async function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      

      <div className="row p-4 text-3xl">
        <h1>
          Seattle Washington Events
        </h1>
      </div>
      
      <div className="row">
      <EventList  />
      </div>

     
    </main>
  );
}
