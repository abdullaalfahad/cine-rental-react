import star from "../assets/star.svg";

export default function Rating({ rating }) {
  return (
    <div className="flex items-center space-x-1 mb-5">
      {[...Array(rating)].map((_, index) => (
        <img key={index} src={star} width="14" height="14" alt="star" />
      ))}
    </div>
  );
}
