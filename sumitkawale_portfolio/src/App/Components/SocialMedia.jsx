import { bounce } from "../../textAnimation"
import { imgSrc } from "./../App"

export default function SocialMedia() {
    return <div className="socialMedia">
        <a href="https://github.com/sumitkawale" target={"_blank"} rel="noreferrer">
            <img className="animateLetter" onMouseOver={bounce} src={imgSrc + "github.svg"} alt="github_icon" />
        </a>
        <a href="https://www.linkedin.com/in/sumit-kawale/" target={"_blank"} rel="noreferrer">
            <img className="animateLetter" onMouseOver={bounce} src={imgSrc + "linkedin.svg"} alt="linkedin_icon" />
        </a>
        <a href="https://www.threads.net/@sumitkawale1" target={"_blank"} rel="noreferrer">
            <img className="animateLetter" onMouseOver={bounce} src={imgSrc + "threads.svg"} alt="twitter_icon" />
        </a>
        <a href="https://discord.com/users/sumitkawale#6649" target={"_blank"} rel="noreferrer">
            <img className="animateLetter" onMouseOver={bounce} src={imgSrc + "discord.svg"} alt="discord_icon" />
        </a>
        <a href="https://www.instagram.com/sumitkawale1/" target={"_blank"} rel="noreferrer">
            <img className="animateLetter" onMouseOver={bounce} src={imgSrc + "instagram.svg"} alt="instagram_icon" />
        </a>
    </div>
}