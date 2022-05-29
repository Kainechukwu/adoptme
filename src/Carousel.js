import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (e) => {
    this.setState({
      //because index which is being accessed via the e.target.dataset.index is output to the dom as a string
      // we need a unary "+" operator to set the index data type to number
      active: +e.target.dataset.index,
    });
    console.log(this.state.active);
    console.log(+e.target.dataset.index);
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            //eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              className={index === active ? "active" : ""}
              key={photo}
              src={photo}
              alt="animal thumbnail"
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
