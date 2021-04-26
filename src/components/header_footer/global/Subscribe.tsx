const Subscribe = () => {
  return (
    <form className="md:flex md:flex-row md:justify-between">
      <input
        type="email"
        placeholder="Email address"
        className="w-full text-black mb-3 h-10 md:w-60 rounded pl-2.5 md:mr-4"
      />
      <button
        type="submit"
        className="btn btn--blue capitalize w-full mb-10 h-10 rounded md:w-28 md:mb-0"
      >
        subscribe
      </button>
    </form>
  );
};

export default Subscribe;
