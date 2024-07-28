export interface ProjectPropsInterface {
    projects: ProjectInterface[]
}

export interface ProjectInterface {
    projectName: string,
    subName: string,
    description: string,
    href: string,
    imgPath: string,
    imgAlt: string,
    techStacks?: string[]
}