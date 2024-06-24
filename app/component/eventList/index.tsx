import getEvents from "@/app/api/events/route";
import { GetServerSideProps } from "next";
import React from "react";

export async function fetchEvents() {
  const eventItems: event[] = await getEvents();

  return eventItems;
}

const formatDate = (date: string) => {

  const fullDate =new Date(date).toDateString() +", "+ new Date(date).toLocaleTimeString() 

  return fullDate;
};

const EventList = async () => {
  const events = await fetchEvents();

  return (
    <div className="grid grid-flow-col auto-cols gap-4 ">
      {events.map((item: event) =>
        item.Dates.map((date: string, index: any) => (
          <div key={index} >
            <div className="col-md-4">
              <img
                src={item.Image}
                className="img-fluid rounded-start"
                alt={item.Type}
              />
            </div>
            <div className="col-md-8 pt-1">
              <h5 className="card-title">{item.Title}</h5>
              <p className="card-text">{item.Description}</p>
              <br />
              <p className="card-text">
                Date and Time:
                <br />
                <small className="text-body-secondary">
                  {formatDate(date)}
                  <br />
                </small>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default EventList;
