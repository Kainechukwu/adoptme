import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true, redirect: false };
  }

  //all componentDidCatch is doing right now is reporting
  componentDidCatch(error, info) {
    console.error(error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          Error. <Link to="/">Click here</Link> to return to home page. Or wait
          5 seconds and we will redirect automatically.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
