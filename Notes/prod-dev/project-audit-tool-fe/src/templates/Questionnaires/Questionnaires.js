import React from "react";
import PropTypes from "prop-types";
import withStyles from "../../withstyle";
import { QuestionnairesStyle } from "./Questionnaires.style";
import MainHeading from "../../molecules/MainHeading/MainHeading";
import ViewPointMain from "../../organisms/ViewPointMain/ViewPointMain";
import ProgressList from "../../organisms/ProgressList/ProgressList";
const Questionnaires = ({
  className,
  mainbody,
  mainpage,
  mainpageContent,
  varient,
  heading,
  mainheading,
  mainsub,
  ansno,
  quesno,
  mainheadingContent,
  mainPageBody,
  progressList,
  partition,
}) => {
  return (
    <div className={`${className}`} varient={varient}>
      <div className={`${ mainbody } mainbody`}>
        <div className={mainpage}>
          <div className={heading}>
            <h1 className={mainheading}>{mainheadingContent}</h1>
            <h2 className={mainsub}>
              <MainHeading answeredno={ansno} questionsno={quesno} />
            </h2>
          </div>
          <div className={mainPageBody}>
            <div className={progressList}>
              <ProgressList />
            </div>
            <span className={partition}></span>
            <div className={mainpageContent}>
              <ViewPointMain />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Questionnaires.propTypes = {
  mainbody: PropTypes.string,
  mainpage: PropTypes.string,
  mainpageContent: PropTypes.string,
  heading: PropTypes.string,
  mainheading: PropTypes.string,
  mainsub: PropTypes.string,
  ansno: PropTypes.string,
  quesno: PropTypes.string,
  mainheadingContent: PropTypes.string,
  mainPageBody: PropTypes.string,
  progressList: PropTypes.string,
  partition: PropTypes.string,
};

Questionnaires.defaultProps = {
  mainbody: "mainbody",
  mainpage: "mainpage",
  mainpageContent: "mainpageContent",
  heading: "heading",
  mainheading: "mainheading",
  mainsub: "mainsub",
  mainPageBody: "mainPageBody",
  ansno: "1",
  quesno: "5",
  mainheadingContent: "GOT AUDIT",
  progressList: "progressList",
  partition: "partition",
};

export default withStyles(Questionnaires, QuestionnairesStyle);

export { Questionnaires as QuestionnairesNotStyled };
