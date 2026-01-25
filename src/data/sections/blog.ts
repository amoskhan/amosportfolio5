import portfolioImage1 from '../../images/portfolio/portfolio-1.jpg';
import portfolioImage2 from '../../images/portfolio/portfolio-2.jpg';
import portfolioImage4 from '../../images/portfolio/portfolio-4.jpg';
import portfolioImage12 from '../../images/portfolio/portfolio-12.jpg';
import portfolioImage13 from '../../images/portfolio/portfolio-13.jpg';
import portfolioImage14 from '../../images/portfolio/portfolio-14.jpg';
import { BlogPost } from '../dataDef';

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'Why am I doing this website?🤔',
        date: '2024-05-02',
        content:
            "I've been a tech geek since my primary school IT monitor days. To be real, tools like ChatGPT have made coding way less intimidating—whenever I'm stuck, I just ask for help and keep moving. I didn't study Computer Science; I actually have a Sports Science degree from NTU. But I think if you're curious, you should just go for it. You don't need a specific degree or straight A's to build something cool. My goal was just to have a free website to share my portfolio, and I'm honestly just happy I got it working.",
        author: 'Amos Khan',
        image: portfolioImage1,
        collageImages: [portfolioImage12, portfolioImage13, portfolioImage14],
    },
    {
        id: 2,
        title: 'DxD Hub Internship',
        date: '2024-07-02',
        content:
            'Having completed my internship in DxD Hub (National Platform under A*STAR), I have built strong connections within the medtech ecosystem and collaborating partners. As a Outreach Communications Intern, I was given the experience to be the planning committee of DxD Hubs 10th Year Anniversary event. I ensured smooth logistics and supported event operations to deliver a professional and well-organised experience. Post event, I also proposed a design for a feature wall to further document the achievements of DxD Hub and enhance its branding. <split para> Beyond event planning, I also co-developed 15 LinkedIn articles, generating 64,305 impressions, 27,707 views and 453 new followers. I conducted a comprehensive review of intern hiring trends using critical thinking and data analyst skills. This analysis identified key opportunities to enhance recruitment strategies, optimize manpower planning, and address departmental needs during critical periods. ',
        author: 'Amos Khan',
        image: portfolioImage2,
    },
    {
        id: 3,
        title: '📢 Final Year Project Presentation 2024 - Exercise Physiology',
        date: '2024-07-18',
        content:
            'Research Topic: Acute Effects of Cloth Mask on Exercise Performance between Genders 👨‍🔬After more than 100 hours dedicated to data collection, meticulous data cleaning and report writing, I have completed my FYP report. This module was one of the most demanding yet rewarding parts of my journey in SSM. It gave me invaluable hands-on experience with physiological measurement tools (Gas Exchange Analyser, YSI 2900, Dual X-Ray absorptiometry etc...) and a chance to explore how mask impact exercise performance. ',
        author: 'Amos Khan',
        image: portfolioImage12,
    },
    {
        id: 4,
        title: 'HTX Internship',
        date: '2025-07-22',
        content:
            'During my final-year internship, I had the rewarding opportunity to work closely with scientists and engineers from the Human Factors and Simulation department at HTX. This experience was truly eye-opening, as I was able to apply the practical knowledge I gained in school to real-world experiments. Our work focused on addressing real-life challenges faced by Home Team Officers, including conducting experiments related to Thermal Physiology and Heat Acclimatization while ensuring safe conditions for officers in the field. This hands-on experience not only deepened my understanding of the subject but also highlighted the importance of research in supporting those who serve on the front lines.',
        author: 'Amos Khan',
        image: portfolioImage4,
    },
];
