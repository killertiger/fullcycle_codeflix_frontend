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


type User = {
    id: string,
    name: string,
    username: string,
    email: string,
    website: string
};

export async function getUserById(id: string): Promise<User> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();
    return user;
}