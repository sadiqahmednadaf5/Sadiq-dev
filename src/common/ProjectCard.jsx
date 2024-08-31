import React from 'react';
import gitImage from '../assets/githubimage.webp';
import webImage from '../assets/webimage.webp';
function ProjectCard({ src, p ,arrayList,description,gitrepoUrl,liveUrl}) {
  return (<>
      <img className="hover" src={src} alt={`${p} logo`} />
      <p className="projecttitle">{p}</p>
      <div className="projectTechStack">
      {Array.isArray(arrayList) && arrayList.map((tech, index) => (
          <span key={index} className="techStack">{tech}</span>
        ))}
      </div>
      <p className="descriptionText">{description}</p>
      <div className='projectSourceIcons'>
      <a href={gitrepoUrl} target='_blank'> <img className="imageIcons" src={gitImage} alt="gitHubrepository"/></a>
     <a href={liveUrl} target='_blank'><img className="imageIcons" src={webImage} alt="ProjectLiveLink"  /></a>
      </div>
      </>
  );
}

export default ProjectCard;
