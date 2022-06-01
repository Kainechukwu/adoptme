import { useParams } from "react-router-dom";
import { Component } from "react";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

// const Details = () => {
//   const { id } = useParams();
//   return <h1>My details for pet {id}</h1>;
// };

//you cannot use hooks with class components
//anything that starts with use cannot be used in a class component

class Details extends Component {
  //with babel we do not need constructor. We can just access state directly
  //   constructor(props) {
  //     super(props);

  //     this.state = { loading: true };

  //   }

  state = { loading: true, showModal: false };

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

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const {
      name,
      animal,
      breed,
      city,
      state,
      description,
      loading,
      images,
      showModal,
    } = this.state;
    if (loading) {
      return <h1>Loading...</h1>;
    }

    // throw new Error("App crashed");

    return (
      <div className="px-6 sm:px-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                className="shadow-lg rounded-md bg-gradient-to-tr from-gray-900  to-gray-500 px-2 py-1 text-white"
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <a href="https://bit.ly/pet-adopt">Yes</a>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  return (
    <ErrorBoundary>
      <Details params={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;
