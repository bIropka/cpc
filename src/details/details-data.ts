import {Email, Phone} from '@material-ui/icons';
import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import {SvgIconTypeMap} from "@material-ui/core";

export interface Detail {
    id: number,
    accountNumber: string,
    crmAccountId: string,
    crmAccountURL: string,
    createdBy: string,
    createdByURL: string,
    keyContact: string,
    keyContactURL: string,
    totalInvoiceBalance: number,
    unappliedPaymentAmount: number,
    contractedMrr: number,
    totalDebitMemoBalance: number,
    unappliedCreditMemoBalance: number,
    todaysMrr: number,
    creditBalance: number,
    lastInvoiced: string,
    contact_1: Contact,
    contact_2: Contact
    address_1: Address,
    address_2: Address,
    soldTo: string,
    sector: string,
    salesChannel: string,
    salesFranchise: string,
    vertical: null,
    businessDivisions: null,
    territory: null,
    seUseCase: null,
    accountProfile: string,
    accountStructure: null,
    inCollections: null,
    segment: null,
    corporateRegion: null,
    customerName: string,
    parentCompany: string,
    billTo: string,
    accountBalance: number,
    lastInvoice: string,
    status: string,
}

interface Contact {
    name: string;
    list: Array<ContactListItem>
}

export interface ContactListItem {
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>,
    text: string,
    url?: string
}

type Address = Array<string>;

