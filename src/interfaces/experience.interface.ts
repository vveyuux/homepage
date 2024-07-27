export interface ExperiencePropsInterface {
    experiences: ExperienceInterface[]
}

export interface ExperienceInterface {
    title: string,
    companyName: string,
    description: string,
    href: string,
    startDate: string,
    endDate: string,
    techStacks: string[]
}