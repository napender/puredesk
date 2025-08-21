import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    const body = await request.json();
    const userId = 'user-id'; // Replace with actual user ID from session

    if (!id) {
      return NextResponse.json({ error: 'Todo ID is required' }, { status: 400 });
    }

    const fields = Object.keys(body).map((key, index) => `"${key}" = $${index + 3}`).join(', ');
    const values = Object.values(body);

    const result = await db.query(`
      UPDATE todos
      SET ${fields}
      WHERE id = $1 AND user_id = $2
      RETURNING *
    `, [id, userId, ...values]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Todo not found' }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating todo:', error);
    return NextResponse.json(
      { error: 'Failed to update todo' }, 
      { status: 500 }
    );
  }
}
