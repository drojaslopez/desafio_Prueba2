pnpm i express jsonwebtoken
pnpm i -D dotenv tsx typescript
pnpm i -D @types/bcryptjs @types/express @types/jsonwebtoken @types/node

pnpm exec tsc --init

pnpm up

pnpm rm express


pnpm --package=typescript dlx tsc --initden