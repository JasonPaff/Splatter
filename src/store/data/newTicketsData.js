export const severityOptions = [
    {severity: 'Minor', description: 'Minor loss of function'},
    {severity: 'Major', description: 'Major loss of function'},
    {severity: 'Critical', description: 'Application crash, loss of data'},
    {severity: 'Trivial', description: 'Some UI enhancements'},
    {severity: 'Blocker', description: 'No further testing work can be done'},
    {severity: 'Enhancement', description: 'New feature or enhancement request'}
];

export const priorityOptions = [
    {priority: '0 - Wishlist', description: "doesn't necessarily need to be completed", numeric : 0},
    {priority: '1 - Eventual', description: "not slated to be completed in the current development cycle", numeric: 1},
    {priority: '2 - Soonish', description: "not necessary to completed in the current development cycle", numeric: 2},
    {priority: '3 - Normal', description: 'should be completed in the current development cycle', numeric: 3},
    {priority: '4 - Important', description: 'top priority task', numeric: 4},
    {priority: '5 - Immediate', description: 'drop everything and work on this now!', numeric: 5},
];

export const reportTypes = [
    'Coding Error',
    'Design Error',
    'New Suggestion',
    'Documentation Issue',
    'Hardware Problem',
    'Unknown'
];

export const productOptions = [
    'Tournament Life',
    'Etsy Clone',
    'Whats for Dinner?'
];


export const browserOptions = [
    'Microsoft Edge',
    'Google Chrome',
    'Mozilla Firefox',
    'Apple Safari'
];

export const statusOptions = [
    'created',
    'assigned',
    'closed',
]