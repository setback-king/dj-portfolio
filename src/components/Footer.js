const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <div className="footer">© {currentYear} Daniel Barez</div>;
};

export default Footer;
