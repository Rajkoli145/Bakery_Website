import { StarIcon } from '@heroicons/react/20/solid';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={testimonial.avatar}
          alt={testimonial.name}
        />
        <div className="ml-4">
          <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-5 w-5 ${
                  i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">{testimonial.comment}</p>
    </div>
  );
};

export default TestimonialCard;
