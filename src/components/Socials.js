import React from 'react';

// import icons
import {
  ImLinkedin,
  ImGithub,
} from 'react-icons/im';

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className='flex gap-x-4'>
        <li>
          <a href="https://www.linkedin.com/in/xhovanimali/" target="_blank">
            <ImLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/XhovaniM8" target="_blank">
            <ImGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
