import {StarFullIcon} from "@/svg/star-full-icon";
import {StarEmptyIcon} from "@/svg/star-empty-icon";

export const SingleProduct = ({
                                product: {title, image, price, rating, description},
                              }: {
  product: Product;
}) => {
  return (
    <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
      <div className="lg:col-span-3 lg:row-end-1">
        <div className="lg:flex lg:items-start">
          <div className="max-w-xl overflow-hidden rounded-lg">
            <img
              className="aspect-video w-full max-w-full object-cover"
              src={image}
              alt={title}
            />
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
        <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
          {title}
        </h1>

        <div className="mt-5 flex items-center">
          <StarFullIcon/>
          <StarFullIcon/>
          <StarFullIcon/>
          <StarEmptyIcon/>
          <StarEmptyIcon/>
          <p className="ml-2 text-sm font-medium text-gray-500">
            {rating.count} Reviews
          </p>
        </div>

        <p className={'mt-4'}>{description}</p>

        <div
          className="mt-10 flex flex-col items-center justify-between space-y-4 border-b border-t py-4 sm:flex-row sm:space-y-0">
          <div className="flex items-end">
            <h2 className="text-3xl font-bold">{price} zł</h2>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out hover:bg-gray-800 focus:shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3 h-5 w-5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
