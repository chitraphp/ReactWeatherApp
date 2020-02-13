import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit="">
        <input type="text" placeholder="City" name="city">
          {" "}
          Enter City
        </input>
        <input type="text" placeholder="Country" name="country">
          {" "}
          Enter Country
        </input>
      </form>
    );
  }
}
