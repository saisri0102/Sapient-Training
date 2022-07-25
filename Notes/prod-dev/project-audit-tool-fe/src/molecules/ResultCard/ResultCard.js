import Icon from "../../atoms/Icon/icon";
import withStyles from "../../withstyle";

import Image from "../../atoms/Image/image";

import { ResultCardStyle } from "./ResultCard.style";
import PropTypes from "prop-types";

const ResultCard = ({
  heading,
  subHeading,
  status,
  progress,
  auditors,
  reviewers,
  className,
  ...dataprops
}) => {
  const image = process.env.PUBLIC_URL + "/resultCard.png";
  const { auditorText, reviewerText, progressText, altText } = dataprops;

  return (
    <div className={`${className}`}>
      <div className="result-card">
        <Image
          className="result-image"
          src={image}
          alt={altText}
          varient="medium"
          data-testid="image1"
        ></Image>

        <div className="result-content">
          <div className="result-header" content={heading} data-testid="rc2">
            <h2>{heading}</h2>
            <h3 className={status}>{status}</h3>
            <div>
              <h3 className="grey-font">{subHeading}</h3>
            </div>
            <div className="result-auditor">
              <span className="result-email">
                <h3 className="grey-font" aria-label={auditorText}>
                  {auditorText}
                </h3>
                &nbsp; &nbsp;
                {auditors.length > 0 ? (
                  auditors.map((auditor, index) =>
                    auditor.length > 0 ? (
                      <span className="grey-border grey-font" key={index}>
                        {auditor}
                      </span>
                    ) : (
                      ""
                    )
                  )
                ) : (
                  <h3 className="grey-font">{0}</h3>
                )}
              </span>
            </div>
            <div className="result-reviewer">
              <span className="result-email">
                <h3 className="grey-font" aria-label={reviewerText}>
                  {reviewerText}
                </h3>
                &nbsp; &nbsp;
                {reviewers.length > 0 ? (
                  reviewers.map((reviewer, index) =>
                    reviewer.length > 0 ? (
                      <span className="grey-border grey-font" key={index}>
                        {reviewer}
                      </span>
                    ) : (
                      ""
                    )
                  )
                ) : (
                  <h3 className="grey-font">{0}</h3>
                )}{" "}
              </span>
            </div>
          </div>

          <div className="result-icons">
            <span
              className="progress-percent"
              aria-label={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {progressText}
            </span>
            &nbsp;
            <Icon
              iconClassName="fas faShareAlt"
              style={{ margin: "0 5px" }}
            ></Icon>
            &nbsp;
            <Icon
              iconClassName="fas faTrashAlt"
              style={{ margin: "0 5px" }}
            ></Icon>
          </div>
        </div>
      </div>
    </div>
  );
};

ResultCard.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  status: PropTypes.string,
  img: PropTypes.string,
  progress: PropTypes.string,
  auditors: PropTypes.array,
  reviewers: PropTypes.array,
  className: PropTypes.string,
};
const image = process.env.PUBLIC_URL + "/resultcard.png";
ResultCard.defaultProps = {
  heading: "Heading",
  subHeading: "Sub-Heading",
  status: "Status",
  img: `${image}`,
  progress: "0",
  auditors: ["testmail"],
  reviewers: ["testmail"],
  className: "",
};

export default withStyles(ResultCard, ResultCardStyle);

export { ResultCard as ResultCardNotStyled };
