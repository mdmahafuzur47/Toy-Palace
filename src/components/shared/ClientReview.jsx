import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const ClientReview = () => {
  return (
    <div
      style={{
        background:
          'url("https://img.freepik.com/free-photo/smiley-childrens-book-day-event_23-2148445707.jpg?w=2000")',
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full text-white "
    >
      <div className="bg-gradient-to-r from-[#050505] to-[#00000071] w-full h-full grid md:grid-cols-3 grid-cols-1 items-center p-5 md:p-32 gap-5">
        <div>
          <h1 className="text-4xl mb-3 font-semibold ">What Our Clients Say About Us</h1>
          <p className="text-gray-300 font-medium mb-8">
            We appreciate your kind and honest feedback and invite you to our
            amazing store.
          </p>
          <button className="px-7 py-3 bg-gray-400 font-medium rounded-lg border hover:bg-gray-600 text-xl">About Us</button>
        </div>
        <div data-aos="zoom-in" className="hover:-mt-5 transition-all bg-white text-black p-8 rounded-xl">
          <img
            className="w-8 h-8 mb-5"
            src="https://i.ibb.co/xhhy5DM/quotation-right-mark-318-48433.jpg"
            alt=""
          />
          <p className="text-xl text-gray-500 font-medium">
            Not only do the toys make our children squeal with joy, but the
            sales team is awesome!
          </p>
          <div className=" mt-5 flex items-center gap-5">
            <img
              className="w-20 h-20 rounded-full"
              src="https://i.ibb.co/ZYHJJGP/photo-1438761681033-6461ffad8d80-ixlib-rb-4-0.jpg"
              alt=""
            />
            <div>
              <h3 className="text-xl font-semibold">Mandy Mathers</h3>
              <p className="font-semibold">CEO,Business Co.</p>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" className="hover:-mt-5 transition-all  bg-white text-black p-8 rounded-xl">
          <img
            className="w-8 h-8 mb-5"
            src="https://i.ibb.co/xhhy5DM/quotation-right-mark-318-48433.jpg"
            alt=""
          />
          <p className="text-xl text-gray-500 font-medium">
            Not only do the toys make our children squeal with joy, but the
            sales team is awesome!
          </p>
          <div className=" mt-5 flex items-center gap-5">
            <img
              className="w-20 h-20 rounded-full"
              src="https://i.ibb.co/8BXKH6H/images-q-tbn-ANd9-Gc-QGmr4-TL9v-2oun80-IJqm-UAfl2-DKysn-L6-NA0w-usqp-CAU.jpg"
              alt=""
            />
            <div>
              <h3 className="text-xl font-semibold">Peter Bowman</h3>
              <p className="font-semibold">CEO,Business Co.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
