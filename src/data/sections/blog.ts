import portfolioImage1 from '../../images/portfolio/portfolio-1.jpg';
import portfolioImage2 from '../../images/portfolio/portfolio-2.jpg';
import portfolioImage4 from '../../images/portfolio/portfolio-4.jpg';
import portfolioImage12 from '../../images/portfolio/portfolio-12.jpg';
import portfolioImage13 from '../../images/portfolio/portfolio-13.jpg';
import portfolioImage14 from '../../images/portfolio/portfolio-14.jpg';
import portfolioImage25 from '../../images/portfolio/portfolio-25.jpg';
import {BlogPost} from '../dataDef';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Why did I build this website? 🤔',
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
      'Having completed my internship at DxD Hub (a national platform under A*STAR), I have built strong connections within the medtech ecosystem and collaborating partners. As an Outreach Communications Intern, I had the opportunity to serve on the planning committee of DxD Hub’s 10th Anniversary event. I ensured smooth logistics and supported event operations to deliver a professional and well-organised experience. Post event, I also proposed a design for a feature wall to further document the achievements of DxD Hub and enhance its branding. <split para> Beyond event planning, I also co-developed 15 LinkedIn articles, generating 64,305 impressions, 27,707 views and 453 new followers. I conducted a comprehensive review of intern hiring trends using critical thinking and data analysis skills. This analysis identified key opportunities to enhance recruitment strategies, optimize manpower planning, and address departmental needs during critical periods.',
    author: 'Amos Khan',
    image: portfolioImage2,
  },
  {
    id: 3,
    title: '📢 Final Year Project Presentation 2024 - Exercise Physiology',
    date: '2024-07-18',
    content:
      'Research Topic: Acute Effects of Cloth Mask on Exercise Performance between Genders 👨‍🔬 <split para> After more than 100 hours dedicated to data collection, meticulous data cleaning and report writing, I have completed my FYP report. This module was one of the most demanding yet rewarding parts of my journey in SSM. It gave me invaluable hands-on experience with physiological measurement tools (Gas Exchange Analyser, YSI 2900, Dual X-Ray Absorptiometry, etc.) and a chance to explore how masks impact exercise performance.',
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
  {
    id: 5,
    title: '🚀 AI in Education Innovation Challenge: SG PE Syllabus Bot',
    date: '2026-09-25',
    content:
      "I'm excited to share that our team has been selected for the Accelerator Stage of NIE's inaugural AI in Education Innovation Challenge, run with AWS. 18 teams of student-teachers showcased their projects in May 2026, and the judging panel picked ours as one with strong potential for further development. Our project, an AI-Assisted Feedback Ecosystem for Physical Education, grew out of the SG PE Syllabus Bot I first built to help teachers navigate the 2024 PE Syllabus. <split para> In a PE lesson, one teacher can't watch every pupil's throw, kick or roll. The bot uses computer vision to track each pupil's movement and large language models to check it against the Fundamental Movement Skills and Gymnastics checklists. Pupils work in pairs at a Practice Station: they scan the class QR code, film each other on an iPad and get feedback straight away. <split para> Since the showcase, I've kept building. Teachers can now plan lessons ahead, name each pair, and review or change every grade the AI gives, so the final call always stays with the teacher. Pupil videos and results are locked to their own teacher. Over the Accelerator Stage, we'll keep developing it with our faculty mentors, including more gymnastics, and I'm excited to test it in real PE lessons!",
    author: 'Amos Khan',
    image: portfolioImage25,
  },
];
