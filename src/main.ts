import axios from 'axios';

// Function to fetch data from the Preqin API
async function fetchInvestorData() {
    const url = 'https://developer.preqin.com/Preqin-API/#/Investor/get_api_Investor';
    const params = {
        firmIds: ['2670', '2792', '332', '3611'],
    };

    try {
        const response = await axios.get(url, {
            params: params,
            auth: {
                username: 'dummydatafeeds@preqin.com',
                password: '8f0bc69bc2a643f8bb8034a15081962e',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Failed to fetch investor data:', error);
        throw error;
    }
}

// Function to display investor data in a table format
type Investor = {
    FirmId: string;
    FrmName: string;
    Type: string;
    DateAdded: string;
    Address: string;
};

function displayInvestorTable(investors: Investor[]) {
    const tableHeaders: (keyof Investor)[] = ['FirmId', 'FrmName', 'Type', 'DateAdded', 'Address'];

    console.table(investors, tableHeaders);
}

// Fetch and display investor data
fetchInvestorData()
    .then(investors => displayInvestorTable(investors))
    .catch(error => console.error('Failed to fetch investor data:', error.message));
