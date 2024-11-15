import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { customerReviews } from "../../data/Text/Reviews";

const CarouselReviewComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviewsPerSlide = 6; // Number of reviews per slide
  const totalSlides = Math.ceil(customerReviews.length / reviewsPerSlide); // Calculate total number of slides
  const reviews = [...customerReviews]; // Assuming customerReviews is an array with review data

  const chunkedReviews = Array.from({ length: totalSlides }, (_, index) => {
    return reviews.slice(
      index * reviewsPerSlide,
      (index + 1) * reviewsPerSlide
    );
  });

  // Automatically advance the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000); // Change slide every 3 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="pb-10 z-[0] bg-[#003F63] relative w-full overflow-hidden h-fit">
        <div className="py-3 text-center text-yellow-500 font-sans font-bold text-3xl md:text-4xl">
            Reviews from our Clients
        </div>
      <motion.div
        key={currentIndex}
        className="flex transition-transform ease-out"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="w-full">
          {/* Display 6 reviews per slide */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4 p-4">
            {chunkedReviews[currentIndex].map((review, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-lg">
                <div className="text-lg font-semibold">
                  {review.customerName}
                </div>
                <div className="text-sm text-gray-600">{review.date}</div>
                <div className="mt-2">{review.reviewText}</div>
                <div className="mt-2">
                  <span className="font-bold">Stars:</span>{" "}
                  {Array.from({ length: review.stars }, (_, i) => (
                    <span key={i} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalSlides }, (_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
              currentIndex === index
                ? "bg-yellow-500" // Yellow for active dot
                : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselReviewComponent;
