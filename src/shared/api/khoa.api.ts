import HTTP_AUTH from "../../configs/axios-auth.config"



export const filterKhoa = (tenKhoa: string) => {
    const params = {
        name: tenKhoa
    }
    return HTTP_AUTH.get('api/khoas', { params })
}

export const createKhoa = (body: any) => {
    return HTTP_AUTH.post('/api/khoas/create', body);
}

export const updateKhoa = (body: any) => {
    return HTTP_AUTH.put('/api/khoas/update', body);
}