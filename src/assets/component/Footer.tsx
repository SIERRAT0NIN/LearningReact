import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <div>
      <button className="footerBtn">
        <div>
          <a className="icon" href="https://github.com/SIERRAT0NIN">
            <GitHubIcon />
          </a>{" "}
        </div>
      </button>
      <button className="footerBtn">
        <div>
          <a
            className="icon"
            href="https://www.linkedin.com/in/sierra-alberto23/"
          >
            <LinkedIn />
          </a>{" "}
        </div>
      </button>
      <button className="footerBtn">
        <div>
          <a className="icon" type="submit" href="https://www.google.com/">
            <EmailIcon />
          </a>{" "}
        </div>
      </button>
    </div>
  );
}
