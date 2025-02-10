import React from "react";

function Footer() {
  return (
    <>
      <footer className="text-center py-4 border-t">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} ChatAja. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Footer;
