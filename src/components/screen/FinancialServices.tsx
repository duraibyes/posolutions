import FinancialHero from "../sections/financial-services/FinancialHero"
import FinancialOppurtunites from "../sections/financial-services/FinancialOppurtunites"
import FinancialRecoveryProcess from "../sections/financial-services/FinancialRecoveryProcess"
import RecoveryProcess from "../sections/financial-services/RecoveryProcess"
import StartFinancialJourney from "../sections/financial-services/StartFinancialJourney"

const FinancialServices = () => {
    return (
        <div>
            <FinancialHero />
            <FinancialOppurtunites />
            <FinancialRecoveryProcess />
            <RecoveryProcess />
            <StartFinancialJourney />
        </div>
    )
}

export default FinancialServices