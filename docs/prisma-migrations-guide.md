# Prisma Migrations Guide

## Purpose
- Document database schema changes and migration processes
- Enable AI-driven database modifications
- Maintain data integrity during schema updates

## Target Audience
- **Primary AI**: Cursor, GitHub Copilot
- **Secondary AI**: Database migration tools, CI/CD pipelines

## User Model Modifications

### Current Schema
```prisma
// prisma/schema.prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
}
```

### Modification Process
1. **Schema Changes**:
   - Add new fields to User model
   - Update relationships
   - Set appropriate constraints

2. **Migration Steps**:
   ```bash
   # Generate migration
   npx prisma migrate dev --name user_update

   # Apply to database
   npx prisma migrate deploy

   # Update Prisma Client
   npx prisma generate
   ```

3. **Verification**:
   - Check migration SQL
   - Test data integrity
   - Verify foreign key constraints

## Best Practices

1. **Naming Conventions**:
   - Use descriptive migration names
   - Follow `YYYYMMDD_description` format
   - Keep names lowercase with underscores

2. **Data Safety**:
   - Backup database before migrations
   - Use `@default` values for new required fields
   - Consider data transformation needs

3. **Testing**:
   - Test migrations in development first
   - Verify rollback procedures
   - Check application functionality

## Common Issues

1. **Migration Conflicts**:
   ```bash
   # Reset database (development only)
   npx prisma migrate reset

   # Recreate migrations
   npx prisma migrate dev
   ```

2. **Production Considerations**:
   - Schedule maintenance windows
   - Prepare rollback plans
   - Monitor migration duration

## Version Control

1. **Commit Guidelines**:
   - Include schema changes
   - Add migration files
   - Document breaking changes

2. **Branch Strategy**:
   - Create feature branches for schema changes
   - Review migration files
   - Test before merging

## Related Documentation
- `auth-flows.md`: Authentication implementation
- `api-contracts.yml`: API endpoints
- `error-handling-reference.md`: Error management

## Version Compatibility
- Prisma: ^5.0.0
- PostgreSQL: 14+
- Node.js: >=18.17.0