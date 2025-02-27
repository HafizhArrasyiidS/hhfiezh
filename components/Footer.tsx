import { AiFillGithub, AiFillLinkedin, AiOutlineYoutube } from 'react-icons/ai';

const socialLinks = [
  { href: "https://github.com/HafizhArrasyiidS", Icon: AiFillGithub, label: "GitHub" },
  { href: "https://www.youtube.com/@Hafizharrasyds", Icon: AiOutlineYoutube, label: "YouTube" },
  { href: "https://www.linkedin.com/in/hafizh-arrasyiid-syahbana-3ab844291/", Icon: AiFillLinkedin, label: "LinkedIn" }
];

export const Footer = () => {

  return (
    <footer className="py-8 max-w-[1200px] mx-auto px-4">
      <div className="mt-12 flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="text-gray-200">
          © 2025. Hafizh Arrasyiid Syahbana.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socialLinks.map(({ href, Icon, label }) => (
            <a 
              key={label}
              href={href}
              aria-label={label}
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full
                         hover:text-gray-400 transition-colors"
            >
              <Icon size={30} />
            </a>
          ))}
        </ul>
      </div>
    </footer>
  );
};