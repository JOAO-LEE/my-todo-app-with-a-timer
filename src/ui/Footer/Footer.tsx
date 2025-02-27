import { GithubLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";
import "./Footer.scss";

export function Footer() {
  return (
    <footer id="footer-wrapper">
     <nav>
        <ul>
          <li><a href="https://github.com/JOAO-LEE"><GithubLogo  weight="bold"/> see it on github</a></li>
          <li><a href="https://linkedin.com/in/joao-lee-lima"><LinkedinLogo weight="bold" /> connect with me on linkedin</a></li>
          <li><a href="https://x.com/joaumlee">follow me on <XLogo weight="bold"/></a></li>
        </ul>
     </nav>
     <p><span>created by</span> João Lima</p>
    </footer>
  )
}
