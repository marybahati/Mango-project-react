import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
import * as legoData from "./legoloading.json";
import * as doneData from "./doneloading.json";
import Home from "./components/Home.js";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: doneData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          this.setState({ loading: true });
          setTimeout(() => {
            this.setState({ done: true });
          }, 1000);
        });
    }, 1200);
  }

  render() {
    return (
      <div className="splash">
        {!this.state.done ? (
          <FadeIn className='fade'>
            <div className="d-flex justify-content-center align-items-center">
              {!this.state.loading ? (
                <Lottie options={defaultOptions} height={500} width={500} />
              ) : (
                <Lottie options={defaultOptions2} height={700} width={700} />
              )}
            </div>
          </FadeIn>
        ) : (
          <div><Home/></div>
        )}
      </div>
    );
  }
}