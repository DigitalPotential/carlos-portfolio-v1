import { HoverEffectWithArchiveCard } from "./HoverArchiveCards";

export function ArchiveCardsWithHover() {
  return (
    <div className="max-w-5xl mx-auto mdl:px-8">
      <HoverEffectWithArchiveCard items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Ällmora Bygg & Kakel",
    des: "As my first web development client, Ällmora Bygg & Kakel's original site showcased our collaborative success. Five years on, we updated their website in Webflow for a modern look, reaffirming the importance of evolving with the digital landscape.",
    listItem: ["Webflow", "Live site"],
    link: "https://www.allmorakakel.se/",
  },
  {
    title: "UVEO",
    des: "This was built in Webflow for a company selling UVC lights: Care222® revolutionized UV light technology for safer indoor environments, proving effective against the spread of viruses and bacteria.",
    listItem: ["Webflow", "Live site"],
    link: "https://www.uveo.se/",
  },
  {
    title: "Protectionmask",
    des: "Protectionmask is a company selling a Innovative Escape Mask Expertly designed for protection in the event of a fire, our Protectionmask® absorbs up to 95% of the most dangerous fire gases and particulates.",
    listItem: ["Webflow", "Live site"],
    link: "https://www.protectionmask.com/",
  },
  {
    title: "Countries REST API",
    des: "This web app offers country data via the REST Countries API, allowing users to search and filter details. It features a responsive design with light/dark modes, built using React.",
    listItem: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "Countries API",
      "Vite",
      "Framer Motion",
    ],
    link: "https://rest-countries-api-xi-topaz.vercel.app/",
  },
  {
    title: "Password Generator",
    des: "This password generator enables secure, customized password creation based on user preferences. They can select length, character types, and receive strength assessment of the generated password.",
    listItem: ["React", "TailwindCSS", "Vite"],
    link: "https://password-generator-navy.vercel.app/",
  },
  {
    title: "Digital Potential",
    des: "This website was built for my agency with Webflow, on this site you can see all the services we offer and the work we have done. For this site I used webflows native animations and interactions to create a smooth user experience as well as custom code to style the scrollbar, add lottie animations and more.",
    listItem: ["Webflow", "Live site"],
    link: "https://www.digitalpotential.se/",
  },
];

// export const projects = [
//   {
//     title: "Stripe",
//     description:
//       "A technology company that builds economic infrastructure for the internet.",
//     link: "https://stripe.com",
//   },
//   {
//     title: "Netflix",
//     description:
//       "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
//     link: "https://netflix.com",
//   },
//   {
//     title: "Google",
//     description:
//       "A multinational technology company that specializes in Internet-related services and products.",
//     link: "https://google.com",
//   },
//   {
//     title: "Meta",
//     description:
//       "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
//     link: "https://meta.com",
//   },
//   {
//     title: "Amazon",
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     link: "https://amazon.com",
//   },
//   {
//     title: "Microsoft",
//     description:
//       "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
//     link: "https://microsoft.com",
//   },
// ];
