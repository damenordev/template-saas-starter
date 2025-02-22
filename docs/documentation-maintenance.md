# Documentation Maintenance Guide

## Purpose
- Ensure documentation stays synchronized with code changes
- Establish clear processes for updating documentation after task completion
- Enable automated tracking of documentation updates

## Documentation Update Process

### 1. Commit-Driven Documentation Updates

When making code changes:

1. **Identify Affected Documentation**
   - Review changes in the commit
   - List all documentation files that need updates
   - Common files to check:
     - `auth-flows.md`
     - `api-contracts.yml`
     - `ui-component-library.md`

2. **Update Documentation Files**
   - Add/modify relevant sections
   - Update version numbers if applicable
   - Add new examples for modified features

3. **Documentation Commit Guidelines**
   ```bash
   # Commit message format
   docs: update [doc-name] for [feature/change]
   
   # Example
   docs: update auth-flows.md for new OAuth provider
   ```

### 2. Task Completion Checklist

Before marking a task as complete:

- [ ] Review all code changes
- [ ] Identify affected documentation files
- [ ] Update technical documentation
- [ ] Update API documentation if endpoints changed
- [ ] Update UI component documentation if interfaces changed
- [ ] Add new examples if needed
- [ ] Update version numbers if applicable

### 3. Documentation Files to Monitor

1. **Core Documentation**
   - `docs/auth-flows.md`: Authentication mechanisms
   - `docs/api-contracts.yml`: API endpoints and schemas
   - `docs/ui-component-library.md`: UI components

2. **Code-Specific Documentation**
   - Component README files
   - API route documentation
   - Type definitions

### 4. Automated Documentation Checks

1. **Pre-commit Hooks**
   - Check for documentation files in changes
   - Verify documentation format
   - Ensure version numbers are updated

2. **CI/CD Pipeline**
   - Validate documentation links
   - Check for broken references
   - Generate documentation reports

## Best Practices

1. **Documentation First**
   - Update documentation as part of the task, not after
   - Include documentation changes in the same PR
   - Use documentation as a design tool

2. **Version Control**
   - Keep a changelog for major documentation updates
   - Tag documentation versions with code releases
   - Archive outdated documentation

3. **Quality Checks**
   - Review documentation as part of code review
   - Test code examples in documentation
   - Validate API documentation against actual endpoints

## AI-Specific Guidelines

### Documentation Markers

Use these markers to help AI tools identify documentation sections:

```markdown
<!-- @ai-doc-section: auth-flows -->
<!-- @ai-doc-version: 1.0.0 -->
<!-- @ai-doc-related: api-contracts.yml -->
```

### File Fingerprints

Maintain consistent fingerprints for AI tools:

```markdown
# Function Definitions
function authenticateUser() {...}

# API Routes
app.post('/api/auth/login', ...)

# Component Props
interface AuthFormProps {...}
```

## Version Compatibility

- Documentation Format: Markdown
- Supported Tools: VS Code, GitHub
- CI/CD Integration: GitHub Actions

## Maintenance Schedule

1. **Daily**
   - Review PR documentation changes
   - Update affected documentation files

2. **Weekly**
   - Validate documentation accuracy
   - Check for outdated content

3. **Monthly**
   - Full documentation review
   - Update version numbers
   - Archive old versions

## Error Prevention

1. **Common Mistakes**
   - Forgetting to update version numbers
   - Missing related documentation files
   - Incomplete example updates

2. **Prevention Strategies**
   - Use documentation checklists
   - Automated documentation checks
   - Regular documentation audits

## Tags
#documentation #maintenance #best-practices #automation #quality