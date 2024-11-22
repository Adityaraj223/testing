import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { category, fields } = await req.json();

    const response = await fetch('https://revenantpulse.vercel.app/api/v1/events', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.REVENANTPULSE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category,
        fields,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `Failed to send event to Revenantpulse: ${errorText}` },
        { status: response.status }
      );
    }

    return NextResponse.json({ message: 'Event logged successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error in POST /api/events:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
