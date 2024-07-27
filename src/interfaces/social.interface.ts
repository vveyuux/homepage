export interface SocialMediaPropsInterface {
    menu: SocialMediaInterface[]
}

export interface SocialMediaInterface {
    title: string,
    href: string,
    icon: React.FC
}