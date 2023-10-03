import SectionHeading from '@components/SectionHeading';
import withSectionWrapper from '@hoc/withSectionWrapper';

const Experience = () => {
    return (
        <SectionHeading label={ "WHAT I'VE DONE" } heading={ 'Experience.' } />
    );
}

export default withSectionWrapper(Experience, 'experience');