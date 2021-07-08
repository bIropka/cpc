import {Email, Phone} from '@material-ui/icons';
import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import {SvgIconTypeMap} from "@material-ui/core";

export enum Content {
    label,
    text,
    link
}

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
    unappliedCreditMemoAmount: number,
    todaysMrr: number,
    creditBalance: number,
    lastInvoiced: string,
    contact_1_name: string,
    contact_2_name: string,
    contact_1: Contact,
    contact_2: Contact
    address_1: Address,
    address_2: Address,
    soldTo: string,
    sector: string,
    salesChannel: string,
    salesFranchise: string,
    vertical?: string,
    businessDivisions?: string,
    territory?: string,
    seUseCase?: string,
    accountProfile: string,
    accountStructure?: string,
    inCollections?: string,
    segment?: string,
    corporateRegion?: string,
    customerName: string,
    parentCompany: string,
    billTo: string,
    accountBalance: number,
    status: string,
    sales: string,
    salesUrl: string,
    customerService: string,
    customerServiceUrl: string,
    collections: string,
    collectionsUrl: string,
    notes: string
}

export interface DetailSection {
    id: number,
    top: boolean,
    columns: number,
    cell: Cell[]
}

export interface Cell {
    id: number,
    content: CellContent[]
}

export interface CellContent {
    type: Content,
    text?: string,
    url?: string,
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

interface Contact {
    list: Array<ContactListItem>
}

export interface ContactListItem {
    type: Content,
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>,
    text?: string,
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
    unappliedCreditMemoAmount: 0,
    todaysMrr: 6340,
    creditBalance: 0,
    lastInvoiced: '04/21/2020',
    contact_1_name: 'Inigo Montoya',
    contact_1: {
        list: [
            {
                type: Content.link,
                icon: Email,
                text: 'imontoyo@acmeinc.com',
                url: 'mailto:imontoyo@acmeinc.com',
            },
            {
                type: Content.text,
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
    contact_2_name: 'Count Rugen',
    contact_2: {
        list: [
            {
                type: Content.link,
                icon: Email,
                text: 'crugen@acmeinc.com',
                url: 'mailto:crugen@acmeinc.com',
            },
            {
                type: Content.text,
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
    accountProfile: 'Large',
    customerName: 'ACME Industries, Inc.',
    parentCompany: '-',
    billTo: 'Richard Castle',
    accountBalance: 102455002,
    status: 'CONFIRMED',
    sales: 'Jovier Esposito',
    salesUrl: 'https://google.com',
    customerService: 'Victoria Gates',
    customerServiceUrl: 'https://google.com',
    collections: 'Katherine Bekket',
    collectionsUrl: 'https://google.com',
    notes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
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
    unappliedCreditMemoAmount: 0,
    todaysMrr: 6340,
    creditBalance: 0,
    lastInvoiced: '04/21/2020',
    contact_1_name: 'Inigo Montoya',
    contact_1: {
        list: [
            {
                type: Content.link,
                icon: Email,
                text: 'imontoyo@acmeinc.com',
                url: 'mailto:imontoyo@acmeinc.com',
            },
            {
                type: Content.text,
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
    contact_2_name: 'Count Rugen',
    contact_2: {
        list: [
            {
                type: Content.link,
                icon: Email,
                text: 'crugen@acmeinc.com',
                url: 'mailto:crugen@acmeinc.com',
            },
            {
                type: Content.text,
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
    accountProfile: 'Large',
    customerName: 'Windy City Coffee and Tea - North Side',
    parentCompany: 'Windy City Coffee and Tea - Central Chicago',
    billTo: 'Kathryn Janeway',
    accountBalance: 102455002,
    status: 'CONFIRMED',
    sales: 'Jovier Esposito',
    salesUrl: 'https://google.com',
    customerService: 'Victoria Gates',
    customerServiceUrl: 'https://google.com',
    collections: 'Katherine Bekket',
    collectionsUrl: 'https://google.com',
    notes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
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
    unappliedCreditMemoAmount: 0,
    todaysMrr: 6340,
    creditBalance: 0,
    lastInvoiced: '04/21/2020',
    contact_1_name: 'Inigo Montoya',
    contact_1: {
        list: [
            {
                type: Content.link,
                icon: Email,
                text: 'imontoyo@acmeinc.com',
                url: 'mailto:imontoyo@acmeinc.com',
            },
            {
                type: Content.text,
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
    contact_2_name: 'Count Rugen',
    contact_2: {
        list: [
            {
                type: Content.link,
                icon: Email,
                text: 'crugen@acmeinc.com',
                url: 'mailto:crugen@acmeinc.com',
            },
            {
                type: Content.text,
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
    accountProfile: 'Large',
    customerName: 'Windy City Coffee and Tea - North Side',
    parentCompany: 'Windy City Coffee and Tea - Central Chicago',
    billTo: 'Kathryn Janeway',
    accountBalance: 102455002,
    status: 'CONFIRMED',
    sales: 'Jovier Esposito',
    salesUrl: 'https://google.com',
    customerService: 'Victoria Gates',
    customerServiceUrl: 'https://google.com',
    collections: 'Katherine Bekket',
    collectionsUrl: 'https://google.com',
    notes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
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
    unappliedCreditMemoAmount: 0,
    todaysMrr: 6340,
    creditBalance: 0,
    lastInvoiced: '04/21/2020',
    contact_1_name: 'Inigo Montoya',
    contact_1: {
        list: [
            {
                type: Content.link,
                icon: Email,
                text: 'imontoyo@acmeinc.com',
                url: 'mailto:imontoyo@acmeinc.com',
            },
            {
                type: Content.text,
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
    contact_2_name: 'Count Rugen',
    contact_2: {
        list: [
            {
                type: Content.link,
                icon: Email,
                text: 'crugen@acmeinc.com',
                url: 'mailto:crugen@acmeinc.com',
            },
            {
                type: Content.text,
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
    accountProfile: 'Large',
    customerName: 'Windy City Coffee and Tea - North Side',
    parentCompany: 'Windy City Coffee and Tea - Central Chicago',
    billTo: 'Kathryn Janeway',
    accountBalance: 102455002,
    status: 'CONFIRMED',
    sales: 'Jovier Esposito',
    salesUrl: 'https://google.com',
    customerService: 'Victoria Gates',
    customerServiceUrl: 'https://google.com',
    collections: 'Katherine Bekket',
    collectionsUrl: 'https://google.com',
    notes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
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
    unappliedCreditMemoAmount: 0,
    todaysMrr: 6340,
    creditBalance: 0,
    lastInvoiced: '04/21/2020',
    contact_1_name: 'Inigo Montoya',
    contact_1: {
        list: [
            {
                type: Content.link,
                icon: Email,
                text: 'imontoyo@acmeinc.com',
                url: 'mailto:imontoyo@acmeinc.com',
            },
            {
                type: Content.text,
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
    contact_2_name: 'Count Rugen',
    contact_2: {
        list: [
            {
                type: Content.link,
                icon: Email,
                text: 'crugen@acmeinc.com',
                url: 'mailto:crugen@acmeinc.com',
            },
            {
                type: Content.text,
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
    accountProfile: 'Large',
    customerName: 'Windy City Coffee and Tea - North Side',
    parentCompany: 'Windy City Coffee and Tea - Central Chicago',
    billTo: 'Kathryn Janeway',
    accountBalance: 102455002,
    status: 'CONFIRMED',
    sales: 'Jovier Esposito',
    salesUrl: 'https://google.com',
    customerService: 'Victoria Gates',
    customerServiceUrl: 'https://google.com',
    collections: 'Katherine Bekket',
    collectionsUrl: 'https://google.com',
    notes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
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
    unappliedCreditMemoAmount: 0,
    todaysMrr: 6340,
    creditBalance: 0,
    lastInvoiced: '04/21/2020',
    contact_1_name: 'Inigo Montoya',
    contact_1: {
        list: [
            {
                type: Content.link,
                icon: Email,
                text: 'imontoyo@acmeinc.com',
                url: 'mailto:imontoyo@acmeinc.com',
            },
            {
                type: Content.text,
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
    contact_2_name: 'Count Rugen',
    contact_2: {
        list: [
            {
                type: Content.link,
                icon: Email,
                text: 'crugen@acmeinc.com',
                url: 'mailto:crugen@acmeinc.com',
            },
            {
                type: Content.text,
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
    accountProfile: 'Large',
    customerName: 'Windy City Coffee and Tea - North Side',
    parentCompany: 'Windy City Coffee and Tea - Central Chicago',
    billTo: 'Kathryn Janeway',
    accountBalance: 102455002,
    status: 'CONFIRMED',
    sales: 'Jovier Esposito',
    salesUrl: 'https://google.com',
    customerService: 'Victoria Gates',
    customerServiceUrl: 'https://google.com',
    collections: 'Katherine Bekket',
    collectionsUrl: 'https://google.com',
    notes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
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
    unappliedCreditMemoAmount: 0,
    todaysMrr: 6340,
    creditBalance: 0,
    lastInvoiced: '04/21/2020',
    contact_1_name: 'Inigo Montoya',
    contact_1: {
        list: [
            {
                type: Content.link,
                icon: Email,
                text: 'imontoyo@acmeinc.com',
                url: 'mailto:imontoyo@acmeinc.com',
            },
            {
                type: Content.text,
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
    contact_2_name: 'Count Rugen',
    contact_2: {
        list: [
            {
                type: Content.link,
                icon: Email,
                text: 'crugen@acmeinc.com',
                url: 'mailto:crugen@acmeinc.com',
            },
            {
                type: Content.text,
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
    accountProfile: 'Large',
    customerName: 'Windy City Coffee and Tea - North Side',
    parentCompany: 'Windy City Coffee and Tea - Central Chicago',
    billTo: 'Kathryn Janeway',
    accountBalance: 102455002,
    status: 'CONFIRMED',
    sales: 'Jovier Esposito',
    salesUrl: 'https://google.com',
    customerService: 'Victoria Gates',
    customerServiceUrl: 'https://google.com',
    collections: 'Katherine Bekket',
    collectionsUrl: 'https://google.com',
    notes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
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
    unappliedCreditMemoAmount: 0,
    todaysMrr: 6340,
    creditBalance: 0,
    lastInvoiced: '04/21/2020',
    contact_1_name: 'Inigo Montoya',
    contact_1: {
        list: [
            {
                type: Content.link,
                icon: Email,
                text: 'imontoyo@acmeinc.com',
                url: 'mailto:imontoyo@acmeinc.com',
            },
            {
                type: Content.text,
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
    contact_2_name: 'Count Rugen',
    contact_2: {
        list: [
            {
                type: Content.link,
                icon: Email,
                text: 'crugen@acmeinc.com',
                url: 'mailto:crugen@acmeinc.com',
            },
            {
                type: Content.text,
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
    accountProfile: 'Large',
    customerName: 'Windy City Coffee and Tea - North Side',
    parentCompany: 'Windy City Coffee and Tea - Central Chicago',
    billTo: 'Kathryn Janeway',
    accountBalance: 102455002,
    status: 'CONFIRMED',
    sales: 'Jovier Esposito',
    salesUrl: 'https://google.com',
    customerService: 'Victoria Gates',
    customerServiceUrl: 'https://google.com',
    collections: 'Katherine Bekket',
    collectionsUrl: 'https://google.com',
    notes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
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
    unappliedCreditMemoAmount: 0,
    todaysMrr: 6340,
    creditBalance: 0,
    lastInvoiced: '04/21/2020',
    contact_1_name: 'Inigo Montoya',
    contact_1: {
        list: [
            {
                type: Content.link,
                icon: Email,
                text: 'imontoyo@acmeinc.com',
                url: 'mailto:imontoyo@acmeinc.com',
            },
            {
                type: Content.text,
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
    contact_2_name: 'Count Rugen',
    contact_2: {
        list: [
            {
                type: Content.link,
                icon: Email,
                text: 'crugen@acmeinc.com',
                url: 'mailto:crugen@acmeinc.com',
            },
            {
                type: Content.text,
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
    accountProfile: 'Large',
    customerName: 'Windy City Coffee and Tea - North Side',
    parentCompany: 'Windy City Coffee and Tea - Central Chicago',
    billTo: 'Kathryn Janeway',
    accountBalance: 102455002,
    status: 'CONFIRMED',
    sales: 'Jovier Esposito',
    salesUrl: 'https://google.com',
    customerService: 'Victoria Gates',
    customerServiceUrl: 'https://google.com',
    collections: 'Katherine Bekket',
    collectionsUrl: 'https://google.com',
    notes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
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
    unappliedCreditMemoAmount: 0,
    todaysMrr: 6340,
    creditBalance: 0,
    lastInvoiced: '04/21/2020',
    contact_1_name: 'Inigo Montoya',
    contact_1: {
        list: [
            {
                type: Content.link,
                icon: Email,
                text: 'imontoyo@acmeinc.com',
                url: 'mailto:imontoyo@acmeinc.com',
            },
            {
                type: Content.text,
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
    contact_2_name: 'Count Rugen',
    contact_2: {
        list: [
            {
                type: Content.link,
                icon: Email,
                text: 'crugen@acmeinc.com',
                url: 'mailto:crugen@acmeinc.com',
            },
            {
                type: Content.text,
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
    accountProfile: 'Large',
    customerName: 'Windy City Coffee and Tea - North Side',
    parentCompany: 'Windy City Coffee and Tea - Central Chicago',
    billTo: 'Kathryn Janeway',
    accountBalance: 102455002,
    status: 'CONFIRMED',
    sales: 'Jovier Esposito',
    salesUrl: 'https://google.com',
    customerService: 'Victoria Gates',
    customerServiceUrl: 'https://google.com',
    collections: 'Katherine Bekket',
    collectionsUrl: 'https://google.com',
    notes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
}];