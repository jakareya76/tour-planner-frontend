const NewsLetter = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="flex flex-col items-center gap-10 shadow-lg md:flex-row rounded-xl">
        <img
          src={`https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
          alt="img"
          className="w-full md:w-1/2 h-[350px] rounded-l-xl"
        />
        <div className="flex flex-col items-center justify-center pb-5 md:items-start md:justify-start">
          <h2 className="text-2xl font-bold text-center md:text-left">
            Get special offers, and more <br /> from TourPlanner
          </h2>
          <p className="my-2 text-center md:text-left">
            Subscribe to see secret deals prices drop the moment you sign up!
          </p>
          <div className="mt-4 join">
            <input
              className="input input-bordered join-item"
              placeholder="Email"
            />
            <button className="rounded btn btn-primary join-item">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 mt-20 md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src="https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="faq"
            className="rounded"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="my-4 collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="text-xl font-medium collapse-title">
              How do I create a tour plan on Tour Planner?
            </div>
            <div className="collapse-content">
              <p>
                To create a tour plan on Tour Planner, simply sign up or log in
                to your account. Once logged in, navigate to the "add tourists
                spot" page where you can input details such as destination,
                dates, activities, and any additional notes. After filling out
                the necessary information, click on the "add tourists spot"
                button to save your plan.
              </p>
            </div>
          </div>
          <div className="my-4 collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="text-xl font-medium collapse-title">
              Can I edit or delete a tour plan after creating it?
            </div>
            <div className="collapse-content">
              <p>
                Yes, you have full control over your tour plans. After creating
                a tour plan, you can easily edit or delete it according to your
                preferences. Simply locate the tour plan you wish to modify in
                your account dashboard, then select the "Edit" or "Delete"
                option. Make your desired changes and save them to update your
                tour plan.
              </p>
            </div>
          </div>
          <div className="my-4 collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="text-xl font-medium collapse-title">
              How can I explore tour plans created by other users?
            </div>
            <div className="collapse-content">
              <p>
                Tour Planner allows you to discover tour plans created by fellow
                travelers. To explore these plans, navigate to the "Discover
                Tours" section on the website. Here, you'll find a variety of
                tour plans sorted by destination, popularity, and other filters.
                Click on any tour plan to view its details, itinerary, and user
                reviews.
              </p>
            </div>
          </div>
          <div className="my-4 collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="text-xl font-medium collapse-title">
              Is it possible to interact with other users regarding their tour
              plans?
            </div>
            <div className="collapse-content">
              <p>
                Yes, Tour Planner fosters a community of travelers who can
                interact and share insights about their tour plans. You can
                leave comments, ask questions, or offer suggestions on other
                users' tour plans. Simply navigate to the tour plan you're
                interested in and use the comment section to engage with the
                creator and other users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
