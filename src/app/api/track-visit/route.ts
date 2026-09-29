import { NextResponse } from "next/server";

export async function POST() {
    const workspace = process.env.COUNTER_WORKSPACE;
    const name = process.env.COUNTER_NAME;
    const token = process.env.COUNTER_API_TOKEN;

    if (!workspace || !name || !token) {
        return NextResponse.json(
            { error: "Missing env variables" },
            { status: 500 }
        );
    }

    const url = `https://api.counterapi.dev/v2/${workspace}/${name}/up`;

    try {
        const res = await fetch(url, {
            method: "GET",   // ← POST instead of GET
            headers: {
                Authorization: `Bearer ${token}`,
            },
            cache: "no-store",
        });

        const data = await res.json();

        // Force status to 200 if CounterAPI returns success code
        const status = data?.code === "200" ? 200 : res.status;
        return NextResponse.json(data, { status });
    } catch {
        return NextResponse.json(
            { error: "Network error" },
            { status: 500 }
        );
    }
}

export async function GET() {
    const workspace = process.env.COUNTER_WORKSPACE;
    const name = process.env.COUNTER_NAME;
    const token = process.env.COUNTER_API_TOKEN;

    if (!workspace || !name || !token) {
        return NextResponse.json(
            { error: "Missing env variables" },
            { status: 500 }
        );
    }

    const url = `https://api.counterapi.dev/v2/${workspace}/${name}`;

    try {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            cache: "no-store",
        });

        const data = await res.json();
        const status = data?.code === "200" ? 200 : res.status;
        return NextResponse.json(data, { status });
    } catch {
        return NextResponse.json(
            { error: "Network error" },
            { status: 500 }
        );
    }
}