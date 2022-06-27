import {
    Header,
    Footer,
    SectionHome,
    SectionAboutMe,
    SectionHobbies,
    SectionSkills,
    SectionProjects,
} from '../../components'

const Home = () => {
    return (
        <>
            <Header />
            <SectionHome />
            <SectionAboutMe />
            <SectionHobbies />
            <SectionSkills />
            <SectionProjects />
            <Footer />
        </>
    )
}

export default Home
