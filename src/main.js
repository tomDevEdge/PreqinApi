"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// Function to fetch data from the Preqin API
async function fetchInvestorData() {
    const url = 'https://developer.preqin.com/Preqin-API/#/Investor/get_api_Investor_Contact';
    const params = {
        firmIds: ['2670', '2792', '332', '3611'],
    };
    try {
        const response = await axios_1.default.get(url, {
            params: params,
            auth: {
                username: 'dummydatafeeds@preqin.com',
                password: '8f0bc69bc2a643f8bb8034a15081962e',
            },
        });
        return response.data;
    }
    catch (error) {
        console.error('Failed to fetch investor data:', error);
        throw error;
    }
}
function displayInvestorTable(investors) {
    const tableHeaders = ['FirmId', 'FrmName', 'Type', 'DateAdded', 'Address'];
    console.table(investors, tableHeaders);
}
// Fetch and display investor data
fetchInvestorData()
    .then(investors => displayInvestorTable(investors))
    .catch(error => console.error('Failed to fetch investor data:', error.message));
