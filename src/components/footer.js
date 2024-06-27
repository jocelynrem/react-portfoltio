//src/components/footer.js
import { TiSocialGithubCircular, TiSocialLinkedinCircular, TiSocialInstagramCircular } from "react-icons/ti";

export default function Footer() {
  return (
    <div className="py-3 bg-rem-gray">

      <div className="flex justify-center">
        <a href="https://www.linkedin.com/in/jocelynrem/" target="blank">
          <TiSocialLinkedinCircular className="h-10 w-10 inline-block mx-10 text-rem-blue" />
        </a>
        <a href="https://github.com/jocelynrem" target="blank">
          <TiSocialGithubCircular className="h-10 w-10 inline-block mx-10 text-rem-teal" />
        </a>
        <a href="https://www.instagram.com/jocelynrem/" target="blank">
          <TiSocialInstagramCircular className="h-10 w-10 inline-block mx-10 text-rem-pink mr-10" />
        </a>
      </div>
    </div>
  )
}