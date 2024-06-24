import { NextResponse } from "next/server";
import { readFile } from "fs/promises";



export async function GET() {

    const res = JSON.parse(await readFile('data.json','utf-8')) //dummy data normally url there is typically credentials we would pull in via env

    const cards:event[] = await res;

    return NextResponse.json(cards);
    
}

export default async function getEvents() {
    
    const data = await GET();

    return data.json()
}
