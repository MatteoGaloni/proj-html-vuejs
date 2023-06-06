import { reactive } from "vue";

export const store = reactive({
  // arrays per popolare dinamicamente i componenti
  servicesList: [
    {
      service: "Audit & Assurance",
      icon: "svg-1.svg",
      overview: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    },
    {
      service: "Financial advisory",
      icon: "svg-2.svg",
      overview: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    },
    {
      service: "Analytics and M&A",
      icon: "svg-3.svg",
      overview: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    },
    {
      service: "Middle Marketing",
      icon: "svg-4.svg",
      overview: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    },
    {
      service: "Legal Consulting",
      icon: "svg-5.svg",
      overview: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    },
    {
      service: "Regulatory Risk",
      icon: "svg-6.svg",
      overview: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    },
  ],
  companyValues: [
    {
      value: "Tradition",
      iconClass: "fa-solid fa-medal",
      overview: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    },
    {
      value: "Security",
      iconClass: "fa-solid fa-lock",
      overview: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    },
    {
      value: "Certificate",
      iconClass: "fa-solid fa-pen-to-square",
      overview: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    },
    {
      value: "Expertise",
      iconClass: "fa-solid fa-graduation-cap",
      overview: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    },
  ],
  actions: [
    "The Company",
    "Institutional",
    "Social & Events",
    "Innovation",
    "Enviroment",
    "Technology",
  ],
  actionsCategories: [
    {
      action: "All",
      category: 1,
    },
    {
      action: "INSTITUTIONAL",
      category: 2,
    },
    {
      action: "SOCIAL",
      category: 3,
    },
    {
      action: "EVENTS",
      category: 4,
    },
    {
      action: "INNOVATION",
      category: 5,
    },
    {
      action: "ENVIROMENT",
      category: 6,
    },
    {
      action: "TECHNOLOGY",
      category: 7,
    },
  ],
  projects: [
    {
      title: "Academic Professional in Social Media",
      backgroundImg: "project-1.jpg",
      category: 2,
    },
    {
      title: "President speech at the annual meeting",
      backgroundImg: "project-2.jpg",
      category: 3,
    },
    {
      title: "International business trip in Shanghai",
      backgroundImg: "project-3.jpg",
      category: 4,
    },
    {
      title: "Tecnology workshop with education theme",
      backgroundImg: "project-4.jpg",
      category: 5,
    },
    {
      title: "Donation of clothes and food to the partner NGO",
      backgroundImg: "project-5.jpg",
      category: 6,
    },
    {
      title: "Confraternization of the procurement team",
      backgroundImg: "project-6.jpg",
      category: 7,
    },
  ],
  resultsNumbers: [
    {
      result: "Certifications",
      number: 128,
    },
    {
      result: "Employees",
      number: 230,
    },
    {
      result: "Customers",
      number: 517,
    },
    {
      result: "Countries Served",
      number: 94,
    },
  ],
  sponsorsLogoPath: [
    "logo-4.png",
    "logo-5.png",
    "logo-1.png",
    "logo-2.png",
    "logo-3.png",
    "logo-4.png",
  ],
  supportLinks: [
    "Responsability",
    "Terms of Use",
    "About Cookies",
    "Privacy Policy",
    "Accesibility",
    "Information",
  ],
});
