"use client";
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

import { Input } from "./ui/input";
import { MovingButton } from "./ui/movingBorderButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { BackgroundBeams } from "./ui/background-beams";

const formSchema = z.object({
  firstname: z.string().min(1, { message: "First name is required" }),
  lastname: z.string().min(1, { message: "Last name is required" }),
  org: z.string().optional(),
  email: z.string().email({ message: "Invalid email format" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export function ContactForm() {
  // const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [exitCompleted, setExitCompleted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      org: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const emailBody = `
      <p><strong>From:</strong> ${values.firstname} ${values.lastname}</p>
      <p><strong>Email:</strong> ${values.email}</p>
      <p><strong>Company:</strong> ${values.org}</p>
      <p><strong>Message:</strong> ${values.message}</p>
    `;

    try {
      setIsSubmitting(true);
      const response = await axios.post("/api/send-email", {
        from: `${values.firstname} ${values.lastname} <onboarding@resend.dev>`, // Adjust as needed
        to: "carlos@digitalpotential.se",
        subject: "Portfolio Contact Form Submission",
        html: emailBody,
      });
      setShowSuccessMessage(true);
      setIsSubmitting(false);
      console.log(response.data);
      // Handle success, e.g., show a success message
    } catch (error) {
      console.error("Error:", error);
      setIsSubmitting(false);
      // Handle error, e.g., show an error message
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, transition: { duration: 1 } },
    visible: { opacity: 1, transition: { duration: 1.5 } },
    exit: {
      opacity: 0,
      y: 1000,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const successMessageVariants = {
    hidden: { opacity: 0, y: 200, transition: { duration: 1 }, delay: 1 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  const handleExitComplete = () => {
    if (showSuccessMessage) {
      setExitCompleted(true); // Update state once exit animation is complete
    }
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!showSuccessMessage && (
        <motion.div
          key="form"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={formVariants}
          onSubmit={form.handleSubmit(onSubmit)}
          className="form-class"
        >
          <Form {...form}>
            <div className="max-w-[500px] w-full h-[75vh] xs:h-[60vh] xl:h-[70vh] mx-auto rounded-none md:rounded-2xl px-4 pt-4 pb-0 md:p-8 bg-bodyColor">
              <h2 className="font-bold text-xl text-neutral-200">
                Ready to get started?
              </h2>
              <p className="text-sm max-w-sm mt-2 text-neutral-300">
                Please fill out the form to see a beautiful success message.
              </p>
              <form className="mt-8" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 justify-between">
                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <LabelInputContainer>
                            <Label
                              htmlFor="firstname"
                              className="xxxs:hidden xxs:block"
                            >
                              First name
                            </Label>
                            <Input
                              className="w-full"
                              id="firstname"
                              placeholder="Tyler"
                              type="text"
                              {...field}
                            />
                          </LabelInputContainer>
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <LabelInputContainer>
                            <Label
                              htmlFor="lastname"
                              className="xxxs:hidden xxs:block"
                            >
                              Last name
                            </Label>
                            <Input
                              id="lastname"
                              placeholder="Durden"
                              type="text"
                              {...field}
                            />
                          </LabelInputContainer>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="org"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="xxxs:hidden xxs:block">
                        Company Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="org"
                          placeholder="Company with Smart recruiters!"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="xxxs:hidden xxs:block">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="contact@email.com"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="xxxs:hidden xxs:block">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          placeholder="We would love for you to work with us!"
                          className="resize-x h-20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex xl:flex-col items-center justify-center gap-5 xl:gap-0 pt-5">
                  <MovingButton
                    borderRadius="0.5rem"
                    className="bg-bodyColor text-white border-slate-600 px-4"
                    type="submit"
                  >
                    {isSubmitting ? "Submitting..." : "Send Message! →"}
                  </MovingButton>
                  <div className="hidden xl:flex bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-3 h-[1px] w-full" />
                  <button className="flex h-10 w-42 xl:w-44 items-center justify-center rounded-md border border-slate-600 bg-[linear-gradient(110deg,#163A40,45%,#64FFDA,55%,#163A40)] bg-[length:200%_100%] px-3 font-medium text-white transition-colors animate-shimmer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-bodyColor">
                    <a href="mailto:carlos@digitalpotential.se">
                      Contact by email
                    </a>
                  </button>
                </div>
              </form>
            </div>
          </Form>
        </motion.div>
      )}
      {exitCompleted && (
        <motion.div
          key="successMessage"
          initial="hidden"
          animate="visible"
          variants={successMessageVariants}
        >
          <>
            <SuccessMessage />
            <BackgroundBeams />
          </>
        </motion.div>
      )}
    </AnimatePresence>
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

const SuccessMessage = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    <div className="h-[80vh] xl:h-[70vh] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-2xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-textGreen to-bodyColor  text-center font-sans font-bold">
          Thank you for reaching out!
        </h1>
        <p></p>
        <p className="text-textDark max-w-[290px] xs:max-w-[650px] mx-auto my-2 text-sm text-center relative z-10">
          Your decision to consider my services is one I take seriously.
          I&apos;m committed to delivering excellence and innovation in every
          project. You can rest assured that my performance as a developer will
          not just meet, but exceed your expectations. Let&apos;s create
          something remarkable together!
        </p>
      </div>
    </div>
  </motion.div>
);
