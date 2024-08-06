import block from "bem-cn-lite";
import React from "react";

import "./SocialMediaIconsWrapper.scss";
// Removed the duplicate import of Instagram
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as TelegramIcon } from "../../assets/icons/telegram.svg";
import { ReactComponent as GitHubIcon } from "../../assets/icons/github.svg";

const b = block("social-media-icons-wrapper");

export const SocialMediaIconsWrapper: React.FC = () => {
  return (
    <div className={b()}>
      <a
        href="https://instagram.com"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon className={b("icon", { instagram: true })} />
      </a>
      <a
        href="https://facebook.com"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon className={b("icon", { facebook: true })} />
      </a>
      <a
        href="https://t.me/Nargiza_Toleutai"
        aria-label="Telegram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TelegramIcon className={b("icon", { telegram: true })} />
      </a>
      <a
        href="https://github.com"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon className={b("icon", { github: true })} />
      </a>
    </div>
  );
};

/*
  Added target="_blank" and rel="noopener noreferrer" to securely open the links in a new tab.
*/
