/*
    * A single `Project` component that will be used multiple times in the Portfolio section
*/
import React from 'react';
import themeColor from '../../styles/themeColor'

const github = {
    path: "img/github/iconWhite.png",
    pathOnHover: "img/github/iconBlack.png",
    size: "30"
}

const styles = {
    project: `p-8 col-span-4 border-5 bg-[${themeColor.secondary}] border-[${themeColor.secondary}] rounded-lg`,
    projectName:`text-[${themeColor.main}] text-2xl font-semibold border-5 border-[${themeColor.secondary}]`,
    projectRepo:``,
}


const Project = ({name, description, link, repo, img, alt}) =>{
    return (
        <div class={styles.project}>
            <img src={img} alt={alt}/>
            <div class="flex ">
                <a
                    href={link}
                    rel="noreferrer"
                    target="_blank"
                    class={styles.projectName}
                >
                    <h3>
                        {name}
                    </h3>
                </a>
                <a 
                    href={repo}
                    rel="noreferrer"
                    target="_blank"
                    class={styles.projectRepo}
                >
                    <img
                        src={github.path}
                        alt="GitHub link to repository"
                        width={github.size}
                        height={github.size}
                    />
                </a>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Project;