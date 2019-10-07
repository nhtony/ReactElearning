//common
export const GP = "GP09";

export const userLogin = "userLogin";

export const adminLogin = "adminLogin";

export const domain = "http://elearning0706.cybersoft.edu.vn/api/";

export const listTypes = {
    student: {
        isstudent: 'ST',
        notstudent: 'NST',
        waitinguser: 'APU'
    },
    course: {
        isenroll: 'EN',
        notenroll: 'NEN',
        waitingenroll: 'WEN'
    }
}

// storage
export const setLocalStorage = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
}

export const getLocalStorage = (name) => {
    return (localStorage.getItem(name)) ? JSON.parse(localStorage.getItem(name)) : {};
}

export const userLogoutStorage = () => {
    localStorage.removeItem(userLogin);
}



