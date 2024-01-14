import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.split(" ").join("").toLowerCase(); //Home => home  //work exp => workexp
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};
export default Link;
