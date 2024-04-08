import { faqs } from "../../data/static";

const Faq = () => {
  return (
    <div className="container pb-16 px-6 lg:w-full">
      <div className=" mx-auto  max-w-2/3 pb-4">
        <h5 className="mt-2 text-xl font-semibold tracking-tight text-gray-900  leading-8">
          Frequently asked question about KAYAK?
        </h5>
      </div>
      <div className="flex justify-between items-center flex-wrap w-full">
        {faqs.map((faq) => (
          <div className="mt-4 grid max-w-lg divide-y divide-neutral-200 border-b-default border-b-fill w-full lg:w-1/2">
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-light text-sm">
                  <span> {faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-sm font-light">
                  {faq.answer}
                </p>
              </details>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Faq;
