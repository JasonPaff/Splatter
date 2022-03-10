export default function openTicketsTableSorter (tickets, selectedSort, isSortAscending) {
    return tickets.sort((a,b ) => {
        switch(selectedSort) {
            case 'Title':
                if (isSortAscending) {
                    if (a.title > b.title) {
                        return -1
                    }
                    if (a.title < b.title) {
                        return 1
                    }
                    return 0;
                } else {
                    if (a.title > b.title) {
                        return 1
                    }
                    if (a.title < b.title) {
                        return -1
                    }
                    return 0;
                }
            case 'Date Created':
                if (isSortAscending) {
                    if (a.createdAt > b.createdAt) {
                        return -1
                    }
                    if (a.createdAt < b.createdAt) {
                        return 1
                    }
                    return 0;
                } else {
                    if (a.createdAt > b.createdAt) {
                        return 1
                    }
                    if (a.createdAt < b.createdAt) {
                        return -1
                    }
                    return 0;
                }
            case 'Status':
                if (isSortAscending) {
                    if (a.status > b.status) {
                        return -1
                    }
                    if (a.status < b.status) {
                        return 1
                    }
                    return 0;
                } else {
                    if (a.status > b.status) {
                        return 1
                    }
                    if (a.status < b.status) {
                        return -1
                    }
                    return 0;
                }
            case 'Type':
                if (isSortAscending) {
                    if (a.type > b.type) {
                        return -1
                    }
                    if (a.type < b.type) {
                        return 1
                    }
                    return 0;
                } else {
                    if (a.type > b.type) {
                        return 1
                    }
                    if (a.type < b.type) {
                        return -1
                    }
                    return 0;
                }
            case 'Severity':
                if (isSortAscending) {
                    if (a.severity > b.severity) {
                        return -1
                    }
                    if (a.severity < b.severity) {
                        return 1
                    }
                    return 0;
                } else {
                    if (a.severity > b.severity) {
                        return 1
                    }
                    if (a.severity < b.severity) {
                        return -1
                    }
                    return 0;
                }
            case 'Priority':
                if (isSortAscending) {
                    if (a.priority > b.priority) {
                        return -1
                    }
                    if (a.priority < b.priority) {
                        return 1
                    }
                    return 0;
                } else {
                    if (a.priority > b.priority) {
                        return 1
                    }
                    if (a.priority < b.priority) {
                        return -1
                    }
                    return 0;
                }
            case 'Product':
                if (isSortAscending) {
                    if (a.product > b.product) {
                        return -1
                    }
                    if (a.product < b.product) {
                        return 1
                    }
                    return 0;
                } else {
                    if (a.product > b.product) {
                        return 1
                    }
                    if (a.product < b.product) {
                        return -1
                    }
                    return 0;
                }
            case 'Browser':
                if (isSortAscending) {
                    if (a.browser > b.browser) {
                        return -1
                    }
                    if (a.browser < b.browser) {
                        return 1
                    }
                    return 0;
                } else {
                    if (a.browser > b.browser) {
                        return 1
                    }
                    if (a.browser < b.browser) {
                        return -1
                    }
                    return 0;
                }
            default:
                return 0;
        }
    })
}