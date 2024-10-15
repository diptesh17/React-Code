type Info = {
    id: number; 
    name: string;
}

type AdminInfoList = Info & {
    role: string;
}

export { Info, AdminInfoList };
