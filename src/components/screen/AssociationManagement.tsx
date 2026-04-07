import AssociationHero from "../sections/association-management/AssociationHero"
import AssociationServices from "../sections/association-management/AssociationServices"
import EnhanceCommunity from "../sections/association-management/EnhanceCommunity"
import ExpertCommunity from "../sections/association-management/ExpertCommunity"
import WhyChooseAssociation from "../sections/association-management/WhyChooseAssociation"

const AssociationManagement = () => {
    return (
        <div>
            <AssociationHero />
            <ExpertCommunity />
            <AssociationServices />
            <WhyChooseAssociation />
            <EnhanceCommunity />
        </div>
    )
}

export default AssociationManagement