import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return <h1>My details for pet {id}</h1>;
};

export default Details;
