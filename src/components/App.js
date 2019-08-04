import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 100 }
    });

    this.setState({ images: response.data.results });

    // axios
    //   .get("https://api.unsplash.com/search/photos", {
    //     params: { query: term },
    //     headers: {
    //       Authorization:
    //         "Client-ID 0a2eb4e521b636088b1f44ab7291fac3ab76f6d72dbecf67abd2bd9c35bc6161"
    //     }
    //   })
    //   .then(response => {
    //     console.log(response.data.results);
    //   });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
