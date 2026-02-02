import Link from "next/link";
import "./index.css";
export interface FooterItemInterface {
  url: string;
  label: string;
  isActive?: boolean;
}

export default function FooterItem(props: FooterItemInterface) {
  return (
    <li className="nav-item">
      <Link
        href={props.url}
        className={`nav-link ${props.isActive ? "active" : ""}`}
      >
        {props.label}
      </Link>
    </li>
  );
}
