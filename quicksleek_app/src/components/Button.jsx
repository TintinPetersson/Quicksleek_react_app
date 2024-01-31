const Button = ({ styles, name, href, type }) => (
  <a
    href={href}
    type={type}
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
  >
    {name}
  </a>
);

export default Button;
