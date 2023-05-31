import { reactive } from 'vue'

export const store = reactive({
    // array di oggetti per popolare dinamicamente le cards dei servizi
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
    ]
})