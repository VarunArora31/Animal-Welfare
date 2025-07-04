# 🧪 Authentication Test Script

## Quick Test (30 seconds)

1. **Open app**: Go to `http://localhost:5174/`
2. **Check console**: Should see "Using mock authentication (Supabase not configured)"
3. **Create account**: 
   - Click "Sign Up" 
   - Fill: name=Test, email=test@test.com, password=123456
   - Click "Create account"
4. **Verify login**: Should see your name in top-right corner
5. **Test sign out**: Click "Sign Out" - should return to signed-out state
6. **Test sign in**: Click "Sign In", use same credentials

## Expected Results ✅

- ✅ No "failed to fetch" errors
- ✅ No Supabase connection attempts
- ✅ Console shows "Using mock authentication"
- ✅ Sign up creates account
- ✅ Sign in works with created account
- ✅ Sign out clears session
- ✅ Page refresh remembers login state

## If you see "failed to fetch":

1. Open browser console (F12)
2. Clear all storage:
   ```javascript
   localStorage.clear()
   sessionStorage.clear()
   location.reload()
   ```
3. Try again

The authentication should now work **completely offline** without any network calls!
