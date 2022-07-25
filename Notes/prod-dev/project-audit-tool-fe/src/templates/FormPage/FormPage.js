import React from "react";

import { FormPageStyle } from "./FormPage.style";
import withStyles from "../../withstyle";
import CarouselMain from "../../organisms/CarouselMain/CarouselMain";

import FormMain from "../../organisms/Form/FormMain";


const FormPage = ({ className, formtype, copyrighttext, ...formPageProps }) => {
  const args = {
    copyrightText: copyrighttext,
    formtype: formtype,
  }
  return (
    <div className={`${className}`}>
      <div className="carouselMainPosition col-7 col-s-7"><CarouselMain /></div>
      <div className="formPosition col-5 col-s-5"><FormMain {...args} /></div>


    </div>
  );
};


export default withStyles(FormPage, FormPageStyle);

export { FormPage as FormPageNotStyled };
