import { useParams } from "react-router-dom";
import { Component } from "react";

// const Details = () => {
//   const { id } = useParams();
//   return <h1>My details for pet {id}</h1>;
// };

//you cannot use hooks with class components
//anything that starts with use cannot be used in a class component

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();

    //class components have a function called setState
    //we can set component loading state to false and then set the response object
    //   this.setState({
    // 	  loading: false
    //   })
    //   this.setState(json.pets[0])
    //or we can do it all in one line of code with object.assign
    this.setState(Object.assign({ loading: false }, json.pets[0]));
    //or the spread operator
    //this.setState({ loading: false, ...json.pets[0] });
  }

  render() {
    const { name, animal, breed, city, state, description, loading } =
      this.state;
    if (loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city} - {state}
          </h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  return <Details params={params} />;
};

export default WrappedDetails;
