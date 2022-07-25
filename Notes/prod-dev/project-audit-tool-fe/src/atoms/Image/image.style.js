import { css } from "styled-components";

//  small-radius - Profile picture of the User
//  medium - Project logo in Search landing page
//  large  - Login & Sign-up Carousel images

export const ImageStyle = css`
 border-radius: ${(props) => {
   try{
  switch (props.varient) {
    case "small-radius":
      return '50%';
    case "medium":
      return '0%';
    case "large":
      return '0%';
    case "auto":
      return '0%';
    default:
      return "inherit";
  }
}
catch{
  return null
}
}};
  height: ${(props) => {
    try{
    switch (props.varient) {
      case "small-radius":
        return props.theme.imageSizes.small;
      case "medium":
        return props.theme.imageSizes.medium;
      case "large":
        return props.theme.imageSizes.large;
      case "auto":
        return props.height;
      default:
        return "inherit";
    }
  }
  catch{
    return null
  }
  
  }};
  width: ${(props) => {
    try{
    switch (props.varient) {
   
      case "small-radius":
        return props.theme.imageSizes.small;
      case "medium":
        return props.theme.imageSizes.medium;
      case "large":
        return props.theme.imageSizes.large;
      case "auto":
        return "100%";
      default:
        return "inherit";
    }
  }
  catch{
    return null
  }
  }};
`;
