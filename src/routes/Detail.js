import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      //클릭이 아니라 주소로 들어올경우 홈으로 백//
      history.push("/");
    }
  }
  render() {
    const {
      location: { state },
    } = this.props;

    console.log(state);
    if (state) {
      return (
        <div className="movie__detail">
          <img src={state.poster} alt={state.title} title={state.title} />
          <span>{state.title}</span>
          <p>{state.summary}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
