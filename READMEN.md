pnpm init

pnpm i express jsonwebtoken
pnpm i -D dotenv tsx typescript
pnpm i -D @types/bcryptjs @types/express @types/jsonwebtoken @types/node


pnpm install --save-dev @types/node @types/validator
pnpm install sequelize reflect-metadata sequelize-typescript
pnpm install --save pg pg-hstore

npx tsc --init
pnpm exec tsc --init




pnpm --package=typescript dlx tsc --initden



docker-compose.yml


docker-compose up -d
docker ps

CONTAINER ID   IMAGE             COMMAND                  CREATED        STATUS             PORTS                    NAMES
987abc3463d8   postgres:latest   "docker-entrypoint.s…"   13 hours ago   Up About an hour   0.0.0.0:5434->5432/tcp   postgreshito2

docker exec -it 987abc3463d8 bash 

psql -U postgres -d dbhito2






pnpm up

pnpm rm express