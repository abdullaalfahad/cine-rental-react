import { getImgUrl } from "../utils/cine-utils";
import tag from "../assets/tag.svg";
import Rating from "./Rating";
import { useState } from "react";
import MovieDetailsModal from "./MovieDetailsModal";
import { useContext } from "react";
import { MovieContext } from "../context";
import { toast } from "react-toastify";

export default function MovieCard({ movie }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { cart, dispatch } = useContext(MovieContext);

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  const handleAddToCart = (e, movie) => {
    e.stopPropagation();

    const existingItem = cart.find((item) => item.id === movie.id);

    if (!existingItem) {
      dispatch({ type: "ADD_TO_CART", payload: movie });
      toast.success("Movie added to cart");
    } else {
      toast.error("Movie is already in the cart");
    }
  };

  return (
    <>
      {isModalOpen && selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onAddToCart={handleAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <Rating rating={movie.rating} />
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src={tag} alt="" />
              <span>{movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
