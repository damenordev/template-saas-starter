# Authentication Flows Documentation

## Purpose
- Document authentication mechanisms to enable AI-driven security implementations and modifications
- Enable automated operations for managing authentication providers and access rules
- Prevent security vulnerabilities during authentication flow modifications

## Target Audience
- **Primary AI**: Cursor, GitHub Copilot
- **Secondary AI**: CI/CD automation tools, security testing bots

## Required Sections

### Context Map
- **Related Files**:
  - `app/[locale]/(auth)/*`: Authentication route handlers and components
  - `src/lib/auth/*`: Core authentication logic
  - `prisma/schema.prisma`: User and session models
  - `src/components/auth/*`: Authentication UI components

- **Dependencies**:
  - `@auth/core`: ^0.18.0
  - `@auth/prisma-adapter`: ^1.0.0
  - `@prisma/client`: ^5.0.0

### Coding Patterns

#### Authentication Setup
```typescript
// File: src/lib/auth/auth.config.ts
export const authConfig = {
  providers: [...],
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  callbacks: {
    async session({ session, token }) {...},
    async jwt({ token, user }) {...}
  }
}
```

#### Protected Routes Pattern
```typescript
// File: middleware.ts
export const config = {
  matcher: ["/dashboard/:path*", "/api/:path*"]
}
```

### Modification Rules

1. **Adding New Auth Provider**:
   ```typescript
   // 1. Add provider configuration
   import GoogleProvider from "@auth/core/providers/google"
   
   export const authConfig = {
     providers: [
       GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET
       })
     ]
   }
   
   // 2. Update environment variables
   // .env
   GOOGLE_CLIENT_ID="your-client-id"
   GOOGLE_CLIENT_SECRET="your-client-secret"
   ```

2. **Modifying User Schema**:
   - Update `prisma/schema.prisma`
   - Run `npx prisma generate`
   - Run `npx prisma db push`
   - Update related auth callbacks

### Common Errors

1. **Invalid Callback Configuration**:
   ```typescript
   // ❌ Incorrect
   callbacks: {}
   
   // ✅ Correct
   callbacks: {
     async session({ session, token }) {
       session.user.id = token.sub
       return session
     }
   }
   ```

2. **Missing Environment Variables**:
   ```env
   # ❌ Incorrect
   AUTH_SECRET=
   
   # ✅ Correct
   AUTH_SECRET="your-secure-secret-key"
   ```

## AI-Specific Metadata

### Tags
#authentication #security #next-auth #prisma #oauth

### File Fingerprints
- Auth Config: `export const authConfig = {`
- Protected Route: `export const config = { matcher:`
- Auth Component: `export function AuthForm(`

### Related Documentation
- `api-contracts.yml`: API endpoints for authentication
- `prisma-migrations-guide.md`: User model modifications
- `error-handling-reference.md`: Auth-specific error codes

## Version Compatibility
- Next.js: 14.x
- Node.js: >=18.17.0
- Database: PostgreSQL 14+

## Maintenance Rules
1. Update SHA-1 hash when modifying auth configurations
2. Regenerate API types after schema changes
3. Update error codes documentation
4. Verify middleware matcher patterns
