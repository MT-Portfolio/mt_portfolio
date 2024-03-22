import React from "react";

export default function CopyRight() {
  return (
    <div className="copy-right">
      <div className="text-center">
        <span>
          © {new Date().getFullYear()} All Rights Reserved by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://themeforest.net/user/Mohammad Taha"
          >
            Elite-Themes24
          </a>
          .
        </span>
      </div>
    </div>
  );
}
