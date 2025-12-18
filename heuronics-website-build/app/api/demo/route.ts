import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(req: Request) {
  const body = await req.json()

  const { error } = await supabase
    .from("demo_requests")
    .insert([
      {
        name: body.name,
        email: body.email,
        company: body.company,
        country: body.country,
        phone: body.phone,
        depth: Number(body.depth),
        endurance: Number(body.endurance),
        payloads: body.payloads,
        budget: body.budget,
        currency: body.currency,
        use_case: body.useCase
      }
    ])

  if (error) {
    return NextResponse.json({ success: false }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
