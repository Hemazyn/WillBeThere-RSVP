import { EventCard } from "../components/Cards";

const Browse = () => {
  const items = [{id: 1}, {id:2}, {id:3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}]
  return (
    <div className="container mx-auto flex flex-wrap justify-around">
      {items.map(item => <EventCard key={item.id} />)}
    </div>
  );
};


export default Browse;
