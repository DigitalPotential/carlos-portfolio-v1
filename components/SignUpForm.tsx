"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { MovingButton } from "./ui/movingBorderButton";
import axios from "axios";

export function SignupForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    org: "",
    email: "",
    message: "",
  });

  // Update form state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailBody = `
    <p><strong>From:</strong> ${formData.firstname} ${formData.lastname}</p>
    <p><strong>Company:</strong> ${formData.org}</p>
    <p><strong>Message:</strong> ${formData.message}</p>
  `;

    try {
      const response = await axios.post("/api/send-email", {
        from: "Carlos Portfolio <onboarding@resend.dev>",
        to: "carlos@digitalpotential.se",
        subject: "Portfolio Contact Form Submission",
        html: emailBody,
      });

      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-[500px] w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 bg-bodyColor">
      <h2 className="font-bold text-xl text-neutral-200">
        Ready to get started?
      </h2>
      <p className="text-sm max-w-sm mt-2 text-neutral-300">
        Please fill out the form
      </p>

      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              onChange={handleChange}
              value={formData.firstname}
              id="firstname"
              placeholder="Tyler"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              onChange={handleChange}
              value={formData.lastname}
              id="lastname"
              placeholder="Durden"
              type="text"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label>Company</Label>
          <Input
            onChange={handleChange}
            value={formData.org}
            id="org"
            placeholder="Smart company"
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            onChange={handleChange}
            value={formData.email}
            id="email"
            placeholder="Contact@email.com"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label>Message</Label>
          <Input
            onChange={handleChange}
            value={formData.message}
            id="message"
            placeholder="We would love for you to work with us!"
            type="text"
            className="resize-x"
          />
        </LabelInputContainer>

        <div className="flex flex-col items-center justify-center pt-5">
          <MovingButton
            borderRadius="0.5rem"
            className="bg-bodyColor text-white border-slate-600 px-4"
            type="submit"
          >
            Send Message! &rarr;
          </MovingButton>
          <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-6 h-[1px] w-full" />
          <button className="flex h-12 w-48 items-center justify-center rounded-md border border-slate-600 bg-[linear-gradient(110deg,#163A40,45%,#64FFDA,55%,#163A40)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors animate-shimmer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-bodyColor">
            Contact by email
          </button>
        </div>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
