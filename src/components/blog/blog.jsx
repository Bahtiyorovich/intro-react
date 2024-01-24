import { AboutBanner } from "../../assets";
import Button from "./../../FORM-UI/button/button";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Blog = () => {
  return (
    <div className="h-[100vh] flex flex-col items-start justify-center gap-12">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="w-full text-center"
      >
        <h1 className="text-3xl font-semibold">Blog Post</h1>
        <p className="text-slate-400">
          Passages of Lorem Ipsum available, but the majority have suffered
          alteration
        </p>
      </div>
      <div className="flex items-center justify-center gap-16">
        <div data-aos="fade-right" data-aos-duration="2000" className="w-1/2">
          <h2 className="text-3xl font-semibold">Fresh any</h2>
          <p className="text-slate-400 my-6">
            Variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or
            randomisedvariations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour,
            or randomised
          </p>
          <Button
            type={"text"}
            children={"Read More"}
            className="bg-green-600 text-white rounded px-8 py-4 hover:bg-green-500 duration-300"
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="2000" className="w-1/4">
          <img
            src={AboutBanner}
            alt=""
            className="rounded-3xl w-full h-[70vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
