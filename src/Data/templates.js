import templateOneImg from "../images/Madhuri2.png";
import templateTwoImg from "../images/Riya1.png";
import templateThreeImg from "../images/1.png";
import templateForthImg from  "../images/2.jpg";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import Template3 from "../Templates/Template3"
import Template4 from "../Templates/Template4"
export const templates = [
  {
    id: 1,
    template_name: "Template One",
    template_img: templateOneImg,
    template: <Template1 />,
  },
  {
    id: 2,
    template_name: "Template Two",
    template_img: templateTwoImg,
    template: <Template2 />,
  },
  {
    id: 3,
    template_name: "Template Three",
    template_img: templateThreeImg,
    template: <Template3 />,
  },
  {
    id: 4,
    template_name: "Template four",
    template_img: templateForthImg,
    template: <Template4 />,
  },
];