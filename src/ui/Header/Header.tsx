import { Clover, Sun } from "@phosphor-icons/react";
import "./Header.scss";
export function Header() {
  return (
    <header className="header">
      <h1>zentasker <Clover className="clover-logo"/></h1>
      <Sun className="theme-switcher"/>
    </header>
  )
}
