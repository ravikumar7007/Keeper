import React from "react";
const date = new Date().getFullYear();
function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright &copy; {date}</p>
      </footer>
    </div>
  );
}

export default Footer;
