const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

const findDuplicates = (arr) => {
    let duplicates = []

    const tempArray = [...arr].sort()

    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i + 1] === tempArray[i]) {
            duplicates.push(tempArray[i])
        }
    }

    return duplicates
}

export {
    getRandomColor,
    findDuplicates
}