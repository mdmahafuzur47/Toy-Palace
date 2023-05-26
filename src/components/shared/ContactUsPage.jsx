
const ContactUsPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <div className="max-w-3xl mx-auto bg-white p-6 shadow-md rounded-lg">
          <div >
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:border-indigo-500"
                name="message"
                id="message"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline" type="submit">
                Send Message
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
