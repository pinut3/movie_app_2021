import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // () => {}  ===  function() {}
  // async function을 쓰면 await 를 이용해서 해당 동작이 완료될 때까지 기다리게 할 수 있음.
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(movies);
    this.setState({ movies, isLoading: false }); //state movies에 getMovies의 movies 값 넣기 == this.setState({movies:movies})
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    // { isLoading} 은 this.state object 안의 isLoading 값을 받아오겠다고 명시한 것.
    const { isLoading, movies } = this.state;
    return (
      // JSX에서 HTML 문법인 class="" 를 쓰면 다른 class로 오해할 수 있기 때문에 className을 써줘야 함.
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                poster={movie.medium_cover_image}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
