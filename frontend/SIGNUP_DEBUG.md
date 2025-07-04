# 🔍 Sign Up Debug Guide

## To test sign up functionality:

1. **Open the app**: Go to `http://localhost:5174/`
2. **Open browser console** (F12)
3. **Clear any existing data**:
   ```javascript
   localStorage.clear()
   location.reload()
   ```

4. **Go to Register page**: Click "Sign Up" button
5. **Fill the form**:
   - Full Name: Test User
   - Email: test@example.com
   - Password: password123
   - Confirm Password: password123
   - Account Type: Individual User

6. **Check console logs** while clicking "Create account"

## Expected Console Output:

```
Using mock authentication (Supabase not configured)
Attempting sign up with: {email: "test@example.com", fullName: "Test User", passwordLength: 11}
Mock sign up attempt for: test@example.com
Setting mock user and profile: {mockUser: {...}, mockProfile: {...}}
Mock sign up successful for: test@example.com
Sign up successful, navigating to dashboard
```

## If it's NOT working:

1. **Check for errors** in the console
2. **Verify the form data** is being captured
3. **Test the signUp function directly**:
   ```javascript
   // In browser console
   window.localStorage.setItem('mockUsers', '[]');
   console.log('Testing direct sign up...');
   ```

## Manual Test:

If the form isn't working, test authentication directly in console:
```javascript
// Clear storage first
localStorage.clear();

// Test sign up manually
const mockUser = {
  id: 'test-123',
  email: 'test@example.com',
  created_at: new Date().toISOString(),
  app_metadata: {},
  user_metadata: { full_name: 'Test User' },
  aud: 'authenticated'
};

const mockProfile = {
  id: 'test-123',
  email: 'test@example.com',
  full_name: 'Test User',
  avatar_url: null,
  role: 'user',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
};

localStorage.setItem('mockUser', JSON.stringify(mockUser));
localStorage.setItem('mockProfile', JSON.stringify(mockProfile));
localStorage.setItem('mockUsers', JSON.stringify([{
  id: 'test-123',
  email: 'test@example.com',
  password: 'password123',
  full_name: 'Test User',
  created_at: new Date().toISOString()
}]));

location.reload();
```

After running this, you should see the user logged in when the page reloads.
