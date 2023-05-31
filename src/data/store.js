import { reactive } from 'vue'

export const store = reactive({
    // arrays di oggetti per popolare dinamicamente le cards Services e TheCompany
    servicesList: [
        {
            service: "Audit & Assurance",
            icon: "./src/assets/images/svg/svg-1.svg",
            overview: "lorem ipsum dolor sit amet consectetur adipiscing elit"
        },
        {
            service: "Financial advisory",
            icon: "./src/assets/images/svg/svg-2.svg",
            overview: "lorem ipsum dolor sit amet consectetur adipiscing elit"
        },
        {
            service: "Analytics and M&A",
            icon: "./src/assets/images/svg/svg-3.svg",
            overview: "lorem ipsum dolor sit amet consectetur adipiscing elit"
        },
        {
            service: "Middle Marketing",
            icon: "./src/assets/images/svg/svg-4.svg",
            overview: "lorem ipsum dolor sit amet consectetur adipiscing elit"
        },
        {
            service: "Legal Consulting",
            icon: "./src/assets/images/svg/svg-5.svg",
            overview: "lorem ipsum dolor sit amet consectetur adipiscing elit"
        },
        {
            service: "Regulatory Risk",
            icon: "./src/assets/images/svg/svg-6.svg",
            overview: "lorem ipsum dolor sit amet consectetur adipiscing elit"
        },
    ],
    companyValues: [
        {
            value: "Tradition",
            iconClass: "fa-solid fa-medal",
            overview: "lorem ipsum dolor sit amet consectetur adipiscing elit"
        },
        {
            value: "Security",
            iconClass: "fa-regular fa-lock",
            overview: "lorem ipsum dolor sit amet consectetur adipiscing elit"
        },
        {
            value: "Certificate",
            iconClass: "fa-solid fa-pen-to-square",
            overview: "lorem ipsum dolor sit amet consectetur adipiscing elit"
        },
        {
            value: "Expertise",
            iconClass: "fa-solid fa-graduation-cap",
            overview: "lorem ipsum dolor sit amet consectetur adipiscing elit"
        },       
    ],



})