export const details: Detail[] = [{
    id: 1,
    accountNumber: 'A00013279',
    crmAccountId: '001I00008gcEYQAY',
    crmAccountURL: 'https://google.com',
    createdBy: 'Richard Castle',
    createdByURL: 'https://google.com',
    keyContact: 'Inigo Montoya',
    keyContactURL: 'https://google.com',
    totalInvoiceBalance: 106830,
    unappliedPaymentAmount: 0,
    contractedMrr: 6830,
    totalDebitMemoBalance: 0,
    unappliedCreditMemoBalance: 0,
    todaysMrr: 6340,
    creditBalance: 0,
    lastInvoiced: '04/21/2020',
    contact_1: {
        name: 'Inigo Montoya',
        list: [
            {
                icon: Email,
                text: 'imontoyo@acmeinc.com',
                url: 'mailto:imontoyo@acmeinc.com',
            },
            {
                icon: Phone,
                text: '1(408)867-5319',
            }
        ],
    },
    address_1: [
        '404304 Wild Coyote Dr.',
        'Polo Alto, CA 94304',
        'USA',
    ],
    soldTo: 'Same as Bill to',
    contact_2: {
        name: 'Count Rugen',
        list: [
            {
                icon: Email,
                text: 'crugen@acmeinc.com',
                url: 'mailto:crugen@acmeinc.com',
            },
            {
                icon: Phone,
                text: '1(408)867-5309',
            }
        ],
    },
    address_2: [
        '404233 Wild Coyote Dr.',
        'Polo Alto, CA 94304',
        'USA',
    ],
    sector: 'Manufacturing',
    salesChannel: 'Direct',
    salesFranchise: 'Enterprise-Americas',
    vertical: null,
    businessDivisions: null,
    territory: null,
    seUseCase: null,
    accountProfile: 'Large',
    accountStructure: null,
    inCollections: null,
    segment: null,
    corporateRegion: null,
    customerName: 'ACME Industries, Inc.',
    parentCompany: '-',
    billTo: 'Richard Castle',
    accountBalance: 102455002,
    lastInvoice: '04/21/2020',
    status: 'CONFIRMED',
}, {
    id: 2,
    accountNumber: 'A00013278',
    crmAccountId: '002I00008gcEYQAY',
    crmAccountURL: 'https://google.com',
    createdBy: 'Richard Castle',
    createdByURL: 'https://google.com',
    keyContact: 'Inigo Montoya',
    keyContactURL: 'https://google.com',
    totalInvoiceBalance: 106830,
    unappliedPaymentAmount: 0,
    contractedMrr: 6830,
    totalDebitMemoBalance: 0,
    unappliedCreditMemoBalance: 0,
    todaysMrr: 6340,
    creditBalance: 0,
    lastInvoiced: '04/21/2020',
    contact_1: {
        name: 'Inigo Montoya',
        list: [
            {
                icon: Email,
                text: 'imontoyo@acmeinc.com',
                url: 'mailto:imontoyo@acmeinc.com',
            },
            {
                icon: Phone,
                text: '1(408)867-5319',
            }
        ],
    },
    address_1: [
        '404333xZc Wild Coyote Dr.',
        'Polo Alto, CA 94304',
        'USA',
    ],
    soldTo: 'Same as Bill to',
    contact_2: {
        name: 'Count Rugen',
        list: [
            {
                icon: Email,
                text: 'crugen@acmeinc.com',
                url: 'mailto:crugen@acmeinc.com',
            },
            {
                icon: Phone,
                text: '1(408)867-5309',
            }
        ],
    },
    address_2: [
        '404 Wild Coyote Dr.',
        'Polo Alto, CA 94304',
        'USA',
    ],
    sector: 'Manufacturing',
    salesChannel: 'Direct',
    salesFranchise: 'Enterprise-Americas',
    vertical: null,
    businessDivisions: null,
    territory: null,
    seUseCase: null,
    accountProfile: 'Large',
    accountStructure: null,
    inCollections: null,
    segment: null,
    corporateRegion: null,
    customerName: 'Windy City Coffee and Tea - North Side',
    parentCompany: 'Windy City Coffee and Tea - Central Chicago',
    billTo: 'Kathryn Janeway',
    accountBalance: 102455002,
    lastInvoice: '04/21/2020',
    status: 'CONFIRMED',
}, {
    id: 3,
    accountNumber: 'A00013277',
    crmAccountId: '003I00008gcEYQAY',
    crmAccountURL: 'https://google.com',
    createdBy: 'Richard Castle',
    createdByURL: 'https://google.com',
    keyContact: 'Inigo Montoya',
    keyContactURL: 'https://google.com',
    totalInvoiceBalance: 106830,
    unappliedPaymentAmount: 0,
    contractedMrr: 6830,
    totalDebitMemoBalance: 0,
    unappliedCreditMemoBalance: 0,
    todaysMrr: 6340,
    creditBalance: 0,
    lastInvoiced: '04/21/2020',
    contact_1: {
        name: 'Inigo Montoya',
        list: [
            {
                icon: Email,
                text: 'imontoyo@acmeinc.com',
                url: 'mailto:imontoyo@acmeinc.com',
            },
            {
                icon: Phone,
                text: '1(408)867-5319',
            }
        ],
    },
    address_1: [
        '404 Wild Coyote Dr.',
        'Polo Alto, CA 94304',
        'USA',
    ],
    soldTo: 'Same as Bill to',
    contact_2: {
        name: 'Count Rugen',
        list: [
            {
                icon: Email,
                text: 'crugen@acmeinc.com',
                url: 'mailto:crugen@acmeinc.com',
            },
            {
                icon: Phone,
                text: '1(408)867-5309',
            }
        ],
    },
    address_2: [
        '404 Wild Coyote Dr.',
        'Polo Alto, CA 94304',
        'USA',
    ],
    sector: 'Manufacturing',
    salesChannel: 'Direct',
    salesFranchise: 'Enterprise-Americas',
    vertical: null,
    businessDivisions: null,
    territory: null,
    seUseCase: null,
    accountProfile: 'Large',
    accountStructure: null,
    inCollections: null,
    segment: null,
    corporateRegion: null,
    customerName: 'Windy City Coffee and Tea - North Side',
    parentCompany: 'Windy City Coffee and Tea - Central Chicago',
    billTo: 'Kathryn Janeway',
    accountBalance: 102455002,
    lastInvoice: '04/21/2020',
    status: 'CONFIRMED',
}, {
    id: 4,
    accountNumber: 'A00013276',
    crmAccountId: '004I00008gcEYQAY',
    crmAccountURL: 'https://google.com',
    createdBy: 'Richard Castle',
    createdByURL: 'https://google.com',
    keyContact: 'Inigo Montoya',
    keyContactURL: 'https://google.com',
    totalInvoiceBalance: 106830,
    unappliedPaymentAmount: 0,
    contractedMrr: 6830,
    totalDebitMemoBalance: 0,
    unappliedCreditMemoBalance: 0,
    todaysMrr: 6340,
    creditBalance: 0,
    lastInvoiced: '04/21/2020',
    contact_1: {
        name: 'Inigo Montoya',
        list: [
            {
                icon: Email,
                text: 'imontoyo@acmeinc.com',
                url: 'mailto:imontoyo@acmeinc.com',
            },
            {
                icon: Phone,
                text: '1(408)867-5319',
            }
        ],
    },
    address_1: [
        '404 Wild Coyote Dr.',
        'Polo Alto, CA 94304',
        'USA',
    ],
    soldTo: 'Same as Bill to',
    contact_2: {
        name: 'Count Rugen',
        list: [
            {
                icon: Email,
                text: 'crugen@acmeinc.com',
                url: 'mailto:crugen@acmeinc.com',
            },
            {
                icon: Phone,
                text: '1(408)867-5309',
            }
        ],
    },
    address_2: [
        '404 Wild Coyote Dr.',
        'Polo Alto, CA 94304',
        'USA',
    ],
    sector: 'Manufacturing',
    salesChannel: 'Direct',
    salesFranchise: 'Enterprise-Americas',
    vertical: null,
    businessDivisions: null,
    territory: null,
    seUseCase: null,
    accountProfile: 'Large',
    accountStructure: null,
    inCollections: null,
    segment: null,
    corporateRegion: null,
    customerName: 'Windy City Coffee and Tea - North Side',
    parentCompany: 'Windy City Coffee and Tea - Central Chicago',
    billTo: 'Kathryn Janeway',
    accountBalance: 102455002,
    lastInvoice: '04/21/2020',
    status: 'CONFIRMED',
}, {
    id: 5,
    accountNumber: 'A00013275',
    crmAccountId: '005I00008gcEYQAY',
    crmAccountURL: 'https://google.com',
    createdBy: 'Richard Castle',
    createdByURL: 'https://google.com',
    keyContact: 'Inigo Montoya',
    keyContactURL: 'https://google.com',
    totalInvoiceBalance: 106830,
    unappliedPaymentAmount: 0,
    contractedMrr: 6830,
    totalDebitMemoBalance: 0,
    unappliedCreditMemoBalance: 0,
    todaysMrr: 6340,
    creditBalance: 0,
    lastInvoiced: '04/21/2020',
    contact_1: {
        name: 'Inigo Montoya',
        list: [
            {
                icon: Email,
                text: 'imontoyo@acmeinc.com',
                url: 'mailto:imontoyo@acmeinc.com',
            },
            {
                icon: Phone,
                text: '1(408)867-5319',
            }
        ],
    },
    address_1: [
        '404 Wild Coyote Dr.',
        'Polo Alto, CA 94304',
        'USA',
    ],
    soldTo: 'Same as Bill to',
    contact_2: {
        name: 'Count Rugen',
        list: [
            {
                icon: Email,
                text: 'crugen@acmeinc.com',
                url: 'mailto:crugen@acmeinc.com',
            },
            {
                icon: Phone,
                text: '1(408)867-5309',
            }
        ],
    },
    address_2: [
        '404 Wild Coyote Dr.',
        'Polo Alto, CA 94304',
        'USA',
    ],
    sector: 'Manufacturing',
    salesChannel: 'Direct',
    salesFranchise: 'Enterprise-Americas',
    vertical: null,
    businessDivisions: null,
    territory: null,
    seUseCase: null,
    accountProfile: 'Large',
    accountStructure: null,
    inCollections: null,
    segment: null,
    corporateRegion: null,
    customerName: 'Windy City Coffee and Tea - North Side',
    parentCompany: 'Windy City Coffee and Tea - Central Chicago',
    billTo: 'Kathryn Janeway',
    accountBalance: 102455002,
    lastInvoice: '04/21/2020',
    status: 'CONFIRMED',
}, {
    id: 6,
    accountNumber: 'A00013274',
    crmAccountId: '006I00008gcEYQAY',
    crmAccountURL: 'https://google.com',
    createdBy: 'Richard Castle',
    createdByURL: 'https://google.com',
    keyContact: 'Inigo Montoya',
    keyContactURL: 'https://google.com',
    totalInvoiceBalance: 106830,
    unappliedPaymentAmount: 0,
    contractedMrr: 6830,
    totalDebitMemoBalance: 0,
    unappliedCreditMemoBalance: 0,
    todaysMrr: 6340,
    creditBalance: 0,
    lastInvoiced: '04/21/2020',
    contact_1: {
        name: 'Inigo Montoya',
        list: [
            {
                icon: Email,
                text: 'imontoyo@acmeinc.com',
                url: 'mailto:imontoyo@acmeinc.com',
            },
            {
                icon: Phone,
                text: '1(408)867-5319',
            }
        ],
    },
    address_1: [
        '404 Wild Coyote Dr.',
        'Polo Alto, CA 94304',
        'USA',
    ],
    soldTo: 'Same as Bill to',
    contact_2: {
        name: 'Count Rugen',
        list: [
            {
                icon: Email,
                text: 'crugen@acmeinc.com',
                url: 'mailto:crugen@acmeinc.com',
            },
            {
                icon: Phone,
                text: '1(408)867-5309',
            }
        ],
    },
    address_2: [
        '404 Wild Coyote Dr.',
        'Polo Alto, CA 94304',
        'USA',
    ],
    sector: 'Manufacturing',
    salesChannel: 'Direct',
    salesFranchise: 'Enterprise-Americas',
    vertical: null,
    businessDivisions: null,
    territory: null,
    seUseCase: null,
    accountProfile: 'Large',
    accountStructure: null,
    inCollections: null,
    segment: null,
    corporateRegion: null,
    customerName: 'Windy City Coffee and Tea - North Side',
    parentCompany: 'Windy City Coffee and Tea - Central Chicago',
    billTo: 'Kathryn Janeway',
    accountBalance: 102455002,
    lastInvoice: '04/21/2020',
    status: 'CONFIRMED',
}, {
    id: 7,
    accountNumber: 'A00013273',
    crmAccountId: '007I00008gcEYQAY',
    crmAccountURL: 'https://google.com',
    createdBy: 'Richard Castle',
    createdByURL: 'https://google.com',
    keyContact: 'Inigo Montoya',
    keyContactURL: 'https://google.com',
    totalInvoiceBalance: 106830,
    unappliedPaymentAmount: 0,
    contractedMrr: 6830,
    totalDebitMemoBalance: 0,
    unappliedCreditMemoBalance: 0,
    todaysMrr: 6340,
    creditBalance: 0,
    lastInvoiced: '04/21/2020',
    contact_1: {
        name: 'Inigo Montoya',
        list: [
            {
                icon: Email,
                text: 'imontoyo@acmeinc.com',
                url: 'mailto:imontoyo@acmeinc.com',
            },
            {
                icon: Phone,
                text: '1(408)867-5319',
            }
        ],
    },
    address_1: [
        '404 Wild Coyote Dr.',
        'Polo Alto, CA 94304',
        'USA',
    ],
    soldTo: 'Same as Bill to',
    contact_2: {
        name: 'Count Rugen',
        list: [
            {
                icon: Email,
                text: 'crugen@acmeinc.com',
                url: 'mailto:crugen@acmeinc.com',
            },
            {
                icon: Phone,
                text: '1(408)867-5309',
            }
        ],
    },
    address_2: [
        '404 Wild Coyote Dr.',
        'Polo Alto, CA 94304',
        'USA',
    ],
    sector: 'Manufacturing',
    salesChannel: 'Direct',
    salesFranchise: 'Enterprise-Americas',
    vertical: null,
    businessDivisions: null,
    territory: null,
    seUseCase: null,
    accountProfile: 'Large',
    accountStructure: null,
    inCollections: null,
    segment: null,
    corporateRegion: null,
    customerName: 'Windy City Coffee and Tea - North Side',
    parentCompany: 'Windy City Coffee and Tea - Central Chicago',
    billTo: 'Kathryn Janeway',
    accountBalance: 102455002,
    lastInvoice: '04/21/2020',
    status: 'CONFIRMED',
}, {
    id: 8,
    accountNumber: 'A00013272',
    crmAccountId: '008I00008gcEYQAY',
    crmAccountURL: 'https://google.com',
    createdBy: 'Richard Castle',
    createdByURL: 'https://google.com',
    keyContact: 'Inigo Montoya',
    keyContactURL: 'https://google.com',
    totalInvoiceBalance: 106830,
    unappliedPaymentAmount: 0,
    contractedMrr: 6830,
    totalDebitMemoBalance: 0,
    unappliedCreditMemoBalance: 0,
    todaysMrr: 6340,
    creditBalance: 0,
    lastInvoiced: '04/21/2020',
    contact_1: {
        name: 'Inigo Montoya',
        list: [
            {
                icon: Email,
                text: 'imontoyo@acmeinc.com',
                url: 'mailto:imontoyo@acmeinc.com',
            },
            {
                icon: Phone,
                text: '1(408)867-5319',
            }
        ],
    },
    address_1: [
        '404 Wild Coyote Dr.',
        'Polo Alto, CA 94304',
        'USA',
    ],
    soldTo: 'Same as Bill to',
    contact_2: {
        name: 'Count Rugen',
        list: [
            {
                icon: Email,
                text: 'crugen@acmeinc.com',
                url: 'mailto:crugen@acmeinc.com',
            },
            {
                icon: Phone,
                text: '1(408)867-5309',
            }
        ],
    },
    address_2: [
        '404 Wild Coyote Dr.',
        'Polo Alto, CA 94304',
        'USA',
    ],
    sector: 'Manufacturing',
    salesChannel: 'Direct',
    salesFranchise: 'Enterprise-Americas',
    vertical: null,
    businessDivisions: null,
    territory: null,
    seUseCase: null,
    accountProfile: 'Large',
    accountStructure: null,
    inCollections: null,
    segment: null,
    corporateRegion: null,
    customerName: 'Windy City Coffee and Tea - North Side',
    parentCompany: 'Windy City Coffee and Tea - Central Chicago',
    billTo: 'Kathryn Janeway',
    accountBalance: 102455002,
    lastInvoice: '04/21/2020',
    status: 'CONFIRMED',
}, {
    id: 9,
    accountNumber: 'A00013271',
    crmAccountId: '009I00008gcEYQAY',
    crmAccountURL: 'https://google.com',
    createdBy: 'Richard Castle',
    createdByURL: 'https://google.com',
    keyContact: 'Inigo Montoya',
    keyContactURL: 'https://google.com',
    totalInvoiceBalance: 106830,
    unappliedPaymentAmount: 0,
    contractedMrr: 6830,
    totalDebitMemoBalance: 0,
    unappliedCreditMemoBalance: 0,
    todaysMrr: 6340,
    creditBalance: 0,
    lastInvoiced: '04/21/2020',
    contact_1: {
        name: 'Inigo Montoya',
        list: [
            {
                icon: Email,
                text: 'imontoyo@acmeinc.com',
                url: 'mailto:imontoyo@acmeinc.com',
            },
            {
                icon: Phone,
                text: '1(408)867-5319',
            }
        ],
    },
    address_1: [
        '404 Wild Coyote Dr.',
        'Polo Alto, CA 94304',
        'USA',
    ],
    soldTo: 'Same as Bill to',
    contact_2: {
        name: 'Count Rugen',
        list: [
            {
                icon: Email,
                text: 'crugen@acmeinc.com',
                url: 'mailto:crugen@acmeinc.com',
            },
            {
                icon: Phone,
                text: '1(408)867-5309',
            }
        ],
    },
    address_2: [
        '404 Wild Coyote Dr.',
        'Polo Alto, CA 94304',
        'USA',
    ],
    sector: 'Manufacturing',
    salesChannel: 'Direct',
    salesFranchise: 'Enterprise-Americas',
    vertical: null,
    businessDivisions: null,
    territory: null,
    seUseCase: null,
    accountProfile: 'Large',
    accountStructure: null,
    inCollections: null,
    segment: null,
    corporateRegion: null,
    customerName: 'Windy City Coffee and Tea - North Side',
    parentCompany: 'Windy City Coffee and Tea - Central Chicago',
    billTo: 'Kathryn Janeway',
    accountBalance: 102455002,
    lastInvoice: '04/21/2020',
    status: 'CONFIRMED',
}, {
    id: 10,
    accountNumber: 'A00013270',
    crmAccountId: '000I00008gcEYQAY',
    crmAccountURL: 'https://google.com',
    createdBy: 'Richard Castle',
    createdByURL: 'https://google.com',
    keyContact: 'Inigo Montoya',
    keyContactURL: 'https://google.com',
    totalInvoiceBalance: 106830,
    unappliedPaymentAmount: 0,
    contractedMrr: 6830,
    totalDebitMemoBalance: 0,
    unappliedCreditMemoBalance: 0,
    todaysMrr: 6340,
    creditBalance: 0,
    lastInvoiced: '04/21/2020',
    contact_1: {
        name: 'Inigo Montoya',
        list: [
            {
                icon: Email,
                text: 'imontoyo@acmeinc.com',
                url: 'mailto:imontoyo@acmeinc.com',
            },
            {
                icon: Phone,
                text: '1(408)867-5319',
            }
        ],
    },
    address_1: [
        '404 Wild Coyote Dr.',
        'Polo Alto, CA 94304',
        'USA',
    ],
    soldTo: 'Same as Bill to',
    contact_2: {
        name: 'Count Rugen',
        list: [
            {
                icon: Email,
                text: 'crugen@acmeinc.com',
                url: 'mailto:crugen@acmeinc.com',
            },
            {
                icon: Phone,
                text: '1(408)867-5309',
            }
        ],
    },
    address_2: [
        '404 Wild Coyote Dr.',
        'Polo Alto, CA 94304',
        'USA',
    ],
    sector: 'Manufacturing',
    salesChannel: 'Direct',
    salesFranchise: 'Enterprise-Americas',
    vertical: null,
    businessDivisions: null,
    territory: null,
    seUseCase: null,
    accountProfile: 'Large',
    accountStructure: null,
    inCollections: null,
    segment: null,
    corporateRegion: null,
    customerName: 'Windy City Coffee and Tea - North Side',
    parentCompany: 'Windy City Coffee and Tea - Central Chicago',
    billTo: 'Kathryn Janeway',
    accountBalance: 102455002,
    lastInvoice: '04/21/2020',
    status: 'CONFIRMED',
}];