// services/accessLog.ts

// Middleware function to log request details
export default function accessLog(req: Request, next: Function) {
  // Check if req object has the expected properties and if next is a function
  if (typeof req.method !== 'string' || typeof req.url !== 'string' || typeof req.headers !== 'object' || typeof next !== 'function') {
    throw new Error('Invalid arguments passed to accessLog function');
  }

  // Log request method, URL, and headers
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.url}`);
  console.log(`Headers: ${JSON.stringify(req.headers)}`);

  // Pass control to the next middleware function and return its result
  return next();
}
