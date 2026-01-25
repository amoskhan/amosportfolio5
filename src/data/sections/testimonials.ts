import tonypng from '../../images/portfolio/tonypng.jpg';
import testimonialImage from '../../images/testimonial.webp';
import {TestimonialSection} from '../dataDef';

export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Ho Yuan Lu (DxD Hub) - A National Platform under A*STAR ',
      text: 'Amos applied critical thinking and data analysis skills to conduct a comprehensive review of intern hiring trends from 2022 to 2024. His analysis identified key opportunities to enhance recruitment strategies, optimize manpower planning, and address departmental needs during critical periods. His professionalism, resourcefulness, and ability to build positive working relationships made him a valued member of the team.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMHWu9j5HVnvkGAR-tfU2KRW8K6WjqmOlzqw&s',
    },
    {
      name: 'Tony Png (Phillips Securities Pte Ltd)',
      text: 'Amos has also been effective in his efforts of know-your-customer, risk profiling and due diligence process in new clients onboarding. Amos is helpful and a proactive team player during special audit projects where investigations into old archives are required. I particularly appreciate Amos willingness to take initiative to help the company serve its internal and external customers more fully.',
      image: tonypng,
    },
    {
      name: 'Glenn Tan (HTX - Home Team Science & Technology Agency)',
      text: 'Amos displayed great enthusiasm when performing all tasks assigned to him. He often took the initiative to offer his assistance for tasks, and was unafraid to take on tasks outside of his comfort zone. Amos exhibited professionalism while handling trial participants, and constantly sought to improve himself.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DJ4nRFeU7ZHDBF8rHtiJIcccqEgL4rCW7g&s',
    },
  ],
};
