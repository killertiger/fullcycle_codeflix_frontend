export const getAppSettings = (): Promise<{ theme: string, language: string }> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                theme: 'dark',
                language: 'en'
            });
        }, 5000);
    })
}

export const getUserInfo = (): Promise<{
    name: string;
    email: string;
    age: number;
}> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'John Doe',
                email: 'john@mail.com',
                age: 30
            });
        }, 1000);
    });
}