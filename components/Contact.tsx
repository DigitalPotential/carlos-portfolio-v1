import React from "react";
import Button3D from "./3DButton/Button3D";

const Contact = () => {
    return (
        <section
            id="contact"
            className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
        >
            <p className="font-unbounded text-lg text-textGreen font-semibold flex items-center tracking-wide">
                {`04. What's Next?`}
            </p>
            <h2 className="font-unbounded text-white text-3xl xs:text-5xl font-semibold">
                Get In Touch
            </h2>
            <p className="max-w-[600px] text-center text-textDark">
            If you are interested in hiring me, please feel free to contact me via email or on <span className="text-textGreen"><a href="https://www.linkedin.com/in/carlos-digital-potential/">LinkedIn</a></span>. I look forward to hearing from you and discussing how I can assist you.
            </p>
            <a className="w-full mt-5 flex items-center justify-center" href="mailto:carlos@digitalpotential.se">
              <Button3D />
            </a>
        </section>
    );
};

export default Contact;
