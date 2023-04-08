
const API_ADDRESS = "https://fakestoreapi.com/";

export const getProducts = async <TR>(endPoint: string, limit: number): Promise<TR> => {
    const address = `${API_ADDRESS}${endPoint}?limit=${limit}`;
    const data = await fetch(address).then(res => res).then(resp => resp.json() as TR).catch(err=>err);
    return data
}
export const getProduct = async <TR>(endPoint: string): Promise<TR> => {
    const address = `${API_ADDRESS}${endPoint}`;
    const data = await fetch(address).then(res => res).then(resp => resp.json() as TR).catch(err=>err);
    return data
}

