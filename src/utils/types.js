import PropTypes from 'prop-types';

export const LinkType = PropTypes.shape({
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
});

export const CardType = PropTypes.shape({
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
});

export const FooterSectionType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(LinkType).isRequired
});