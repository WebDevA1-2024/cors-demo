// app/api/hello/route.js
import { NextResponse } from 'next/server';

// Fungsi handler untuk GET request
export async function GET() {
  const response = NextResponse.json({ message: 'CORS sukses!' });
  
  // Menambahkan header CORS secara manual
  response.headers.set('Access-Control-Allow-Origin', '*'); // Mengizinkan semua domain
  response.headers.set('Access-Control-Allow-Methods', 'GET, HEAD'); // Mengizinkan metode GET dan HEAD
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type'); // Mengizinkan header tertentu
  
  return response;
}
