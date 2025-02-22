# Error Handling Reference

## Purpose
- Document authentication and system error codes
- Provide standardized error handling patterns
- Enable consistent error responses across the application

## Authentication Error Codes

### OAuth Errors
```typescript
const AUTH_ERRORS = {
  INVALID_CREDENTIALS: {
    code: "auth/invalid-credentials",
    message: "Invalid email or password"
  },
  ACCOUNT_EXISTS: {
    code: "auth/account-exists",
    message: "Account already exists with different credentials"
  },
  PROVIDER_ERROR: {
    code: "auth/provider-error",
    message: "Authentication provider error"
  }
}
```

### Session Errors
```typescript
const SESSION_ERRORS = {
  EXPIRED: {
    code: "session/expired",
    message: "Session has expired"
  },
  INVALID: {
    code: "session/invalid",
    message: "Invalid session"
  }
}
```

## Error Handling Patterns

### API Response Format
```typescript
interface ErrorResponse {
  error: {
    code: string
    message: string
    details?: Record<string, any>
  }
}
```

### Client-Side Error Handling
```typescript
try {
  await signIn(provider)
} catch (error) {
  if (error.code === AUTH_ERRORS.INVALID_CREDENTIALS.code) {
    // Handle invalid credentials
  }
  // Handle other errors
}
```

## Best Practices

1. **Error Logging**:
   - Log error details with appropriate severity
   - Include relevant context
   - Mask sensitive information

2. **User Messages**:
   - Provide clear, user-friendly messages
   - Localize error messages
   - Avoid technical details in user-facing messages

3. **Security Considerations**:
   - Don't expose internal error details
   - Log authentication failures
   - Rate limit authentication attempts

## Common Scenarios

1. **Invalid Credentials**:
   ```typescript
   if (error.code === "auth/invalid-credentials") {
     showToast({
       type: "error",
       message: "Please check your email and password"
     })
   }
   ```

2. **Session Expiry**:
   ```typescript
   if (error.code === "session/expired") {
     signOut()
     redirect("/login")
   }
   ```

## Related Documentation
- `auth-flows.md`: Authentication implementation
- `api-contracts.yml`: API endpoints
- `prisma-migrations-guide.md`: Database schema

## Version Compatibility
- Next.js: 14.x
- Node.js: >=18.17.0
- TypeScript: ^5.0.0