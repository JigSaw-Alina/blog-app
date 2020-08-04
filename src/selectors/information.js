// getVisibleInformation

export default (informations, { text, sortBy }) => {
    return informations.filter((data) => {
        const textMatch = data.description.toLowerCase().includes(text.toLowerCase());
        return textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? -1 : 1
        } else if (sortBy === 'alphabetical') {
            return a.description.toLowerCase() < b.description.toLowerCase() ? -1 : 1
        }
    });
}