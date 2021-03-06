import React from 'react';
import PropTypes from 'prop-types';

import './case-block.scss';

const CaseBlockImage = ({ graphic }) => <div className="col-xs-12 col-lg-6 case-block__col-img">{graphic}</div>;

CaseBlockImage.propTypes = {
  graphic: PropTypes.element.isRequired,
};

const CaseBlockText = ({ title, subtitle, children }) => (
  <div className="col-xs-12 col-lg-6">
    <div className="case-block__content">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      {children}
    </div>
  </div>
);

CaseBlockText.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export const CaseBlock = ({ title, subtitle, children, graphic, isReverse }) => (
  <div className="container">
    <div className="case-block">
      <div className="row">
        {isReverse ? (
          <CaseBlockImage graphic={graphic} />
        ) : (
          <CaseBlockText title={title} subtitle={subtitle}>
            {children}
          </CaseBlockText>
        )}
        {isReverse ? (
          <CaseBlockText title={title} subtitle={subtitle}>
            {children}
          </CaseBlockText>
        ) : (
          <CaseBlockImage graphic={graphic} />
        )}
      </div>
    </div>
  </div>
);

CaseBlock.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  graphic: PropTypes.element,
  isReverse: PropTypes.bool,
};

CaseBlock.defaultProps = {
  graphic: null,
  isReverse: false,
};

export default CaseBlock;
