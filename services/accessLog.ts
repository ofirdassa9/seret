// services/accessLog.ts

// Middleware function to log request details
export default function accessLog(req: Request, next: Function) {
  // Log request method, URL, and headers
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.url}`);
  console.log(`Headers: ${JSON.stringify(req.headers)}`);

  // Pass control to the next middleware function
  next();
}
