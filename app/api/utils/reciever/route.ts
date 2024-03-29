import { NextRequest, NextResponse } from "next/server"

export async function POST(req:NextRequest) {
  //if(req.method !== 'POST') return Response.json({error:`Method ${req.method} is not allowed.`},{status:400})
  try{
  const body = await req.json()
  console.log(`Webhook:\n${body}`)
  return NextResponse.json({body:body},{status:200})
  } catch(error:any){
    return NextResponse.json({error:error.message},{status:500})
  }
}

export async function GET(req:NextRequest) {
  try{
  const {searchParams} = new URL(req.url)
  const data = searchParams.getAll('data')
  if(data.length !== 0){
    return NextResponse.json({data:data},{status:200})
  }
  return NextResponse.json({error:'Invalid Parameters'},{status:400})
  } catch(error:any){
    return NextResponse.json({error:error.message},{status:500})
  }
}