import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    // Get user from session (implement authentication)
    const userId = 'user-id'; // Replace with actual user ID from session
    
    const todos = await db.query(`
      SELECT * FROM todos 
      WHERE user_id = $1 
      ORDER BY order_index ASC, created_at DESC
    `, [userId]);

    return NextResponse.json(todos.rows);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch todos' }, 
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const userId = 'user-id'; // Replace with actual user ID from session
    
    const { title, description, priority, category, dueDate, tags } = body;
    
    const result = await db.query(`
      INSERT INTO todos (user_id, title, description, priority, category, due_date, tags)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `, [userId, title, description, priority, category, dueDate, tags]);

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create todo' }, 
      { status: 500 }
    );
  }
}