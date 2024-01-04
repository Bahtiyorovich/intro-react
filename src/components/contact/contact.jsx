import GoogleMaps from "../google-map/google-map";
import Button from "./../../form-elements/button/button";
import Input from "./../../form-elements/input/input";
import Textarea from "./../../form-elements/textarea/textarea";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Contact = () => {
  return (
    <div className="grid grid-cols-2 h-[100vh] items-start py-20 px-20 gap-8">
      <h1 
        data-aos="fade-up"
        data-aos-duration="2000"
        className="col-[1_/_span_2] text-center text-3xl font-semibold">
        Get In Touch
      </h1>
      <form 
        data-aos="fade-right"
        data-aos-duration="2000"
        className="grid gap-4 px-16">
        <Input
          classes="
            outline-0 ring-inset rounded p-[13px] placeholder:text-slate-600 text-slate-700 shadow-md focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          type="text"
          placeholder="Your Name"
        />
        <Input
          classes="outline-0 ring-inset rounded p-[13px] placeholder:text-slate-600 text-slate-700 shadow-md focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
          type="text"
          placeholder="Phone Number"
        />
        <Input
          classes="outline-0 ring-inset rounded p-[13px] placeholder:text-slate-600 text-slate-700 shadow-md focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
          type="email"
          placeholder="Email Address"
        />
        <Textarea
          cols="30"
          rows="3"
          classes="outline-0 rounded shadow-md p-4 focus:ring-2 focus:ring-inset focus:ring-indigo-600 placeholder:text-slate-600"
          placeholder={"Enter some text"}
        ></Textarea>
        <Button type={"button"} className="rounded bg-green-500 text-white duration-200 hover:bg-green-400 py-4 " children={"SEND"} />
      </form>
      <GoogleMaps/>
    </div>
  );
};

export default Contact;
