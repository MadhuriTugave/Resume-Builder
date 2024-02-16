import templateOneImg from "../images/Madhuri2.jpg";
import templateTwoImg from "../images/Riya1.jpg";
import templateThreeImg from "../images/Varsha.jpg";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import Template3 from "../Templates/Template3"
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
];