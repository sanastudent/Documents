

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
      // Simple in-memory authentication (replace with DB check in production)
      const users = [
        { email: 'user@example.com', password: 'password123' }, 
      ];
  
      const user = users.find(u => u.email === email && u.password === password);
  
      if (user) {
        // You can create a session here and store user info in cookies or JWT
        res.status(200).json({ success: true });
      } else {
        res.status(401).json({ success: false, message: 'Invalid email or password' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  