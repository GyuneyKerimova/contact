export const cleanNumber = (number: string): string => {
    return Array.from(number).reduce((acc, char) => {
        return char !== '-' && char !== '_' ? acc + char : acc;
    }, '');
};