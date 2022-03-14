import React from 'react';

import config from '../config/index.json';

const Pricing = () => {
  const { pricing } = config;
  const { items, title } = pricing;
  const [firstPlan, secondPlan, thirdPlan, fourthPlan] = items;

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title}
        </h1>
        <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
          ></div>
        </div>
        <div
          className={`flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4`}
        >
          <div
            className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4`}
          >
            <div
              className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
                {firstPlan?.name}
              </div>
              <ul className={`w-full text-center text-sm`}>
                {firstPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4`}
                    key={`${firstPlan.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div>
                <a href="https://buy.stripe.com/cN27ur96e62N8oMaEE"><button className={`honey w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}>
                  Purchase
                </button>
                </a>
              </div>
              <div
                className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
              >
                {firstPlan?.price}
                <span className={`text-base`}> {firstPlan?.priceDetails}</span>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-primary mt-4`}
          >
            <div
              className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
                {secondPlan?.name}
              </div>
              <ul className={`w-full text-center text-sm`}>
                {secondPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4`}
                    key={`${secondPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div>
              <a href="https://buy.stripe.com/9AQ3eb82agHrdJ6dQR"><button className={`honey w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}>
                  Purchase
                </button>
                </a>
              </div>
              <div
                className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
              >
                {secondPlan?.price}
                <span className={`text-base`}> {secondPlan?.priceDetails}</span>
              </div>
              <div>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-primary mt-4`}
          >
            <div
              className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
                {thirdPlan?.name}
              </div>
              <ul className={`w-full text-center text-sm`}>
                {thirdPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4`}
                    key={`${thirdPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div>
              <a href="https://buy.stripe.com/cN2cOL4PYbn78oM8wy"><button className={`honey w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}>
                  Purchase
                </button>
                </a>
              </div>
              <div
                className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
              >
                {thirdPlan?.price}
                <span className={`text-base`}> {thirdPlan?.priceDetails}</span>
              </div>
            </div>
          </div>
        </div>
        <div
            className={`flex flex-col w-4/6 lg:w-1/3 mx-auto rounded-lg bg-background mt-6 shadow-lg z-10`}
          >
            <div
              className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-8 text-3xl font-bold text-center`}>
                {fourthPlan?.name}
              </div>
              <div
                className={`h-1 w-full bg-primary my-0 py-0 rounded-t`}
              ></div>
              <ul className={`w-full text-center text-base font-bold`}>
                {fourthPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4`}
                    key={`${fourthPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div className="dropdown">
                
                <button className="honey w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10">
                  <span className="mr-1">Select a Size</span>
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
              
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="https://buy.stripe.com/4gw01Zeqy0It0WkcMQ">Small</a></li>
                  <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="https://buy.stripe.com/00g01Z82a2QB9sQdQV">Medium</a></li>
                  <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="https://buy.stripe.com/00g8yv5U2gHr20o006">Large</a></li>
                  <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="https://buy.stripe.com/dR6g0X0zIcrb8oM7sz">XL</a></li>
                  <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="https://buy.stripe.com/8wM8yvciqaj3awU6ow">2 XL</a></li>
                  <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="https://buy.stripe.com/dR63ebgyG9eZgVieV3">3 XL</a></li>
                </ul>

              </div>
              
              <div className={`w-full pt-6 text-4xl font-bold text-center`}>
                {fourthPlan?.price}
                <span className={`text-base`}> {fourthPlan?.priceDetails}</span>
                </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Pricing;
