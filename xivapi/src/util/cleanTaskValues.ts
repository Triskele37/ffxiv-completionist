// Trim & remove weird characters from cached tasks
export function cleanTaskValues(task: any): void {
    Object.keys(task).forEach((key) => {
        let value = task[key];

        if(typeof value === 'string') {
            value = value.replace('', '');
            value = value.replace('', '');
            value = value.trim();

            task[key] = value;
        }
    });
}
