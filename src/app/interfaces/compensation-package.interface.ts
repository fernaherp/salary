export interface CompensationPackageInterface {
    personalInformation: PersonalInformation;
    baseSalary: BaseSalary;
    guaranteedBenefits: GuaranteedBenefits;
}

interface PersonalInformation {
    fullName: string;
    dateOfBirth: Date;
    nationalities: string;
    age: number;
    maritalStatus: string;
    children: number;
}

interface BaseSalary {
    baseSalaryMontly: number;
    baseSalaryYearly: number;
}

interface GuaranteedBenefits {
    christmasBonus: number;
    christmasBonusAmount: number;
    vacationPay: number;
    vacationPayAmount: number;
    numberOfVacations: number;
    savingsFund: number;
    savingsFundAmount: number;
    savingsFundStatutoryCap: boolean;
    foodVouchers: number;
    foodVouchersAnnual: number;
    foodVouchersStatutoryCap: boolean;
    restaurantVouchers: number;
    restaurantVouchersAnnual: number;
    subsidizedCanteen: boolean;
}

interface NonGuaranteedBenefits {
    
}
